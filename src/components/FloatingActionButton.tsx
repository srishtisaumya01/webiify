
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll event to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle the button visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Floating chat button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Scroll to top button - only shown when scrolled down */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            variant="default"
            size="icon"
            className="rounded-full w-12 h-12 bg-webiify-blue text-white shadow-lg hover:bg-webiify-purple animate-bounce"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}
        
        {/* Chat button */}
        <Button
          onClick={toggleVisibility}
          variant="default"
          size="icon"
          className="rounded-full w-12 h-12 bg-webiify-green text-white shadow-lg hover:bg-webiify-teal animate-float"
          aria-label="Chat with us"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
        
        {/* Popover chat options */}
        {isVisible && (
          <div className="absolute bottom-16 right-0 mb-2 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 w-64">
              <h4 className="font-medium mb-2 text-webiify-blue">Chat with us</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                How can we help you today?
              </p>
              <div className="space-y-2">
                <Button 
                  variant="default" 
                  className="w-full justify-start bg-webiify-blue hover:bg-webiify-purple"
                  asChild
                >
                  <Link to="/contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start Live Chat
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-webiify-blue/10"
                  asChild
                >
                  <a href="mailto:contact@webiify.com">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingActionButton;
