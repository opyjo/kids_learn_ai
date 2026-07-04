import { Skeleton } from "@/components/ui/skeleton";

export default function CourseLoading() {
	return (
		<div className="container mx-auto max-w-6xl space-y-6 px-4 py-8">
			<Skeleton className="h-5 w-48" />
			<Skeleton className="h-10 w-80" />
			<Skeleton className="h-5 w-full max-w-xl" />
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 6 }).map((_, i) => (
					<Skeleton key={`course-skeleton-${i}`} className="h-44 rounded-xl" />
				))}
			</div>
		</div>
	);
}
