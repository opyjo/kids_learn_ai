"use client";

import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  backgroundClassName?: string;
}

export const AuthLayout = ({
  children,
  backgroundClassName,
}: AuthLayoutProps) => {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800",
        backgroundClassName
      )}
    >
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        {children}
      </main>
    </div>
  );
};
