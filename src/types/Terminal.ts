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

export function isTerminalTableData(obj: any): obj is TerminalTableData {
  return (
    obj &&
    Array.isArray(obj.header) &&
    obj.header.every((header: string) => typeof header === "string") &&
    Array.isArray(obj.rows) &&
    obj.rows.every((row: Array<[]>) => Array.isArray(row))
  );
}

export type TerminalMode = TerminalSelectData[] | TerminalTableData | string;

export enum ContentTypes {
  TEXT = "TEXT",
  SELECT = "SELECT",
  TABLE = "TABLE",
}
