import { type RenderOptions, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type React from "react";
import type { ReactElement } from "react";

// Create a custom render that includes common providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
	return <>{children}</>;
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "wrapper">,
) => {
	return {
		user: userEvent.setup(),
		...render(ui, { wrapper: AllTheProviders, ...options }),
	};
};

// Re-export everything from testing-library
export * from "@testing-library/react";

// Override render method
export { customRender as render };
