import SlideContent from "./SlideTableContent";
export default function Slide({
  isSidePanel,
  page,
}: Readonly<{
  isSidePanel: boolean;
  page: any;
}>) {
  return (
    <SlideContent isSidePanel={isSidePanel}>
      <img src={page.src} className={page + "-slide"} alt={page + "-alt"} />
    </SlideContent>
  );
}
