import { useEffect } from "react";

export default function CursorStarField() {
  useEffect(() => {
    const createStar = (e) => {
      const star = document.createElement("span");

      star.innerHTML = "";
      star.style.width = "12px";
      star.style.height = "12px";
      star.style.borderRadius = "50%";
      star.style.background = "cyan";
      star.style.boxShadow = "0 0 12px cyan";

      star.style.position = "fixed";
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      star.style.color = "cyan";
      star.style.fontSize = `${Math.random() * 8 + 8}px`;
      star.style.pointerEvents = "none";
      star.style.zIndex = "9999";
      star.style.opacity = "1";
      star.style.transform = "translate(-50%, -50%)";

      document.body.appendChild(star);

      star.animate(
        [
          { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
          {
            transform: `translate(-50%, -80%) scale(0)`,
            opacity: 0,
          },
        ],
        {
          duration: 30,
          easing: "ease-out",
        }
      );

      setTimeout(() => star.remove(), 30);
    };

    window.addEventListener("mousemove", createStar);
    return () => window.removeEventListener("mousemove", createStar);
  }, []);

  return null;
}
