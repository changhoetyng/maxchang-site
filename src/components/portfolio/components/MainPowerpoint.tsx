import PowerpointView from "./powerpoint/PowerpointView";

export default function MainPowerpoint({
  isPowerpointActive,
}: {
  isPowerpointActive: boolean;
}) {
  return (
    <div
      className="mr-14 border-green-500 border"
      style={{ height: "33vw", width: "65vw" }}
    >
      <PowerpointView isPowerpointActive={isPowerpointActive} />
    </div>
  );
}
