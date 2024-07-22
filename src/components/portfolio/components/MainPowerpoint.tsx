import clsx from "clsx";
import PowerpointView from "./powerpoint/PowerpointView";

export default function MainPowerpoint({
  isPowerpointActive,
  onFocused,
}: Readonly<{
  isPowerpointActive: boolean;
  onFocused: () => void;
}>) {
  return (
    <div
      className={clsx(
        "mr-14 border",
        isPowerpointActive ? "border-green-500" : "border-transparent"
      )}
      style={{ height: "33vw", width: "65vw" }}
      onClick={onFocused}
    >
      <PowerpointView isPowerpointActive={isPowerpointActive} />
    </div>
  );
}
