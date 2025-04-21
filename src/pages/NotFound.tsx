
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      <div className="text-center px-4 sm:px-6 max-w-lg animate-fade-in">
        <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
        <p className="text-2xl text-foreground mb-8">Oops! Page not found</p>
        <p className="text-foreground/70 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Button variant="default" size="lg" className="bg-gradient-to-r from-webiify-blue to-webiify-purple text-white" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
