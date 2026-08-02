"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

type AnalyticsParameters = Record<string, string | number | boolean>;

const AUTH_EVENTS = new Set(["login", "sign_up"]);
const AUTH_METHODS = new Set(["password", "email", "google"]);
const TRIAL_CTA_TEXT = /trial|book a class|get access|start learning/i;

export function trackGoogleAnalyticsEvent(
	eventName: string,
	parameters: AnalyticsParameters = {},
) {
	if (typeof window === "undefined" || !window.dataLayer) return false;

	sendGAEvent("event", eventName, parameters);
	return true;
}

/**
 * Tracks site-wide CTA clicks and successful authentication redirects.
 * Values are intentionally limited to event names, methods, and URL paths so
 * no names, email addresses, or other form data enter Google Analytics.
 */
export function GoogleAnalyticsEvents() {
	useEffect(() => {
		let authEventTimer: ReturnType<typeof setTimeout> | undefined;
		const currentUrl = new URL(window.location.href);
		const authEvent = currentUrl.searchParams.get("analytics_event");
		const authMethod = currentUrl.searchParams.get("analytics_method");

		if (
			authEvent &&
			authMethod &&
			AUTH_EVENTS.has(authEvent) &&
			AUTH_METHODS.has(authMethod)
		) {
			let attempts = 0;
			const trackAuthEvent = () => {
				if (
					trackGoogleAnalyticsEvent(authEvent, { method: authMethod }) ||
					attempts >= 20
				) {
					return;
				}

				attempts += 1;
				authEventTimer = setTimeout(trackAuthEvent, 100);
			};

			trackAuthEvent();
			currentUrl.searchParams.delete("analytics_event");
			currentUrl.searchParams.delete("analytics_method");
			window.history.replaceState(
				window.history.state,
				"",
				`${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`,
			);
		}

		const trackTrialCtaClick = (event: MouseEvent) => {
			if (!(event.target instanceof Element)) return;

			const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
			if (!anchor) return;

			const destination = new URL(anchor.href, window.location.origin);
			if (destination.origin !== window.location.origin) return;

			const linkText = `${anchor.getAttribute("aria-label") ?? ""} ${anchor.textContent ?? ""}`;
			const isTrialDestination =
				destination.pathname === "/inquiry/book" ||
				(destination.pathname === "/inquiry" && TRIAL_CTA_TEXT.test(linkText));

			if (!isTrialDestination) return;

			trackGoogleAnalyticsEvent("trial_cta_click", {
				cta_location: window.location.pathname,
				cta_destination: destination.pathname,
			});
		};

		document.addEventListener("click", trackTrialCtaClick);

		return () => {
			if (authEventTimer) clearTimeout(authEventTimer);
			document.removeEventListener("click", trackTrialCtaClick);
		};
	}, []);

	return null;
}
