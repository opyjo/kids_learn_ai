import { SiteHeader } from "@/components/site-header";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LabsLoading() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
			<SiteHeader />
			<div className="container mx-auto px-4 py-8 max-w-4xl">
				<div className="flex flex-col items-center gap-3 mb-8">
					<Skeleton className="h-8 w-28 rounded-full" />
					<Skeleton className="h-9 w-72" />
					<Skeleton className="h-5 w-96 max-w-full" />
				</div>
				<div className="grid gap-4 sm:grid-cols-2">
					{["a", "b", "c", "d"].map((key) => (
						<Card key={key} className="border-2">
							<CardContent className="p-5 space-y-3">
								<div className="flex items-center justify-between">
									<Skeleton className="h-10 w-10 rounded-xl" />
									<Skeleton className="h-5 w-16 rounded-full" />
								</div>
								<Skeleton className="h-5 w-40" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-24" />
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
