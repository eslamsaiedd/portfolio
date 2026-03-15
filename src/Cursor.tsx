

import { useEffect, useRef } from "react";
import "./cursor.css";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const hoveringRef = useRef(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const moveMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Track hovering using ref (no re-renders)
      const target = e.target as Element | null;
      hoveringRef.current = !!(target?.closest("a") || target?.closest("button"));
    };

    window.addEventListener("mousemove", moveMouse);

    let animationFrameId: number;

    const animate = () => {
      posX += (mouseX - posX) * 0.09;
      posY += (mouseY - posY) * 0.09;

      if (cursorRef.current) {
        cursorRef.current.style.left = posX + "px";
        cursorRef.current.style.top = posY + "px";

        // Scale effect
        const scale = hoveringRef.current ? 1.6 : 1;
        cursorRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>;
}