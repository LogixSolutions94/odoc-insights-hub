import { Outlet } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function MarketingLayout() {
  return (
    <div className="relative flex min-h-dvh flex-col">
      {/* TODO: Brancher un service d'analytics (ex: Plausible, PostHog) */}
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
