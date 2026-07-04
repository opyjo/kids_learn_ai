import { Skeleton } from "@/components/ui/skeleton";

export default function LessonLoading() {
	return (
		<div className="container mx-auto max-w-7xl space-y-6 px-4 py-8">
			<Skeleton className="h-5 w-64" />
			<div className="grid gap-6 xl:grid-cols-2">
				<div className="space-y-4">
					<Skeleton className="h-10 w-72" />
					<Skeleton className="h-5 w-40" />
					<Skeleton className="h-96 rounded-xl" />
				</div>
				<Skeleton className="hidden h-[32rem] rounded-xl xl:block" />
			</div>
		</div>
	);
}
