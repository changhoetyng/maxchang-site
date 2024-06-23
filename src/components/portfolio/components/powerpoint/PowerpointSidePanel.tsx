export default function PowerpointSidePanel({
  data,
}: {
  data: React.ReactNode[];
}) {
  const originalHeight = 800;
  const originalWidth = 800;
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
        <div
          className="flex items-center justify-center bg-white w-full mb-6"
          style={{ height: "800px", width: "800px" }}
        >
          {child}
        </div>
      </div>
    </div>
  ));
}
