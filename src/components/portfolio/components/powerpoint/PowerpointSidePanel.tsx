export default function PowerpointSidePanel({
  data,
}: {
  data: React.ReactNode[];
}) {
  return (
    <div style={{ minWidth: "180px", width: "180px" }}>
      {data.map((child, index) => (
        <div key={"side-panel-" + index} className="w-fit p-3">
          {child}
        </div>
      ))}
    </div>
  );
}
