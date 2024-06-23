import {
  ContentTypes,
  isTerminalSelectData,
  isTerminalTableData,
  type TerminalMode,
  type TerminalSelectData,
  type TerminalTableData,
} from "@/types/terminal";

import SelectTerminal from "@/components/portfolio/components/terminal/SelectTerminal";
import TextTerminal from "@/components/portfolio/components/terminal/TextTerminal";
import TableTerminal from "../components/terminal/TableTerminal";
import type React from "react";

const CONTACT_OPTIONS: TerminalSelectData[] = [
  { label: "LinkedIn", value: "linkedin" },
  { label: "GitHub", value: "github" },
];

const PROJECTS_OPTIONS: TerminalTableData = {
  header: ["Name", "Description", "Link"],
  rows: [
    [
      "TuneShift",
      "A migration tool to transfer playlists between Spotify and Apple Music.",
      ["link", "Link", "https://github.com/changhoetyng/tuneshift"],
    ],
  ],
};

export const NAME_PREFIX = "maxchang ~ % ";

export function processTerminalCommand(command: string): TerminalMode {
  switch (command) {
    case "help":
      return "Available commands: help, projects, contact";
    case "projects":
      return PROJECTS_OPTIONS;
    case "contact":
      return CONTACT_OPTIONS;
    case "":
      return "maxchang ~ % ";
    default:
      return "zsh: command not found: -v";
  }
}

export function onClickContact(value: string) {
  switch (value) {
    case "github":
      window.open("https://github.com/changhoetyng", "_blank");
      break;
    case "linkedin":
      window.open("https://www.linkedin.com/in/hoe-tyng-chang", "_blank");
  }
}

export function renderContent(
  activeContentType: ContentTypes,
  onEnterSelection: (value: string) => void,
  data: string | TerminalSelectData[] | TerminalTableData,
  isActive: boolean,
  isPrefix: boolean,
  key: string
): React.ReactNode {
  if (activeContentType === ContentTypes.TEXT) {
    return (
      <TextTerminal key={key} isActive={isActive}>
        {isPrefix ? NAME_PREFIX : ""}
        {data as string}
      </TextTerminal>
    );
  } else if (activeContentType === ContentTypes.SELECT) {
    return (
      <SelectTerminal
        key={key}
        data={data as TerminalSelectData[]}
        isActive={isActive}
        onEnter={onEnterSelection}
      />
    );
  } else if (activeContentType === ContentTypes.TABLE) {
    return (
      <TableTerminal
        key={key}
        data={data as TerminalTableData}
        isActive={isActive}
      />
    );
  }
  return null;
}

export class TerminalInputProcessor {
  setTerminalContents: React.Dispatch<
    React.SetStateAction<(string | TerminalTableData)[]>
  >;

  setContentTypes: React.Dispatch<React.SetStateAction<ContentTypes[]>>;
  setActiveCommands: React.Dispatch<
    React.SetStateAction<string | TerminalSelectData[] | TerminalTableData>
  >;
  setActiveContentType: React.Dispatch<React.SetStateAction<ContentTypes>>;

  constructor(
    setTerminalContents: React.Dispatch<
      React.SetStateAction<(string | TerminalTableData)[]>
    >,
    setContentTypes: React.Dispatch<React.SetStateAction<ContentTypes[]>>,
    setActiveCommands: React.Dispatch<
      React.SetStateAction<string | TerminalSelectData[] | TerminalTableData>
    >,
    setActiveContentType: React.Dispatch<React.SetStateAction<ContentTypes>>
  ) {
    this.setTerminalContents = setTerminalContents;
    this.setContentTypes = setContentTypes;
    this.setActiveCommands = setActiveCommands;
    this.setActiveContentType = setActiveContentType;
  }

  addTerminalContent(content: string) {
    const output = processTerminalCommand(content);

    if (content.trim() === "") {
      this.ifTerminalInputIsEmpty(content);
    } else if (typeof output === "string") {
      this.ifTerminalOutputIsString(content, output);
    } else if (Array.isArray(output) && output.every(isTerminalSelectData)) {
      this.ifTerminalOutputIsSelect(content, output);
    } else if (isTerminalTableData(output)) {
      this.ifTerminalOutputIsTable(content, output);
    }
  }

  ifTerminalInputIsEmpty(content: string) {
    this.setContentTypes((prevTypes) => [...prevTypes, ContentTypes.TEXT]);
    this.setTerminalContents((prevContents) => [
      ...prevContents,
      NAME_PREFIX + content,
    ]);
  }

  ifTerminalOutputIsString(content: string, output: string) {
    this.setTerminalContents((prevContents) => [
      ...prevContents,
      NAME_PREFIX + content,
      output,
    ]);
    this.setActiveCommands("");
    this.setActiveContentType(ContentTypes.TEXT);
    this.setContentTypes((prevTypes) => [
      ...prevTypes,
      ContentTypes.TEXT,
      ContentTypes.TEXT,
    ]);
  }

  ifTerminalOutputIsSelect(content: string, output: TerminalSelectData[]) {
    this.setTerminalContents((prevContents) => [
      ...prevContents,
      NAME_PREFIX + content,
    ]);
    this.setContentTypes((prevTypes) => [...prevTypes, ContentTypes.TEXT]);
    this.setActiveCommands(output);
    this.setActiveContentType(ContentTypes.SELECT);
  }

  ifTerminalOutputIsTable(content: string, output: TerminalTableData) {
    this.setTerminalContents((prevContents) => [
      ...prevContents,
      NAME_PREFIX + content,
      output,
    ]);
    this.setActiveCommands("");
    this.setActiveContentType(ContentTypes.TEXT);
    this.setContentTypes((prevTypes) => [
      ...prevTypes,
      ContentTypes.TEXT,
      ContentTypes.TABLE,
    ]);
  }
}
