import PowerpointSidePanel from "./PowerpointSidePanel";

function test() {
  return (
    <div
      className="flex items-center justify-center bg-white w-full mb-6 relative"
      style={{ height: "340px", width: "600px" }}
    >
      <div className="bg-pink-500">Hello</div>
    </div>
  );
}

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
        <div className="h-full bg-indigo-800 p-6">
          <PowerpointSidePanel data={[test(), test()]} />
        </div>
        <div className="w-full h-full bg-green-400">{test()}</div>
      </div>
    </div>
  );
}
