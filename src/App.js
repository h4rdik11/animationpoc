import { motion, useViewportScroll } from "framer-motion";
import React, { useLayoutEffect, useState } from "react";
import "./App.css";
import hero from "./assets/images/hero.png";

const useOnScroll = () => {
  const [scroll, setScroll] = useState({
    scrollY: window.scrollY,
    scrollX: window.scrollX,
  });
  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const onScroll = (ev) => {
    setScroll({ scrollY: window.scrollY, scrollX: window.scrollX });
  };

  return scroll;
};

export default function App() {
  const { scrollYProgress } = useViewportScroll();
  useOnScroll();
  return (
    <motion.div id="App" className="App">
      <motion.img
        src={hero}
        style={{
          width: `${100}%`,
          margin: `0`,
          borderBottomLeftRadius: `${Math.floor(
            scrollYProgress.get() * 1000
          )}px`,
          borderBottomRightRadius: `${Math.floor(
            scrollYProgress.get() * 1000
          )}px`,
          transition: "all 0.1s ease-in-out",
        }}
        alt="hero image"
      />
    </motion.div>
  );
}
