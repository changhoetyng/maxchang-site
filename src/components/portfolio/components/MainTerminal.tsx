import { useEffect, useState, useRef } from "react";
import BoxTerminal from "./terminal/BoxTerminal";
import SelectTerminal from "./terminal/SelectTerminal";
import TextTerminal from "./terminal/TextTerminal";
import {
  onClickContact,
  processTerminalCommand,
} from "@/components/portfolio/utils/TerminalProcessor";
import {
  isTerminalSelectData,
  type TerminalSelectData,
} from "@/types/terminal";

enum ContentTypes {
  TEXT = "TEXT",
  SELECT = "SELECT",
}

const NAME_PREFIX = "maxchang ~ % ";

export default function MainTerminal({
  isTerminalActive,
}: Readonly<{ isTerminalActive: boolean }>) {
  const [terminalContents, setTerminalContents] = useState([
    "Welcome to My Portfolio! - I’m a Software Engineer",
  ]);

  const [activeCommands, setActiveCommands] = useState<string>("");
  const [activeSelectData, setActiveSelectData] = useState<
    TerminalSelectData[]
  >([]);
  const [activeContentType, setActiveContentType] = useState<ContentTypes>(
    ContentTypes.TEXT
  );

  const terminalRef = useRef<HTMLDivElement>(null);

  function onEnterSelection(value: string) {
    if (activeContentType === ContentTypes.SELECT) {
      onClickContact(value);
      setActiveContentType(ContentTypes.TEXT);
    }
  }

  function onEnterTerminal() {
    if (activeContentType === ContentTypes.TEXT) {
      addTerminalContent(activeCommands);
      setActiveCommands("");
    }
  }

  useEffect(() => {
    function handleKeypress(e: KeyboardEvent) {
      e.preventDefault();
      if (e.key === "Enter") {
        onEnterTerminal();
      } else if (e.key === "Backspace") {
        setActiveCommands((prevContent) => prevContent.slice(0, -1));
      } else if (e.key.length === 1) {
        setActiveCommands((prevContent) => prevContent + e.key);
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

  function addTerminalContent(content: string) {
    const output = processTerminalCommand(content);
    if (content.trim() === "") {
      setTerminalContents((prevContents) => [
        ...prevContents,
        NAME_PREFIX + content,
      ]);
    } else if (typeof output === "string") {
      setTerminalContents((prevContents) => [
        ...prevContents,
        NAME_PREFIX + content,
        output,
      ]);
      setActiveCommands("");
    } else if (Array.isArray(output) && output.every(isTerminalSelectData)) {
      setTerminalContents((prevContents) => [
        ...prevContents,
        NAME_PREFIX + content,
      ]);
      setActiveContentType(ContentTypes.SELECT);
      setActiveSelectData(output);
    }
  }

  function renderContent() {
    if (activeContentType === ContentTypes.TEXT) {
      return (
        <TextTerminal isActive={true}>
          {NAME_PREFIX}
          {activeCommands}
        </TextTerminal>
      );
    } else if (activeContentType === ContentTypes.SELECT) {
      return (
        <SelectTerminal
          data={activeSelectData}
          isActive={true}
          onEnter={onEnterSelection}
        />
      );
    }
    return null;
  }

  return (
    <div className="w-3/6 h-48 mr-14 max-w-5xl border-green-500 border">
      <BoxTerminal ref={terminalRef}>
        {terminalContents.map((content, idx) => (
          <TextTerminal isActive={false} key={content + idx}>
            {content}
          </TextTerminal>
        ))}
        {renderContent()}
      </BoxTerminal>
    </div>
  );
}
