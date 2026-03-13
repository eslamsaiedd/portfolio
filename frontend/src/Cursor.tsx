// import { useEffect } from "react";
// import "./cursor.css";

// export default function Cursor() {

//   useEffect(() => {
//     const cursor = document.querySelector(".cursor");

//     const moveCursor = (e) => {
//       cursor.style.left = e.clientX + "px";
//       cursor.style.top = e.clientY + "px";
//     };

//     window.addEventListener("mousemove", moveCursor);

//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return <div className="cursor"></div>;
// }

import { useEffect, useRef } from "react";
import "./cursor.css";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let posX = 0;
    let posY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      posX += (mouseX - posX) * 0.09;
      posY += (mouseY - posY) * 0.09;

      if (cursorRef.current) {
        cursorRef.current.style.left = posX + "px";
        cursorRef.current.style.top = posY + "px";
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>;
}