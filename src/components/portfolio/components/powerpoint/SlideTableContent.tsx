function SlideContent({ isSidePanel }: Readonly<{ isSidePanel: boolean }>) {
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
        <p className="bg-pink-500">Hello World!</p>
        <img alt="placeholder" className="h-1/6" src={"/max.jpeg"} />
      </div>
    </div>
  );
}

export default SlideContent;
