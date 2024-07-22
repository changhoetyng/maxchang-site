import PortfolioBody from "./components/PortfolioBody";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Introduction from "./components/Introduction";
import MainTerminal from "./components/MainTerminal";
import MainPowerpoint from "./components/MainPowerpoint";
import ProjectList from "./components/ProjectList";
import { Expertise } from "./components/Expertise";
import Explore from "./components/Explore";

export default function Portfolio() {
  const HEADER_HEIGHT = 64;
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div>
      <PortfolioBody>
        <div>
          <Parallax
            pages={5}
            style={{
              minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
              maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For Internet Explorer and Edge
              ...({
                "::WebkitScrollbar": {
                  display: "none", // For Chrome, Safari, and Opera
                },
              } as React.CSSProperties),
            }}
          >
            <ParallaxLayer
              offset={0}
              speed={0.2}
              style={{
                ...alignCenter,
                justifyContent: "flex-start",
              }}
            >
              <Introduction />
            </ParallaxLayer>
            <ParallaxLayer
              offset={0}
              speed={0.5}
              style={{
                ...alignCenter,
                justifyContent: "flex-end",
              }}
            >
              <MainTerminal isTerminalActive={false} />
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={0.4}
              style={{
                ...alignCenter,
                justifyContent: "flex-start",
              }}
            >
              <div className="text-white ml-12">
                <h1 className="text-4xl">About Me</h1>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={1}
              style={{
                ...alignCenter,
                justifyContent: "flex-end",
              }}
            >
              <MainPowerpoint isPowerpointActive={true} />
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={0.5}
              style={{
                ...alignCenter,
                justifyContent: "center",
              }}
            >
              <Expertise />
            </ParallaxLayer>
            <ParallaxLayer
              offset={3}
              speed={0.5}
              style={{
                ...alignCenter,
                justifyContent: "center",
              }}
            >
              <ProjectList />
            </ParallaxLayer>
            <ParallaxLayer
              offset={4}
              speed={0.5}
              style={{
                paddingTop: "10%",
                paddingLeft: "50px",
              }}
            >
              <Explore />
            </ParallaxLayer>
          </Parallax>
        </div>
      </PortfolioBody>
    </div>
  );
}
