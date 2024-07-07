import SlideContent from "./SlideTableContent";

export default function Slide({
  isSidePanel,
  page,
}: {
  isSidePanel: boolean;
  page: string;
}) {
  return (
    <SlideContent isSidePanel={isSidePanel}>
      <img
        src={`/pages/${page}.svg`}
        className={page + "-slide"}
        alt={page + "-alt"}
      />
    </SlideContent>
  );
}
