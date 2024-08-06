import clsx from "clsx";

export default function Row({
  name,
  className,
  iconSelections,
  onClick,
  onDoubleClick,
  index,
}: Readonly<{
  name: string;
  className?: string;
  iconSelections: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
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
        "outline-none flex flex-row items-center w-full h-6 pl-2 pr-2 rounded",
        {
          "bg-gray-600": index % 2 === 0,
          "bg-gray-700": index % 2 === 1,
        }
      )}
    >
      <img
        src={iconSelections}
        draggable="false"
        alt={iconSelections}
        style={{ width: "1rem" }}
        className={clsx("no-select", "border border-transparent")}
      />
      <p
        style={{ fontSize: "0.8rem" }}
        className={clsx("ml-2 text-white truncate hover:text-wrap")}
      >
        {name}
      </p>
    </button>
  );
}
