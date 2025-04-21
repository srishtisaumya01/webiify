
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Why Us", path: "/why-us" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
        isScrolled
          ? "bg-webiify-blue/95 shadow-md py-2 backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/63a6bfc1-979a-4da2-bd8e-dd15bbf738da.png" 
              alt="Webiify Logo" 
              className="h-10 sm:h-12"
              style={{ filter: isScrolled ? "drop-shadow(0 0 3px rgba(0,0,0,0.3))" : "none" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-webiify-teal",
                  location.pathname === link.path
                    ? "text-webiify-teal font-semibold"
                    : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button variant="default" size="sm" className="ml-4 bg-gradient-to-r from-webiify-teal to-webiify-green text-white">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-webiify-blue/95 mt-3 py-4 px-4 rounded-lg animate-fade-in backdrop-blur-sm shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors px-4 py-2 rounded-md",
                    location.pathname === link.path
                      ? "bg-webiify-teal/20 text-webiify-teal font-semibold"
                      : "text-white/90 hover:bg-webiify-teal/10"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="default" className="mt-2 bg-gradient-to-r from-webiify-teal to-webiify-green text-white">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
