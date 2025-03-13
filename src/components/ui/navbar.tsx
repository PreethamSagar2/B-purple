
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  transparent?: boolean;
}

export function Navbar({ transparent = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full border-b py-3 transition-all duration-300",
        transparent 
          ? "border-transparent bg-transparent backdrop-blur-sm" 
          : "border-border bg-background/95 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLinks />
          <div className="flex items-center gap-4">
            <Link to="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/sign-up">
              <Button>Join bcommune</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 md:hidden">
          <div className="flex animate-fade-in flex-col gap-4 py-4">
            <NavLinks mobile />
            <div className="mt-4 flex flex-col gap-3">
              <Link to="/sign-in" className="w-full">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/sign-up" className="w-full">
                <Button className="w-full">Join bcommune</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

interface NavLinksProps {
  mobile?: boolean;
}

function NavLinks({ mobile }: NavLinksProps) {
  const links = [
    { name: "Jobs", path: "/jobs" },
    { name: "Freelance", path: "/freelance" },
    { name: "CORE Connect", path: "/core" },
    { name: "Ideas & Invest", path: "/ideas" },
    { name: "B2B Space", path: "/b2b" },
  ];

  if (mobile) {
    return (
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="rounded-md px-3 py-2 text-foreground hover:bg-secondary"
          >
            {link.name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}

import { cn } from "@/lib/utils";
