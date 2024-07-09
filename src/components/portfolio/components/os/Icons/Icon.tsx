import Draggable from "react-draggable";
import "@/globals.css";
import clsx from "clsx";
import { useState } from "react";

export default function Icon({
  icon,
  className,
  iconSelections,
}: Readonly<{
  icon: string;
  className?: string;
  iconSelections: string;
}>) {
  const [selected, setSelected] = useState(false);

  function clickHandler() {
    setSelected(true);
  }

  return (
    <Draggable>
      <button
        onClick={() => clickHandler()}
        className={clsx(
          className,
          "outline-none flex flex-col items-center justify-center"
        )}
      >
        <img
          src={iconSelections}
          draggable="false"
          alt={icon}
          className={clsx(
            "no-select",
            selected ? "border-2 border-gray-500" : ""
          )}
        />
        <div className="text-container">
          <p
            className={clsx("mt-1 text-content text-xs", {
              "bg-blue-600": selected,
            })}
          >
            google-cloud-sdk 2
          </p>
        </div>
      </button>
    </Draggable>
  );
}
