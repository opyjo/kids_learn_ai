import { SubmissionsTab } from "@/components/admin/submissions-tab";

export default function SubmissionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Student Submissions
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Review and grade student code submissions
        </p>
      </div>

      <SubmissionsTab />
    </div>
  );
}

