import Draggable from "react-draggable";
import "@/globals.css";
import clsx from "clsx";

export default function Icon({
  name,
  className,
  iconSelections,
  onClick,
  selected,
  onDoubleClick,
  position,
  disabled,
}: Readonly<{
  name: string;
  className?: string;
  iconSelections: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
  selected: boolean;
  position?: { x: number; y: number };
  disabled?: boolean;
}>) {
  function clickHandler() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <Draggable position={position} disabled={disabled}>
      <button
        onMouseDownCapture={() => clickHandler()}
        onDoubleClick={() => (onDoubleClick ? onDoubleClick() : "")}
        className={clsx(
          className,
          "outline-none flex flex-col items-center justify-center"
        )}
      >
        <img
          src={iconSelections}
          draggable="false"
          alt={iconSelections}
          className={clsx(
            "no-select",
            selected
              ? "border-2 border-gray-500"
              : "border-2 border-transparent"
          )}
        />
        <div className="text-container">
          <p
            className={clsx("mt-1 text-content text-xs", {
              "bg-blue-600": selected,
              "bg-transparent": !selected,
            })}
          >
            {name}
          </p>
        </div>
      </button>
    </Draggable>
  );
}
