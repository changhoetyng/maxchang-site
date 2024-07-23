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
import clsx from "clsx";

export default function MainTerminal({
  isTerminalActive,
  onFocused,
}: Readonly<{ isTerminalActive: boolean; onFocused: () => void }>) {
  const [terminalContents, setTerminalContents] = useState<
    (string | TerminalTableData)[]
  >([
    "Welcome to My Portfolio! - I’m a Software Engineer",
    "Click on this terminal and type 'help' for a list of commands..",
  ]);
  const [contentTypes, setContentTypes] = useState<ContentTypes[]>([
    ContentTypes.TEXT,
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
      if (e.key === "Enter") {
        e.preventDefault();
        onEnterTerminal();
      } else if (e.key === "Backspace") {
        e.preventDefault();
        if (typeof activeCommands === "string") {
          setActiveCommands((prevContent) =>
            (prevContent as string).slice(0, -1)
          );
        }
      } else if (e.key.length === 1) {
        e.preventDefault();
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
    <div
      className={clsx(
        "w-3/6 h-80 mr-14 max-w-5xl border",
        isTerminalActive ? "border-green-500" : "border-transparent"
      )}
      onClick={onFocused}
    >
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
