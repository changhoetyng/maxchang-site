import type {
  TerminalMode,
  TerminalSelectData,
  TerminalTableData,
} from "@/types/terminal";

const CONTACT_OPTIONS: TerminalSelectData[] = [
  { label: "Email", value: "email" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "GitHub", value: "github" },
];

const PROJECTS_OPTIONS: TerminalTableData[] = [
  {
    header: ["Name", "Description", "Link"],
    rows: [["NoggingBlog API", "API for a blog site", ""]],
  },
];

export function processTerminalCommand(command: string): TerminalMode {
  switch (command) {
    case "help":
      return "Available commands: help, about, contact, projects, resume";
    case "projects":
      return PROJECTS_OPTIONS;
    case "contact":
      return CONTACT_OPTIONS;
    default:
      return "zsh: command not found: -v";
  }
}
