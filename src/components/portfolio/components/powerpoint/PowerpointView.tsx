import SlideContent from "./SlideTableContent";
import PowerpointSidePanel from "./PowerpointSidePanel";

export default function PowerpointView() {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg font-andale-mono whitespace-pre-wrap w-full h-full">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 rounded-t-lg">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mx-1"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-row" style={{ height: "calc(100% - 28px)" }}>
        <div className="bg-pink-300">
          <PowerpointSidePanel
            data={[
              <SlideContent isSidePanel={true} key={"sad"} />,
              <SlideContent isSidePanel={true} key={"saawdd"} />,
            ]}
          />
        </div>
        <div className=" bg-green-400 w-full h-full flex items-center justify-center">
          <div>
            <SlideContent isSidePanel={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
