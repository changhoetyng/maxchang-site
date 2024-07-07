import SlideContent from "../SlideTableContent";

export default function SlideOne({ isSidePanel }: { isSidePanel: boolean }) {
  return (
    <SlideContent isSidePanel={isSidePanel}>
      <img src={"/page1.svg"} className="App-logo" alt="logo" />
    </SlideContent>
  );
}
