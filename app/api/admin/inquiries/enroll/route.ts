// Backward-compatible endpoint for older admin clients. Approval now creates
// family accounts only; course access is managed in Admin → Enrollments.
export { POST } from "../approve/route";
