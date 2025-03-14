import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Search, BarChart2, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  const navigate = useNavigate();
  const userType = localStorage.getItem('userType'); // or from your auth context

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (userType === 'individual') {
      navigate('/dashboard/individual');
    } else if (userType === 'company') {
      navigate('/dashboard/company');
    } else {
      navigate('/');
    }
  };

  const handleProfileClick = () => {
    // Check user type and navigate accordingly
    if (userType === 'individual') {
      navigate('/dashboard/individual/profile');
    } else if (userType === 'company') {
      navigate('/dashboard/company/profile');
    } else {
      // If no userType is found, redirect to login or show an error
      navigate('/dashboard/individual/profile'); // Redirect to individual profile as a fallbackn-;
    }
  };

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container">
        {/* Left - Logo */}
        <div className="flex items-center">
          <Link 
            to="#" 
            onClick={handleLogoClick} 
            className="font-semibold text-xl"
          >
            bcommune
          </Link>
        </div>

        {/* Middle - Search */}
        <div className="flex-1 flex justify-center px-6">
          <div className="w-full max-w-lg relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search..." 
              className="w-full pl-9 bg-muted/50"
            />
          </div>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <BarChart2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
          </Button>
          <Button 
            variant="ghost" 
            className="p-0 hover:bg-transparent"
            onClick={handleProfileClick}
          >
            <Avatar className="h-8 w-8 cursor-pointer hover:opacity-80 transition-opacity">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </div>
  );
}