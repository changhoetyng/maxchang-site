export default function PowerpointSidePanel({
  data,
}: {
  data: React.ReactNode[];
}) {
  return data.map((child, index) => (
    <div key={"side-panel-" + index} className="p-3">
      {child}
    </div>
  ));
}
