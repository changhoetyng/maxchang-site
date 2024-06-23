import { useEffect, useState, useRef } from "react";
import BoxTerminal from "./terminal/BoxTerminal";
import {
  TerminalInputProcessor,
  onClickContact,
  renderContent,
} from "@/components/portfolio/utils/TerminalProcessor";
import {
  ContentTypes,
  type TerminalSelectData,
  type TerminalTableData,
} from "@/types/terminal";

export default function MainTerminal({
  isTerminalActive,
}: Readonly<{ isTerminalActive: boolean }>) {
  const [terminalContents, setTerminalContents] = useState<
    (string | TerminalTableData)[]
  >(["Welcome to My Portfolio! - I’m a Software Engineer"]);
  const [contentTypes, setContentTypes] = useState<ContentTypes[]>([
    ContentTypes.TEXT,
  ]);

  // Active Content
  const [activeCommands, setActiveCommands] = useState<
    string | TerminalSelectData[] | TerminalTableData
  >("");
  const [activeContentType, setActiveContentType] = useState<ContentTypes>(
    ContentTypes.TEXT
  );

  const terminalInputProcessor = new TerminalInputProcessor(
    setTerminalContents,
    setContentTypes,
    setActiveCommands,
    setActiveContentType
  );

  const terminalRef = useRef<HTMLDivElement>(null);

  function onEnterSelection(value: string) {
    if (activeContentType === ContentTypes.SELECT) {
      onClickContact(value);
      setActiveCommands("");
      setActiveContentType(ContentTypes.TEXT);
    }
  }

  function onEnterTerminal() {
    if (activeContentType === ContentTypes.TEXT) {
      terminalInputProcessor.addTerminalContent(activeCommands as string);
    }
  }

  useEffect(() => {
    function handleKeypress(e: KeyboardEvent) {
      e.preventDefault();
      if (e.key === "Enter") {
        onEnterTerminal();
      } else if (e.key === "Backspace") {
        if (typeof activeCommands === "string") {
          setActiveCommands((prevContent) =>
            (prevContent as string).slice(0, -1)
          );
        }
      } else if (e.key.length === 1) {
        if (typeof activeCommands === "string") {
          setActiveCommands((prevContent) => (prevContent as string) + e.key);
        }
      }
    }

    if (isTerminalActive) {
      window.addEventListener("keydown", handleKeypress);
    } else {
      window.removeEventListener("keydown", handleKeypress);
    }

    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [isTerminalActive, activeCommands]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalContents]);

  return (
    <div className="w-3/6 h-80 mr-14 max-w-5xl border-green-500 border">
      <BoxTerminal ref={terminalRef}>
        {contentTypes.map((content, idx) =>
          renderContent(
            content,
            onEnterSelection,
            terminalContents[idx],
            false,
            false,
            content + idx
          )
        )}
        {renderContent(
          activeContentType,
          onEnterSelection,
          activeCommands,
          true,
          true,
          "active"
        )}
      </BoxTerminal>
    </div>
  );
}
