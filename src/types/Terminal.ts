export interface TerminalSelectData {
  label: string;
  value: string;
}

export interface TerminalTableData {
  header: string[];
  rows: any[][];
}

export function isTerminalSelectData(obj: any): obj is TerminalSelectData {
  return obj && typeof obj.label === "string" && typeof obj.value === "string";
}

export type TerminalMode = TerminalSelectData[] | TerminalTableData[] | string;
