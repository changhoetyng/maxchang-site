import BoxTerminal from "./terminal/BoxTerminal";
import SelectTerminal from "./terminal/SelectTerminal";
import TableTerminal from "./terminal/TableTerminal";
import TextTerminal from "./terminal/TextTerminal";
import { useEffect, useState } from "react";

enum ContentTypes {
  TEXT = "TEXT",
  SELECT = "SELECT",
}

export default function MainTerminal({
  isTerminalActive,
}: Readonly<{ isTerminalActive: boolean }>) {
  // Terminal contents is the content that the user has typed
  const [terminalContents, setTerminalContents] = useState([
    "Welcome to My Portfolio! - I’m a Software Engineer",
  ]);
  const [contentTypes, setContentTypes] = useState<ContentTypes[]>([
    ContentTypes.TEXT,
  ]);

  // Active content is the content that the user is currently typing
  const [activeContent, setActiveContent] = useState("");
  const [activeContentType, setActiveContentType] = useState<ContentTypes>(
    ContentTypes.SELECT
  );

  // active selection for the select terminal

  const items = [
    {
      label: "First",
      value: "first",
    },
    {
      label: "Second",
      value: "second",
    },
    {
      label: "Third",
      value: "third",
    },
  ];

  const data = {
    header: ["Name", "Age", "Occupation"],
    rows: [
      [
        "Alice",
        24,
        ["link", "Engineer", "https://github.com/changhoetyng/noggingblog-api"],
      ],
    ],
  };

  useEffect(() => {
    function handleKeypress(e: KeyboardEvent) {
      e.preventDefault();
      if (e.key === "Enter") {
        addTerminalContent(activeContent);
        setActiveContent("");
      } else if (e.key === "Backspace") {
        setActiveContent((prevContent) => prevContent.slice(0, -1));
      } else if (e.key.length === 1) {
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
        <TextTerminal isActive={true} onEnter={addTerminalContent}>
          maxchang ~ % {activeContent}
        </TextTerminal>
        <SelectTerminal data={items} isActive={true} />
        <TableTerminal data={data} isActive={true} />
      </BoxTerminal>
    </div>
  );
}
