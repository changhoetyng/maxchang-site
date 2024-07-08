import React from "react";
import WindowHeader from "@/components/portfolio/components/os/WindowHeader";

const BoxTerminal = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => {
  return (
    <div className="flex flex-col w-full h-full bg-black rounded-lg shadow-lg font-andale-mono whitespace-pre-wrap">
      <WindowHeader />
      <div ref={ref} className="flex-1 p-4 overflow-y-auto">
        {children}
      </div>
    </div>
  );
});

export default BoxTerminal;
