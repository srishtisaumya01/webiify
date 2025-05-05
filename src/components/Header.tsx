
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
          ? "bg-gradient-to-r from-[#1c2533] via-[#1f3447] to-[#3c5a87] shadow-md py-2 backdrop-blur-sm"
          : "bg-white/80 dark:bg-transparent backdrop-blur-md dark:backdrop-blur-sm",
        isScrolled
          ? "text-white"
          : "text-gray-900 dark:text-white"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/b9b7d557-456c-45f5-aa1c-ffd0b29975bd.png" 
              alt="Webiify Logo" 
              className="h-10 sm:h-12 animate-float"
              style={{ filter: isScrolled ? "drop-shadow(0 0 10px rgba(50,150,255,0.9))" : "none" }}
              draggable="false"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-webiify-teal relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-webiify-teal after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left",
                  location.pathname === link.path
                    ? "text-webiify-teal font-semibold"
                    : "text-gray-900 dark:text-white/90",
                  `animate-fade-in animate-delay-${index * 100}`
                )}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button
              variant="default"
              size="sm"
              className={cn(
                "ml-4 bg-gradient-to-r from-webiify-teal to-webiify-green text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in animate-delay-700",
                !isScrolled && "border border-gray-300"
              )}
            >
              Get Started
            </Button>
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md",
                isScrolled
                  ? "text-white"
                  : "text-gray-900 dark:text-white"
              )}
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

        {mobileMenuOpen && (
          <div className={cn(
            "md:hidden mt-3 py-4 px-4 rounded-lg animate-fade-in backdrop-blur-sm shadow-lg",
            "bg-white/90 dark:bg-gradient-to-r dark:from-[#1c2533] dark:via-[#1f3447] dark:to-[#3c5a87]"
          )}>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 px-4 py-2 rounded-md",
                    location.pathname === link.path
                      ? "bg-webiify-teal/20 text-webiify-teal font-semibold"
                      : "text-gray-900 dark:text-white/90 hover:bg-webiify-teal/10",
                    `animate-fade-in animate-delay-${index * 100}`
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                variant="default" 
                className="mt-2 bg-gradient-to-r from-webiify-teal to-webiify-green text-white border border-gray-300 animate-pulse"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
