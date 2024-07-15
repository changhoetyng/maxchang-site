import { useWindowDimensions } from "../powerpoint/UseWindowDimensions";

export default function RoundedCard({
  title,
  text,
}: Readonly<{
  title: string;
  text: string;
}>) {
  const dimensions = useWindowDimensions();
  return (
    <div
      className="rounded-3xl bg-gray-700 overflow-y-auto text-white p-7"
      style={{
        width: dimensions.width * 0.3,
        height: dimensions.width * 0.3,
        minWidth: 230,
        minHeight: 230,
        maxWidth: 400,
        maxHeight: 400,
      }}
    >
      <div className="flex flex-row items-center">
        <h1 className="font-extrabold text-2xl">{title}</h1>
      </div>
      <div className="mt-3">
        <h1 className="text-lg font-semibold">{text}</h1>
      </div>
    </div>
  );
}
