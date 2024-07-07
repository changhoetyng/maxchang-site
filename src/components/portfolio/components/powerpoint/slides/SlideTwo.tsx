import SlideContent from "../SlideTableContent";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>Zoom In</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  );
}

export default function SlideTwo({ isSidePanel }: { isSidePanel: boolean }) {
  return (
    <SlideContent isSidePanel={isSidePanel}>
      <img src={"/2.svg"} className="App-logo" alt="logo" />
    </SlideContent>
  );
}
