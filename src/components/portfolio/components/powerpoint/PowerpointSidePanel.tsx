import clsx from "clsx";

export default function PowerpointSidePanel({
  data,
  selectedIndex,
  onClickSlide,
}: Readonly<{
  data: React.ReactNode[];
  selectedIndex: number;
  onClickSlide: (index: number) => void;
}>) {
  function onClickSideBar(index: number) {
    onClickSlide(index);
  }
  return (
    <div style={{ minWidth: "200px", maxWidth: "200px" }}>
      {data.map((child, index) => (
        <div
          key={"side-panel-" + index}
          className="w-fit p-3 flex flex-row text-xs"
        >
          {index + 1}.
          <button
            onClick={() => onClickSideBar(index)}
            className={clsx(
              selectedIndex == index ? "border-2 border-orange-400" : "",
              "cursor-pointer"
            )}
          >
            {child}
          </button>
        </div>
      ))}
    </div>
  );
}
