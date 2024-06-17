import { animated, useSpring, useSprings } from "@react-spring/web";

export default function Portfolio(props: { children: React.ReactNode }) {
  const gradients = {
    gradient1: `
          radial-gradient(at 59% 84%, hsla(265, 28%, 19%, 1) 0px, transparent 50%),
          radial-gradient(at 100% 100%, hsla(210, 66%, 15%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(338, 32%, 15%, 1) 0px, transparent 50%)
        `,
    gradient2: `
          radial-gradient(at 59% 84%, hsla(338, 32%, 15%, 1) 0px, transparent 50%),
          radial-gradient(at 100% 100%, hsla(265, 28%, 19%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(210, 66%, 15%, 1) 0px, transparent 50%)
        `,
  };

  const [{ background }, api] = useSpring(() => ({
    from: { background: gradients.gradient1 },
    to: { background: gradients.gradient2 },
    config: { duration: 3000 },
    loop: { reverse: true },
  }));
  return (
    <animated.div
      style={{ minHeight: "100vh", maxHeight: "100vh", background: background }}
    >
      {props.children}
    </animated.div>
  );
}
