import SlideContent from "./SlideTableContent";
import PowerpointSidePanel from "./PowerpointSidePanel";
import "./PowerpointView.css";
import SlideOne from "./slides/SlideOne";
import { useEffect, useRef, useState } from "react";
import SlideTwo from "./slides/SlideTwo";

export default function PowerpointView({
  isPowerpointActive,
}: {
  isPowerpointActive: boolean;
}) {
  const sidePanelRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const SLIDES_SIDE_PANEL = [
    <SlideOne key={"1"} isSidePanel={true} />,
    <SlideTwo key={"2"} isSidePanel={true} />,
    <SlideOne key={"3"} isSidePanel={true} />,
    <SlideOne key={"4"} isSidePanel={true} />,
    <SlideOne key={"5"} isSidePanel={true} />,
    <SlideOne key={"6"} isSidePanel={true} />,
    <SlideOne key={"7"} isSidePanel={true} />,
    <SlideOne key={"8"} isSidePanel={true} />,
  ];

  const SLIDES = [
    <SlideOne key={"1"} isSidePanel={false} />,
    <SlideTwo key={"2"} isSidePanel={false} />,
    <SlideOne key={"3"} isSidePanel={false} />,
    <SlideOne key={"4"} isSidePanel={false} />,
    <SlideOne key={"5"} isSidePanel={false} />,
    <SlideOne key={"6"} isSidePanel={false} />,
    <SlideOne key={"7"} isSidePanel={false} />,
    <SlideOne key={"8"} isSidePanel={false} />,
  ];

  useEffect(() => {
    function handleKeypress(e: KeyboardEvent) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCurrentSlide((prevSlide) =>
          prevSlide === SLIDES.length - 1 ? prevSlide : prevSlide + 1
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? prevSlide : prevSlide - 1
        );
      }
    }
    if (isPowerpointActive) {
      window.addEventListener("keydown", handleKeypress);
    } else {
      window.removeEventListener("keydown", handleKeypress);
    }

    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [isPowerpointActive]);

  useEffect(() => {
    if (sidePanelRef.current) {
      const sidePanel = sidePanelRef.current;
      const slideHeight =
        sidePanel?.firstElementChild?.firstElementChild?.clientHeight;
      if (!slideHeight) {
        return;
      }
      const scrollTop = slideHeight * currentSlide;
      sidePanel.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  }, [currentSlide]);

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
        <div
          className="bg-gray-200 overflow-y-auto scrollbar"
          style={{ minWidth: "200px", maxWidth: "200px" }}
          ref={sidePanelRef}
        >
          <PowerpointSidePanel
            data={SLIDES_SIDE_PANEL}
            selectedIndex={currentSlide}
          />
        </div>
        <div className=" bg-gray-200 w-full h-full flex items-center justify-center">
          <div>{SLIDES[currentSlide]}</div>
        </div>
      </div>
      <footer className="flex bg-gray-900 text-gray-200 text-xs rounded-b-lg pt-1 pb-1 pl-6">
        Slides {currentSlide + 1}/{SLIDES.length}
      </footer>
    </div>
  );
}
