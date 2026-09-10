import Reveal from "./Reveal.jsx";


export default function Card({ as = "div", className = "", delay = 0, children, ...rest }) {
  return (
    <Reveal as={as} delay={delay} className={`card ${className}`} {...rest}>
      {children}
    </Reveal>
  );
}
