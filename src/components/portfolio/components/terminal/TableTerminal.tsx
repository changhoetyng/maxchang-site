import type { TerminalTableData } from "@/types/terminal";

export default function TableTerminal({
  data,
  isActive,
}: Readonly<{ data: TerminalTableData; isActive: boolean }>) {
  function renderCellType(cell: any) {
    if (cell instanceof Array) {
      if (cell[0] === "link") {
        return (
          <a
            target="_blank"
            href={cell[2]}
            className="text-green-500 underline"
          >
            {cell[1]}
          </a>
        );
      }
    } else {
      return cell;
    }
  }

  return (
    <div className="flex flex-col text-green-500 text-center ml-5 mr-3">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {data.header.map((header, index) => (
              <th
                key={"data.header" + index}
                className="border border-green-500 text-pink-500"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={"data.table" + index}>
              {row.map((cell, index) => (
                <td
                  key={"data.table.content" + index}
                  className="border border-green-500"
                >
                  {renderCellType(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
