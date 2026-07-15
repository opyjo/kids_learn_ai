import { Skeleton } from "@/components/ui/skeleton";

export default function AdminLoading() {
	return (
		<div className="space-y-4">
			<Skeleton className="h-9 w-56" />
			<div className="grid gap-4 md:grid-cols-4">
				{Array.from({ length: 4 }).map((_, i) => (
					<Skeleton key={`admin-skeleton-${i}`} className="h-20 rounded-lg" />
				))}
			</div>
			<Skeleton className="h-80 rounded-xl" />
		</div>
	);
}
