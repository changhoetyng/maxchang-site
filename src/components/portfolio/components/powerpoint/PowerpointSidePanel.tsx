export default function PowerpointSidePanel({
  data,
  dimensions,
}: {
  data: React.ReactNode[];
  dimensions: { width: number; height: number };
}) {
  const originalWidth = dimensions.width * 0.2;
  const originalHeight = dimensions.width * 0.2;
  const scale = 0.3;
  return data.map((child, index) => (
    <div
      key={index}
      className="mb-3"
      style={{
        height: `${originalHeight * scale}px`,
        width: `${originalWidth * scale}px`,
        maxWidth: "200px",
      }}
    >
      <div
        style={{ transform: "scale(0.2, 0.2)", transformOrigin: "top left" }}
      >
        {child}
      </div>
    </div>
  ));
}
