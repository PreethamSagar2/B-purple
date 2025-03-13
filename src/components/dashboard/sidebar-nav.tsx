
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarNavProps {
  userType: "individual" | "company";
}

export function SidebarNav({ userType }: SidebarNavProps) {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  // Mock user data - replace with actual user data from your auth system
  const user = {
    name: "John Doe",
    avatar: "/placeholder-avatar.jpg",
    initials: "JD"
  };

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
    <nav className={cn(
      "h-screen border-r bg-background px-3 py-4 flex flex-col",
      expanded ? "w-64" : "w-20"
    )}>
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="self-end mb-2"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Profile Section - Updated with responsive avatar */}
      <div className={cn(
        "flex flex-col items-center border-b mb-4",
        expanded ? "py-6 px-4" : "py-3 px-2"
      )}>
        <Avatar className={cn(
          "mb-4 transition-all duration-200",
          expanded ? "h-36 w-36" : "h-12 w-12" // h-36 (144px) when expanded, h-12 (48px) when collapsed
        )}>
          <AvatarImage src={user.avatar} />
          <AvatarFallback className={cn(
            "transition-all duration-200",
            expanded ? "text-4xl" : "text-base"
          )}>
            {user.initials}
          </AvatarFallback>
        </Avatar>
        {expanded && (
          <span className="text-base font-medium text-center">{user.name}</span>
        )}
      </div>

      {/* Navigation Links */}
      <div className="space-y-1">
        {(userType === "individual" ? individualLinks : companyLinks).map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                !expanded && "justify-center px-2"
              )}
            >
              <link.icon size={20} />
              {expanded && <span>{link.name}</span>}
            </Link>
          );
        })}
      </div>

      {/* Settings and Logout at bottom */}
      <div className="mt-auto space-y-1">
        <Link
          to="/settings"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors text-muted-foreground hover:bg-muted hover:text-foreground",
            !expanded && "justify-center px-2"
          )}
        >
          <Settings size={20} />
          {expanded && <span>Settings</span>}
        </Link>
        <Button
          variant="ghost"
          className={cn(
            "w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors text-muted-foreground hover:bg-muted hover:text-foreground",
            !expanded && "justify-center px-2"
          )}
          onClick={() => {/* Add logout handler */}}
        >
          <LogOut size={20} />
          {expanded && <span>Logout</span>}
        </Button>
      </div>
    </nav>
  );
}
