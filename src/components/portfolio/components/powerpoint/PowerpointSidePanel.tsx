export default function PowerpointSidePanel({
  data,
}: {
  data: React.ReactNode[];
}) {
  const originalHeight = 340;
  const originalWidth = 600;
  const scale = 0.3;
  return data.map((child, index) => (
    <div
      key={index}
      className="mb-3"
      style={{
        height: `${originalHeight * scale}px`,
        width: `${originalWidth * scale}px`,
      }}
    >
      <div
        style={{ transform: "scale(0.3, 0.3)", transformOrigin: "top left" }}
      >
        {child}
      </div>
    </div>
  ));
}
