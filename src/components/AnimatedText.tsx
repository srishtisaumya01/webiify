
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  gradient?: "default" | "green" | "none";
  animation?: "typing" | "fade" | "none";
  element?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
}

export function AnimatedText({
  text,
  className,
  gradient = "default",
  animation = "fade",
  element: Element = "h2",
  delay = 0,
}: AnimatedTextProps) {
  
  const gradientClass = 
    gradient === "default" ? "text-gradient" : 
    gradient === "green" ? "text-gradient-green" : "";
  
  const animationClass = 
    animation === "fade" ? "animate-fade-in" : 
    animation === "typing" ? "animate-slide-in-right" : "";
  
  const delayClass = delay > 0 ? `animate-delay-${delay}` : "";
  
  return (
    <Element 
      className={cn(
        gradientClass,
        animationClass, 
        delayClass,
        className
      )}
    >
      {text}
    </Element>
  );
}
