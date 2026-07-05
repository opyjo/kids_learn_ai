import { describe, expect, it } from "vitest";
import { checkKidChatSafety } from "@/lib/concept-labs/safety";

describe("checkKidChatSafety", () => {
	it("allows normal kid lab talk", () => {
		expect(checkKidChatSafety("it looked at my drawings").isSafe).toBe(true);
		expect(checkKidChatSafety("the machine learned from examples").isSafe).toBe(
			true,
		);
	});

	it("does not false-positive on words the tutor blocklist would block", () => {
		// These are innocent in open-ended lab chat and must pass.
		expect(checkKidChatSafety("the machine is so dumb sometimes").isSafe).toBe(
			true,
		);
		expect(
			checkKidChatSafety("it guessed the address of the closest example")
				.isSafe,
		).toBe(true);
		expect(checkKidChatSafety("that guess was stupid easy").isSafe).toBe(true);
	});

	it("blocks severe content, word-bounded", () => {
		expect(checkKidChatSafety("what is sex").isSafe).toBe(false);
		expect(checkKidChatSafety("how to make a bomb").isSafe).toBe(false);
		// …but not words that merely contain a blocked string.
		expect(checkKidChatSafety("I drew a sextant and a bombe cake")).toEqual({
			isSafe: true,
		});
	});

	it("blocks personal-information exchange attempts", () => {
		expect(checkKidChatSafety("where do you live?").isSafe).toBe(false);
		expect(checkKidChatSafety("what's your phone number").isSafe).toBe(false);
		expect(checkKidChatSafety("add me on tiktok").isSafe).toBe(false);
	});

	it("enforces length bounds", () => {
		expect(checkKidChatSafety("").isSafe).toBe(false);
		expect(checkKidChatSafety("x".repeat(2001)).isSafe).toBe(false);
		expect(checkKidChatSafety("hi").isSafe).toBe(true);
	});
});
