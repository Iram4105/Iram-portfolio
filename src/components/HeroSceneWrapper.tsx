"use client";

import { useReducedMotion, useSpring, useMotionValue, motion } from "framer-motion";

export default function HeroSceneWrapper() {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(-5), { stiffness: 90, damping: 18 });
  const rotateY = useSpring(useMotionValue(-13), { stiffness: 90, damping: 18 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateX.set(-5 - y * 10);
    rotateY.set(-13 + x * 14);
  };

  const resetTilt = () => {
    rotateX.set(-5);
    rotateY.set(-13);
  };

  return (
    <div
      className="hero-scene relative mx-auto flex h-[420px] w-full items-center justify-center sm:h-[470px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      aria-label="Interactive 3D illustration of a software development laptop"
    >
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-scene-glow" />

      <motion.div
        className="hero-laptop"
        style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1100 }}
        animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="hero-laptop-lid">
          <div className="hero-laptop-camera" />
          <div className="hero-laptop-screen">
            <div className="hero-screen-topbar">
              <span className="hero-screen-mark">IR.</span>
              <span className="hero-screen-status"><i /> BUILDING IN PROGRESS</span>
              <span className="hero-screen-menu">•••</span>
            </div>

            <div className="hero-screen-content">
              <div className="hero-screen-kicker">SOFTWARE · DATA · IDEAS</div>
              <div className="hero-screen-title">Make it<br /><em>meaningful.</em></div>
              <div className="hero-screen-rule" />
              <div className="hero-screen-panels">
                <div className="hero-screen-panel hero-screen-panel-large">
                  <span>PROJECT PULSE</span>
                  <div className="hero-chart">
                    {[28, 43, 35, 58, 48, 75, 62, 88, 70, 96, 78, 100].map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
                <div className="hero-screen-panel hero-screen-panel-small">
                  <span>STACK</span>
                  <b>Java</b><b>Python</b><b>AI / ML</b>
                </div>
              </div>
              <div className="hero-screen-footer"><span>DESIGN WITH INTENT</span><span>01 / 04</span></div>
            </div>
          </div>
        </div>

        <div className="hero-laptop-hinge" />
        <div className="hero-laptop-base">
          <div className="hero-keyboard">
            {Array.from({ length: 4 }).map((_, row) => (
              <div className="hero-key-row" key={row}>
                {Array.from({ length: row === 3 ? 8 : 12 }).map((__, key) => (
                  <i key={key} />
                ))}
              </div>
            ))}
          </div>
          <div className="hero-trackpad" />
          <div className="hero-laptop-notch" />
        </div>
      </motion.div>

      <motion.div
        className="hero-float-chip hero-chip-top"
        animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="hero-chip-dot" /> Java · Spring Boot
      </motion.div>
      <motion.div
        className="hero-float-chip hero-chip-bottom"
        animate={reduceMotion ? undefined : { y: [0, 8, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="hero-chip-spark">✦</span> AI / ML · NLP
      </motion.div>
    </div>
  );
}
