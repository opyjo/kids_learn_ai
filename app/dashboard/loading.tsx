import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
	return (
		<div className="container mx-auto max-w-6xl space-y-6 px-4 py-8">
			<Skeleton className="h-10 w-64" />
			<div className="grid gap-4 md:grid-cols-2">
				<Skeleton className="h-36 rounded-xl" />
				<Skeleton className="h-36 rounded-xl" />
			</div>
			<div className="grid gap-4 md:grid-cols-3">
				<Skeleton className="h-28 rounded-xl" />
				<Skeleton className="h-28 rounded-xl" />
				<Skeleton className="h-28 rounded-xl" />
			</div>
			<Skeleton className="h-64 rounded-xl" />
		</div>
	);
}
