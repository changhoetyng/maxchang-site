import SlideContent from "./SlideTableContent";
import "./Slide.css";
export default function Slide({
  isSidePanel,
  Page,
}: Readonly<{
  isSidePanel: boolean;
  Page: any;
}>) {
  return (
    <SlideContent isSidePanel={isSidePanel}>
      <Page className="w-full h-full p-3" />
    </SlideContent>
  );
}
