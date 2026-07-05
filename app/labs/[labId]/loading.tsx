import { SiteHeader } from "@/components/site-header";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LabRunnerLoading() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
			<SiteHeader />
			<div className="container mx-auto px-4 py-6 max-w-2xl">
				<Skeleton className="h-5 w-24 mb-4" />
				<Card className="border shadow-sm">
					<CardContent className="p-5 space-y-5">
						<div className="flex items-center gap-2.5">
							<Skeleton className="h-5 w-5 rounded" />
							<div className="space-y-1.5">
								<Skeleton className="h-4 w-40" />
								<Skeleton className="h-3 w-56" />
							</div>
						</div>
						<div className="flex items-center gap-1.5">
							{["a", "b", "c", "d"].map((key) => (
								<Skeleton key={key} className="h-12 flex-1 rounded-lg" />
							))}
						</div>
						<Skeleton className="h-5 w-3/4" />
						<div className="space-y-2.5">
							<Skeleton className="h-12 w-full rounded-xl" />
							<Skeleton className="h-12 w-full rounded-xl" />
							<Skeleton className="h-12 w-full rounded-xl" />
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
