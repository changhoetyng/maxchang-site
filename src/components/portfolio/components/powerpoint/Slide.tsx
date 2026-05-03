import SlideContent from "./SlideTableContent";
import "./Slide.css";
export default function Slide({
  isSidePanel,
  src,
}: Readonly<{
  isSidePanel: boolean;
  src: string;
}>) {
  return (
    <SlideContent isSidePanel={isSidePanel}>
      <img src={src} className="w-full h-full p-3" />
    </SlideContent>
  );
}
