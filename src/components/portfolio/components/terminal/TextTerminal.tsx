import React, { useState, useEffect } from "react";

export default function TextTerminal({
  isActive,
  children,
  onEnter,
}: Readonly<{
  isActive: boolean;
  children: React.ReactNode;
  onEnter?: (content: string) => void;
}>) {
  const [isBlinking, setIsBlinking] = useState(true);
  const [activeContent, setActiveContent] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prevIsBlinking) => !prevIsBlinking);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    function handleKeypress(e: KeyboardEvent) {
      e.preventDefault();
      if (e.key === "Enter") {
        onEnter ? activeContent : null;
      } else if (e.key === "Backspace") {
        setActiveContent((prevContent) => prevContent.slice(0, -1));
      } else if (e.key.length === 1) {
        setActiveContent((prevContent) => prevContent + e.key);
      }
    }

    if (isActive) {
      window.addEventListener("keydown", handleKeypress);
    } else {
      window.removeEventListener("keydown", handleKeypress);
    }

    // Cleanup the event listener on component unmount or when isTerminalActive changes
    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [isActive]);

  return (
    <div className="flex flex-row items-center">
      <h1 className="text-green-500">
        {children}
        {isBlinking && isActive ? (
          <span className="bg-green-500 text-black">_</span>
        ) : null}
      </h1>
    </div>
  );
}
