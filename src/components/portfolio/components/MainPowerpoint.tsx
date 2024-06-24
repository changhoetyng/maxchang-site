import PowerpointView from "./powerpoint/PowerpointView";

export default function MainPowerpoint({}) {
  return (
    <div
      className="mr-14 border-green-500 border"
      style={{ height: "500px", width: "1000px" }}
    >
      <PowerpointView />;
    </div>
  );
}
