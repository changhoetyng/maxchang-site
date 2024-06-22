class TerminalProcessor {
  public static processCommand(command: string): string {
    switch (command) {
      case "help":
        return "Available commands: help, about, contact, projects, resume";
      case "about":
        return "I am a software engineer with a passion for web development.";
      case "contact":
        return "You can contact me at";
      default:
        return "command not found: -v";
    }
  }
}
