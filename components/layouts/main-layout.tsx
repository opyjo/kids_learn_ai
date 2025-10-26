"use client";

import { Footer } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/site-header";
import { type ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
