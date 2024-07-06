import clsx from "clsx";

export default function PowerpointSidePanel({
  data,
  selectedIndex,
}: {
  data: React.ReactNode[];
  selectedIndex: number;
}) {
  return (
    <div style={{ minWidth: "200px", maxWidth: "200px" }}>
      {data.map((child, index) => (
        <div
          key={"side-panel-" + index}
          className="w-fit p-3 flex flex-row text-xs"
        >
          {index + 1}.
          <div
            className={clsx(
              selectedIndex == index ? "border-2 border-orange-400" : ""
            )}
          >
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}
