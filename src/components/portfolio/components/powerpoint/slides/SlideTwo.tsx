import SlideContent from "../SlideTableContent";

export default function SlideTwo({ isSidePanel }: { isSidePanel: boolean }) {
  return (
    <SlideContent isSidePanel={isSidePanel}>
      <p className="bg-pink-500">Slide Two</p>
      <img alt="placeholder" className="h-1/6" src={"/max.jpeg"} />
    </SlideContent>
  );
}
