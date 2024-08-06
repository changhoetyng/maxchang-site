import Draggable from "react-draggable";
import WindowHeader from "./WindowHeader";

export default function Window({
  folder,
  onClickClose,
}: Readonly<{ folder: React.ReactNode[]; onClickClose?: () => void }>) {
  return (
    <Draggable positionOffset={{ x: "22.5%", y: "22.5%" }}>
      <div className="draggable-window">
        <WindowHeader
          onClickClose={() => (onClickClose ? onClickClose() : null)}
        />
        <div
          className="flex flex-row bg-gray-500 relative"
          style={{ height: "calc(100% - 28px)" }}
        >
          <div className="absolute top-0 left-0 h-fit max-h-full w-full overflow-y-auto p-2">
            {folder.map((i, idx) => i)}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
