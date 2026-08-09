// Recruitment stays closed unless it is explicitly enabled for a deployment.
// Set NEXT_PUBLIC_CAREERS_OPEN=true and redeploy to reopen the careers funnel.
export const CAREERS_OPEN =
	process.env.NEXT_PUBLIC_CAREERS_OPEN?.toLowerCase() === "true";
