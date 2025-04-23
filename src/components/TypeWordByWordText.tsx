
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypeWordByWordTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TypeWordByWordText: React.FC<TypeWordByWordTextProps> = ({
  text,
  className,
  delay = 0,
}) => {
  const words = text.split(" ");
  const [currentWord, setCurrentWord] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentWord < words.length) {
      const timeout = setTimeout(() => setCurrentWord((w) => w + 1), 600);
      return () => clearTimeout(timeout);
    } else {
      // After all words are typed, stop the cursor after a pause
      const cursorTimeout = setTimeout(() => setShowCursor(false), 1200);
      return () => clearTimeout(cursorTimeout);
    }
  }, [currentWord, words.length]);

  // Blinking cursor
  useEffect(() => {
    if (showCursor) {
      const cursorBlink = setInterval(() => {
        setShowCursor((val) => !val);
      }, 500);
      return () => clearInterval(cursorBlink);
    }
  }, [showCursor]);

  return (
    <h1
      className={cn(
        "text-gradient",
        "whitespace-pre-line",
        "transition-all duration-500",
        className
      )}
      style={{ animationDelay: delay ? `${delay}ms` : undefined }}
    >
      {/* Show the typed words with a fade-in for each */}
      {words.map((word, i) => (
        <span
          key={word + i}
          className={cn(
            i < currentWord
              ? "opacity-100 animate-fade-in"
              : "opacity-0",
            "transition-opacity duration-300"
          )}
        >
          {i < currentWord ? word + " " : ""}
        </span>
      ))}
      {/* Show next word while it's being typed */}
      {currentWord < words.length && (
        <span className="opacity-100 animate-fade-in">
          {words[currentWord]}
          {showCursor && (
            <span className="inline-block w-1 ml-0.5 bg-webiify-purple h-7 align-bottom animate-pulse" />
          )}
        </span>
      )}
      {/* Show cursor at the end when done */}
      {currentWord === words.length && showCursor && (
        <span className="inline-block w-1 ml-0.5 bg-webiify-purple h-7 align-bottom animate-pulse" />
      )}
    </h1>
  );
};
