import type { TerminalSelectData } from "@/types/terminal";
import clsx from "clsx";
import { useEffect, useState } from "react";

enum ContentTypes {
  TEXT = "TEXT",
  SELECT = "SELECT",
}

export default function SelectTerminal({
  data,
  isActive,
  onEnter,
}: Readonly<{
  data: TerminalSelectData[];
  isActive: boolean;
  onEnter: (value: string) => void;
}>) {
  const [activeSelection, setActiveSelection] = useState(0);

  // Handle Actions
  function arrowUp() {
    // Select the next item in the select terminal
    setActiveSelection((prevSelection) =>
      prevSelection === 0 ? prevSelection : prevSelection - 1
    );
  }

  function arrowDown() {
    // Select the previous item in the select terminal
    setActiveSelection((prevSelection) =>
      prevSelection === data.length - 1 ? prevSelection : prevSelection + 1
    );
  }

  useEffect(() => {
    function handleKeypress(e: KeyboardEvent) {
      e.preventDefault();
      if (e.key === "Enter") {
        console.log(data[activeSelection].value);
        onEnter(data[activeSelection].value);
      } else if (e.key === "ArrowUp") {
        console.log(e.key);
        arrowUp();
      } else if (e.key === "ArrowDown") {
        console.log(e.key);
        arrowDown();
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
  }, [isActive, activeSelection]);

  return (
    <div className="flex flex-col">
      {data.map((item, idx) => (
        <span
          key={item.value}
          className={clsx(
            idx == activeSelection ? "text-pink-500" : "text-green-500"
          )}
        >
          {idx == activeSelection ? "> " : "  "}
          {item.label}
        </span>
      ))}
    </div>
  );
}
