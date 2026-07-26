import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { JoinLiveGameCard } from "@/components/dashboard/join-live-game-card";
import {
	JoinGameForm,
	normalizeGameCode,
} from "@/components/quizzes/join-game-form";

const push = vi.fn();

vi.mock("next/navigation", () => ({
	useRouter: () => ({ push }),
}));

beforeEach(() => push.mockClear());

describe("normalizeGameCode", () => {
	it("uppercases, strips punctuation and spaces, and caps at six characters", () => {
		expect(normalizeGameCode("u886yv")).toBe("U886YV");
		expect(normalizeGameCode("u8 86-yv")).toBe("U886YV");
		expect(normalizeGameCode("u886yvEXTRA")).toBe("U886YV");
		expect(normalizeGameCode("!!!")).toBe("");
	});
});

describe("JoinGameForm", () => {
	it("keeps the button disabled until a full six-character code is entered", async () => {
		const user = userEvent.setup();
		render(<JoinGameForm />);
		const button = screen.getByRole("button", { name: /join game/i });
		expect(button).toBeDisabled();

		await user.type(screen.getByLabelText(/game code/i), "u886y");
		expect(button).toBeDisabled();

		await user.type(screen.getByLabelText(/game code/i), "v");
		expect(button).toBeEnabled();
	});

	it("navigates to the uppercased live game route on submit", async () => {
		const user = userEvent.setup();
		render(<JoinGameForm />);

		await user.type(screen.getByLabelText(/game code/i), "u886yv");
		await user.click(screen.getByRole("button", { name: /join game/i }));

		expect(push).toHaveBeenCalledWith("/quiz/live/U886YV");
	});

	it("does not submit twice while the first navigation is in flight", async () => {
		const user = userEvent.setup();
		render(<JoinGameForm />);

		await user.type(screen.getByLabelText(/game code/i), "u886yv");
		const button = screen.getByRole("button", { name: /join game/i });
		await user.click(button);
		expect(button).toBeDisabled();

		expect(push).toHaveBeenCalledTimes(1);
	});
});

describe("JoinLiveGameCard", () => {
	it("renders the dashboard entry point with its own input id", async () => {
		const user = userEvent.setup();
		render(<JoinLiveGameCard />);

		expect(screen.getByText("Live Class Challenge")).toBeInTheDocument();
		const input = screen.getByLabelText(/game code/i);
		expect(input).toHaveAttribute("id", "dashboard-game-code");

		await user.type(input, "abc123");
		await user.click(screen.getByRole("button", { name: /join game/i }));
		expect(push).toHaveBeenCalledWith("/quiz/live/ABC123");
	});
});
