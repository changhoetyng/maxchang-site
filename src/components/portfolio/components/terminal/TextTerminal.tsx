import React, { useState, useEffect } from "react";

export default function TextTerminal({
  children,
}: Readonly<{
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
    <div className="flex flex-row items-center font-andale-mono">
      <h1 className="text-green-500">
        {children}
        {isBlinking ? <span className="bg-green-500 text-black">_</span> : null}
      </h1>
    </div>
  );
}
