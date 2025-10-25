"use client";

import { SiteHeader } from "@/components/site-header";
import { type ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      {children}
    </div>
  );
};
