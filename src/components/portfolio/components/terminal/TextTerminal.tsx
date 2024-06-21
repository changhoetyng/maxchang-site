import React, { useState, useEffect } from "react";

export default function TextTerminal({
  isActive,
  children,
}: Readonly<{
  isActive: boolean;
  children: React.ReactNode;
}>) {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prevIsBlinking) => !prevIsBlinking);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-row items-center font-andale-mono whitespace-pre-wrap">
      <h1 className="text-green-500">
        {children}
        {isBlinking && isActive ? (
          <span className="bg-green-500 text-black">_</span>
        ) : null}
      </h1>
    </div>
  );
}
