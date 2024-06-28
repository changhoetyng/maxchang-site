import React from "react";
import SlideContent from "./SlideTableContent";
import PowerpointSidePanel from "./PowerpointSidePanel";
import { useWindowDimensions } from "./UseWindowDimensions";

export default function PowerpointView() {
  const dimensions = useWindowDimensions();
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
        <div className="p-6 bg-green-400 w-fit h-fit">
          <SlideContent />
        </div>
      </div>
    </div>
  );
}
