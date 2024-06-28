import { useWindowDimensions } from "./UseWindowDimensions";
import Max from "public/max.jpeg";

function SlideContent() {
  const { width } = useWindowDimensions();
  const scale = width / 1920; // Assume 1920 is the base width for scaling

  const styles = {
    transformOrigin: "top left",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={styles}>
      <div
        className="flex items-center justify-center bg-white mb-6 relative"
        style={{ height: "20vw", width: "30vw" }}
      >
        <img alt="placeholder" className="h-1/6" src={"public/max.jpeg"} />
        <h1 className="bg-pink-500">Hello</h1>
      </div>
    </div>
  );
}

export default SlideContent;
