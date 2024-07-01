import type React from "react";

function SlideContent({
  isSidePanel,
  children,
}: Readonly<{ isSidePanel: boolean; children: React.ReactNode }>) {
  const styles = {
    transformOrigin: "top left",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={styles}>
      <div
        className="flex flex-col items-center justify-center bg-white relative"
        style={{
          height: !isSidePanel ? "25vw" : "100px",
          width: !isSidePanel ? "40vw" : "150px",
          fontSize: !isSidePanel ? "2vw" : "0.5em",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default SlideContent;
