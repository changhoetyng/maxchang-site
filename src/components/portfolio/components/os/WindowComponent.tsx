import Draggable from "react-draggable";
import WindowHeader from "./WindowHeader";

export default function Window({
  folder,
}: Readonly<{ folder: React.ReactNode[] }>) {
  return (
    <Draggable positionOffset={{ x: "50%", y: "50%" }}>
      <div className="draggable-window">
        <WindowHeader onClickClose={() => console.log("close")} />
        <div
          className="flex flex-row bg-gray-500 relative"
          style={{ height: "calc(100% - 28px)" }}
        >
          <div className="absolute top-0 left-0 h-fit max-h-full w-full inline-grid grid-cols-5 gap-2 overflow-y-auto p-2">
            {folder.map((i, idx) => i)}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
