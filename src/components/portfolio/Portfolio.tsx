import PortfolioBody from "./components/PortfolioBody";
import LandingPage from "./components/LandingPage";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Introduction from "./components/Introduction";
import BoxTerminal from "./components/terminal/BoxTerminal";

export default function Portfolio() {
  const HEADER_HEIGHT = 64;
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div>
      <PortfolioBody>
        <div>
          <Parallax
            pages={3}
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
              style={{ ...alignCenter, justifyContent: "flex-start" }}
            >
              <Introduction />
            </ParallaxLayer>
            <ParallaxLayer
              offset={0}
              speed={0.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <div className="w-4/6 h-48 mr-3">
                <BoxTerminal>
                  <h1 className="text-green-600">Hello</h1>
                </BoxTerminal>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={0.4}
              style={{ ...alignCenter, justifyContent: "flex-start" }}
            >
              <Introduction />
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={1}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <Introduction />
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={0.5}
              style={{ ...alignCenter, justifyContent: "flex-start" }}
            >
              <Introduction />
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={1}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <Introduction />
            </ParallaxLayer>
          </Parallax>
        </div>
      </PortfolioBody>
    </div>
  );
}
