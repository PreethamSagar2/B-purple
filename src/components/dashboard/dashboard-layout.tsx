
import { Outlet } from "react-router-dom";
import { SidebarNav } from "./sidebar-nav";

interface DashboardLayoutProps {
  userType: "individual" | "company";
}

export function DashboardLayout({ userType }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <SidebarNav userType={userType} />
      <div className="flex-1 p-6 lg:p-8">
        <Outlet />
      </div>
    </div>
  );
}
