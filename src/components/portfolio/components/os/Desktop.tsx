import React, { useEffect } from "react";
import "./Desktop.css";
import "@/globals.css";

export default function Desktop({
  width,
  element,
  onClick,
}: Readonly<{
  width: string;
  element: React.ReactNode[];
  onClick?: () => void;
}>) {
  useEffect(() => {
    if (!element) return;
    for (const child of element as any) {
      console.log(child?.type?.name);
    }
  }, []);

  return (
    <div
      className="desktop-container"
      style={{ width: width }}
      onMouseDownCapture={onClick}
    >
      <div className="desktop-background-wrapper">
        <img
          src={"/wallpaper.jpg"}
          alt="desktop"
          className="desktop-background no-select"
        ></img>
        <div className="desktop-child">
          {element.map((el, index) => (
            <div key={index + "desktop-el"}>{el}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
