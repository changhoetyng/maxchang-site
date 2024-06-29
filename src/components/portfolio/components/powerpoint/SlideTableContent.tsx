function SlideContent({ isSidePanel }: Readonly<{ isSidePanel: boolean }>) {
  const styles = {
    transformOrigin: "top left",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={styles}>
      <div
        className="flex items-center justify-center bg-white mb-6 relative"
        style={{
          height: !isSidePanel ? "20vw" : "100px",
          width: !isSidePanel ? "30vw" : "150px",
        }}
      >
        <img alt="placeholder" className="h-1/6" src={"/max.jpeg"} />
        <h1 className="bg-pink-500">Hello</h1>
      </div>
    </div>
  );
}

export default SlideContent;
