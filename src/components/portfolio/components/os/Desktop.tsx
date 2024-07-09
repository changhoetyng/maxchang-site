import "./Desktop.css";
import "@/globals.css";

export default function Desktop({
  width,
  children,
}: Readonly<{
  width: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="desktop-container" style={{ width: width }}>
      <div className="desktop-background-wrapper">
        <img
          src={"/wallpaper.jpg"}
          alt="desktop"
          className="desktop-background no-select"
        ></img>
        <div className="desktop-child">{children}</div>
      </div>
    </div>
  );
}
