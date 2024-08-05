import PowerpointSidePanel from "./PowerpointSidePanel";
import "./PowerpointView.css";
import { useEffect, useRef, useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
  type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import Slide from "./Slide";
import WindowHeader from "@/components/portfolio/components/os/WindowHeader";
import page1 from "/public/pages/page1.svg?react";
import page2 from "/public/pages/page2.svg?react";
import page3 from "/public/pages/page3.svg?react";

export default function PowerpointView({
  isPowerpointActive,
}: Readonly<{
  isPowerpointActive: boolean;
}>) {
  const sidePanelRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const zoomComponent = useRef<ReactZoomPanPinchRef | null>(null);

  const SLIDES_SIDE_PANEL = [
    <Slide key={"1"} isSidePanel={true} Page={page1} />,
    <Slide key={"2"} isSidePanel={true} Page={page2} />,
    <Slide key={"3"} isSidePanel={true} Page={page3} />,
  ];

  const SLIDES = [
    <Slide key={"1"} isSidePanel={false} Page={page1} />,
    <Slide key={"2"} isSidePanel={false} Page={page2} />,
    <Slide key={"3"} isSidePanel={false} Page={page3} />,
  ];

  async function resetSlide() {
    zoomComponent.current?.centerView(1, 0, undefined);
  }

  async function zoomIn() {
    zoomComponent.current?.zoomIn();
  }

  async function zoomOut() {
    zoomComponent.current?.zoomOut();
  }

  useEffect(() => {
    function handleKeypress(e: KeyboardEvent) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCurrentSlide((prevSlide) =>
          prevSlide === SLIDES.length - 1 ? prevSlide : prevSlide + 1
        );
        resetSlide();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? prevSlide : prevSlide - 1
        );
        resetSlide();
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

  function onClickSlide(index: number) {
    setCurrentSlide(index);
    resetSlide();
  }

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
      <WindowHeader />
      <div className="flex flex-row" style={{ height: "calc(100% - 28px)" }}>
        <div
          className="bg-gray-300 overflow-y-auto scrollbar"
          style={{ minWidth: "200px", maxWidth: "200px" }}
          ref={sidePanelRef}
        >
          <PowerpointSidePanel
            data={SLIDES_SIDE_PANEL}
            selectedIndex={currentSlide}
            onClickSlide={onClickSlide}
          />
        </div>
        <TransformWrapper
          centerOnInit={true}
          limitToBounds={false}
          ref={zoomComponent}
        >
          <TransformComponent
            wrapperStyle={{
              width: "100%",
              height: "100%",
              backgroundColor: "#e5e7eb",
            }}
          >
            <div className="cursor-move h-full w-full">
              <div>{SLIDES[currentSlide]}</div>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
      <footer className="flex bg-gray-900 text-gray-200 text-xs rounded-b-lg pt-1 pb-1 pl-6 relative">
        Slides {currentSlide + 1}/{SLIDES.length}
        <div className="absolute right-3 flex text-center">
          <button className="cursor-pointer h-full mx-4" onClick={zoomIn}>
            Zoom In
          </button>
          <button className="cursor-pointer h-full mx-4" onClick={zoomOut}>
            Zoom Out
          </button>
          <button className="cursor-pointer h-full mx-3" onClick={resetSlide}>
            Reset Zoom
          </button>
        </div>
      </footer>
    </div>
  );
}
