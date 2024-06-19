import PortfolioBody from "./components/PortfolioBody";
import LandingPage from "./components/LandingPage";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Portfolio() {
  const HEADER_HEIGHT = 64;
  console.log("Portfolio");
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
                "::-webkit-scrollbar": {
                  display: "none", // For Chrome, Safari, and Opera
                },
              } as React.CSSProperties),
            }}
          >
            <ParallaxLayer offset={0} speed={0.5}>
              <LandingPage />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5}>
              <LandingPage />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5}>
              <LandingPage />
            </ParallaxLayer>
          </Parallax>
        </div>
      </PortfolioBody>
    </div>
  );
}
