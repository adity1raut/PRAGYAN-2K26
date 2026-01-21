import { useEffect } from "react";
import { gsap } from "gsap";

export default function MagneticCursor() {
  useEffect(() => {
    if ("ontouchstart" in window) return;

    /* ---------------- CORE CURSOR ---------------- */

    const cursor = document.createElement("div");
    Object.assign(cursor.style, {
      position: "absolute",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#67e8f9",
      pointerEvents: "none",
      zIndex: 9999,
      transform: "translate(-50%, -50%)",
      mixBlendMode: "difference",
    });
    document.body.appendChild(cursor);

    const pos = {
      x: window.innerWidth / 2 + window.scrollX,
      y: window.innerHeight / 2 + window.scrollY,
    };
    const mouse = { ...pos };
    const velocity = { x: 0, y: 0 };

    let lastTime = performance.now();

    /* ---------------- NEON PALETTE ---------------- */

    const neonColors = [
      "#22d3ee",
      "#67e8f9",
      "#a5f3fc",
      "#c084fc",
      "#a855f7",
    ];

    /* ---------------- STAR EMITTER ---------------- */

    const emitStar = (x, y, vx, vy) => {
      vx = Math.max(Math.min(vx, 40), -40);
      vy = Math.max(Math.min(vy, 40), -40);

      const star = document.createElement("span");
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];

      const speed = Math.min(Math.hypot(vx, vy), 40);
      const glow = 8 + speed * 0.6;

      star.innerHTML = "✦";
      Object.assign(star.style, {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        fontSize: `${Math.random() * 8 + 10}px`,
        color,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        opacity: 0.95,
        filter: `blur(${speed * 0.02}px)`,
        textShadow: `
          0 0 ${glow}px ${color},
          0 0 ${glow * 2}px ${color},
          0 0 ${glow * 3}px ${color}
        `,
      });

      document.body.appendChild(star);

      gsap.to(star, {
        x: vx * 1.8,
        y: vy * 1.8 - 30,
        scale: 0,
        opacity: 0,
        rotation: vx * 0.2,
        duration: 1.1,
        ease: "power3.out",
        onComplete: () => star.remove(),
      });
    };

    /* ---------------- MOUSE MOVE ---------------- */

    const onMove = (e) => {
      const now = performance.now();
      const dt = now - lastTime || 16;
      lastTime = now;

      const x = e.pageX;
      const y = e.pageY;

      velocity.x = (x - mouse.x) / dt * 16;
      velocity.y = (y - mouse.y) / dt * 16;

      mouse.x = x;
      mouse.y = y;
    };

    window.addEventListener("mousemove", onMove);

    /* ---------------- GLOBAL STAR EMISSION ---------------- */

    let lastEmit = 0;

    const emitOnMove = () => {
      const now = performance.now();
      if (now - lastEmit < 28) return;
      lastEmit = now;

      emitStar(
        pos.x,
        pos.y,
        velocity.x * 0.6,
        velocity.y * 0.6
      );
    };

    window.addEventListener("mousemove", emitOnMove);

    /* ---------------- CARD INTERACTION (OPTIONAL) ---------------- */

    const cards = document.querySelectorAll(".rounded-3xl");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(gsap.globalTimeline, {
          timeScale: 0.6,
          duration: 0.4,
          ease: "power2.out",
        });
        cursor.style.background = "#a855f7";
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(gsap.globalTimeline, {
          timeScale: 1,
          duration: 0.6,
          ease: "power2.out",
        });
        cursor.style.background = "#67e8f9";
      });
    });

    /* ---------------- SMOOTH FOLLOW ---------------- */

    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.14;
      pos.y += (mouse.y - pos.y) * 0.14;

      cursor.style.left = pos.x + "px";
      cursor.style.top = pos.y + "px";
    });

    /* ---------------- CLEANUP ---------------- */

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", emitOnMove);
      cursor.remove();
    };
  }, []);

  return null;
}
