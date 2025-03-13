
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { 
  Building, 
  Briefcase, 
  Handshake, 
  Home, 
  LightbulbIcon, 
  Settings, 
  LogOut, 
  Users,
  Menu,
  X 
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SidebarNavProps {
  userType: "individual" | "company";
}

export function SidebarNav({ userType }: SidebarNavProps) {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  const individualLinks = [
    { name: "Home", href: "/dashboard/individual", icon: Home },
    { name: "Jobs & Internships", href: "/dashboard/individual/jobs", icon: Briefcase },
    { name: "Freelance Projects", href: "/dashboard/individual/freelance", icon: Handshake },
    { name: "CORE Connect", href: "/dashboard/individual/core", icon: Users },
    { name: "Ideas & Invest", href: "/dashboard/individual/ideas", icon: LightbulbIcon },
  ];

  const companyLinks = [
    { name: "Home", href: "/dashboard/company", icon: Home },
    { name: "Manage Jobs", href: "/dashboard/company/jobs", icon: Briefcase },
    { name: "Freelance Projects", href: "/dashboard/company/freelance", icon: Handshake },
    { name: "CORE Connect", href: "/dashboard/company/core", icon: Users },
    { name: "Ideas & Invest", href: "/dashboard/company/ideas", icon: LightbulbIcon },
    { name: "B2B Space", href: "/dashboard/company/b2b", icon: Building },
  ];

  const links = userType === "individual" ? individualLinks : companyLinks;
  const settingsPath = userType === "individual" 
    ? "/dashboard/individual/settings" 
    : "/dashboard/company/settings";
  
  return (
    <aside
      className={cn(
        "group relative flex h-screen flex-col border-r bg-card transition-all duration-300 ease-in-out",
        expanded ? "w-64" : "w-16"
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Link to="/" className={cn(expanded ? "justify-start" : "justify-center", "flex w-full items-center")}>
          <Logo showText={expanded} />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
          className="ml-auto"
        >
          {expanded ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        <div className="space-y-1">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                location.pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                !expanded && "justify-center"
              )}
            >
              <link.icon className={cn("h-5 w-5", expanded && "mr-3")} />
              {expanded && <span>{link.name}</span>}
            </Link>
          ))}
        </div>
      </nav>
      <div className="border-t p-4">
        <div className="space-y-1">
          <Link
            to={settingsPath}
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium",
              location.pathname.includes(settingsPath)
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              !expanded && "justify-center"
            )}
          >
            <Settings className={cn("h-5 w-5", expanded && "mr-3")} />
            {expanded && <span>Settings</span>}
          </Link>
          <Link
            to="/"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
              !expanded && "justify-center"
            )}
          >
            <LogOut className={cn("h-5 w-5", expanded && "mr-3")} />
            {expanded && <span>Sign Out</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
}
