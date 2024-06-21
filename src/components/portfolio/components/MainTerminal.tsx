import BoxTerminal from "./terminal/BoxTerminal";
import TextTerminal from "./terminal/TextTerminal";
import { useEffect, useState } from "react";

export default function MainTerminal({
  isTerminalActive,
}: Readonly<{ isTerminalActive: boolean }>) {
  const [terminalContents, setTerminalContents] = useState([
    "Welcome to My Portfolio! - I’m a Software Engineer",
  ]);

  const [activeContent, setActiveContent] = useState("");

  useEffect(() => {
    function handleKeypress(e: KeyboardEvent) {
      if (e.key === "Enter") {
        addTerminalContent(activeContent);
        setActiveContent("");
      } else if (e.key === "Backspace") {
        e.preventDefault(); // Prevent default action to avoid browser navigation
        setActiveContent((prevContent) => prevContent.slice(0, -1));
      } else if (e.key.length === 1) {
        e.preventDefault();
        setActiveContent((prevContent) => prevContent + e.key);
      }
    }

    if (isTerminalActive) {
      window.addEventListener("keydown", handleKeypress);
    } else {
      window.removeEventListener("keydown", handleKeypress);
    }

    // Cleanup the event listener on component unmount or when isTerminalActive changes
    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [isTerminalActive, activeContent]);
  function addTerminalContent(content: string) {
    setTerminalContents((prevContents) => [...prevContents, content]);
  }

  return (
    <div className="w-3/6 h-48 mr-14 max-w-5xl border-green-500 border">
      <BoxTerminal>
        {terminalContents.map((content, idx) => (
          <TextTerminal isActive={false} key={content + idx}>
            {content}
          </TextTerminal>
        ))}
        <TextTerminal isActive={true}>
          maxchang ~ % {activeContent}
        </TextTerminal>
      </BoxTerminal>
    </div>
  );
}
