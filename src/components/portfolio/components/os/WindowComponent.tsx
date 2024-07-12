import Draggable from "react-draggable";
import WindowHeader from "./WindowHeader";
import Icon from "./Icons/Icon";
import { TEXT_EDIT_ICON } from "./Icons/IconOptions";
import { useState } from "react";

export default function Window({ children }: { children: React.ReactNode[] }) {
  const [selectedFolder, setSelectedFolder] = useState(true);

  // const a = [1];
  const a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Draggable positionOffset={{ x: "50%", y: "50%" }}>
      <div className="draggable-window">
        <WindowHeader />
        <div
          className="flex flex-row bg-gray-500 relative"
          style={{ height: "calc(100% - 28px)" }}
        >
          <div className="absolute top-0 left-0 h-fit max-h-full w-full inline-grid grid-cols-5 gap-2 overflow-y-auto p-2">
            {children.map((i, idx) => i)}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
