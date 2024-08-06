import clsx from "clsx";

export default function Row({
  name,
  className,
  iconSelections,
  onClick,
  selected,
  onDoubleClick,
  index,
}: Readonly<{
  name: string;
  className?: string;
  iconSelections: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
  selected: boolean;
  index: number;
}>) {
  function clickHandler() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      onMouseDownCapture={() => clickHandler()}
      onDoubleClick={() => (onDoubleClick ? onDoubleClick() : "")}
      className={clsx(
        className,
        "outline-none flex flex-row items-center w-full",
        {
          "bg-gray-500": index % 2 === 0,
          "bg-gray-600": index % 2 === 1,
        }
      )}
    >
      <img
        src={iconSelections}
        draggable="false"
        alt={iconSelections}
        style={{ width: "1rem" }}
        className={clsx(
          "no-select",
          selected
            ? "border bg-gray-600 border-gray-400"
            : "border border-transparent"
        )}
      />
      <p
        style={{ fontSize: "0.8rem" }}
        className={clsx("ml-2 text-white truncate hover:text-wrap", {
          "bg-blue-600": selected,
          "bg-transparent": !selected,
        })}
      >
        {name}
      </p>
    </button>
  );
}
