import { useEffect, useRef, useMemo } from "react";

function GridLines({
  strokeColor = "#ff5757",
  horizontalLines = 20,
  verticalLines = 20,
  strokeOpacity = 0.4,
  strokeWidth = 0.5,
  speed = 5,
  opacity = 0.4,
  enableMovingLines = true,
  enableGlow = true,
}) {
  const containerRef = useRef(null);
  const styleRef = useRef(null);

  const cellW = useMemo(() => 100 / verticalLines,   [verticalLines]);
  const cellH = useMemo(() => 100 / horizontalLines, [horizontalLines]);

  const animationStyles = useMemo(
    () => `
    @keyframes moveDiagonal {
      0%   { transform: translate3d(-120px, -120px, 0); }
      100% { transform: translate3d(120px,   120px, 0); }
    }
    @keyframes gridPulse {
      0%, 100% { stroke-opacity: ${strokeOpacity * 0.4}; }
      50%       { stroke-opacity: ${strokeOpacity}; }
    }
    @keyframes slideHorizontal {
      0%   { transform: translate3d(-120px, 0, 0); }
      100% { transform: translate3d(120px,  0, 0); }
    }
    @keyframes slideVertical {
      0%   { transform: translate3d(0, -120px, 0); }
      100% { transform: translate3d(0,  120px, 0); }
    }
    @keyframes gridGlow {
      0%, 100% {
        stroke-opacity: ${strokeOpacity * 0.6};
        filter: drop-shadow(0 0 3px ${strokeColor});
      }
      50% {
        stroke-opacity: ${Math.min(strokeOpacity * 1.4, 1)};
        filter: drop-shadow(0 0 12px ${strokeColor}) drop-shadow(0 0 20px ${strokeColor}80);
      }
    }
    @keyframes dotPulse {
      0%, 100% { opacity: ${strokeOpacity * 1.2}; r: 1.2; }
      50%       { opacity: ${Math.min(strokeOpacity * 2.5, 1)}; r: 2.2; }
    }
    @keyframes scanSweep {
      0%   { transform: translateY(-5%); opacity: 0; }
      5%   { opacity: 1; }
      95%  { opacity: 1; }
      100% { transform: translateY(105%); opacity: 0; }
    }
  `,
    [strokeColor, strokeOpacity],
  );

  useEffect(() => {
    const gridContainer = containerRef.current;
    if (!gridContainer) return;

    if (styleRef.current?.parentNode) {
      styleRef.current.parentNode.removeChild(styleRef.current);
    }

    const style = document.createElement("style");
    style.textContent = animationStyles;
    document.head.appendChild(style);
    styleRef.current = style;

    const ns = "http://www.w3.org/2000/svg";
    const fragment = document.createDocumentFragment();

    const gridSvg = document.createElementNS(ns, "svg");
    gridSvg.setAttribute("width", "100%");
    gridSvg.setAttribute("height", "100%");
    gridSvg.setAttribute("viewBox", "-120 -120 calc(100vw + 240) calc(100vh + 240)");
    gridSvg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    gridSvg.style.cssText = `
      position: absolute;
      inset: 0;
      will-change: transform;
      animation: moveDiagonal ${speed}s linear infinite;
    `;

    const defs = document.createElementNS(ns, "defs");

    // ── Horizontal line pattern ─────────────────────────────────────────
    if (horizontalLines > 0) {
      const hPat = document.createElementNS(ns, "pattern");
      hPat.setAttribute("id", "hGrid");
      hPat.setAttribute("width", "100");
      hPat.setAttribute("height", String(cellH));
      hPat.setAttribute("patternUnits", "userSpaceOnUse");

      const hLine = document.createElementNS(ns, "line");
      hLine.setAttribute("x1", "0");
      hLine.setAttribute("y1", "0");
      hLine.setAttribute("x2", "100");
      hLine.setAttribute("y2", "0");
      hLine.setAttribute("stroke", strokeColor);
      hLine.setAttribute("stroke-width", String(strokeWidth));
      hLine.setAttribute("stroke-opacity", String(strokeOpacity));

      hPat.appendChild(hLine);
      defs.appendChild(hPat);
    }

    // ── Vertical line pattern ───────────────────────────────────────────
    if (verticalLines > 0) {
      const vPat = document.createElementNS(ns, "pattern");
      vPat.setAttribute("id", "vGrid");
      vPat.setAttribute("width", String(cellW));
      vPat.setAttribute("height", "100");
      vPat.setAttribute("patternUnits", "userSpaceOnUse");

      const vLine = document.createElementNS(ns, "line");
      vLine.setAttribute("x1", "0");
      vLine.setAttribute("y1", "0");
      vLine.setAttribute("x2", "0");
      vLine.setAttribute("y2", "100");
      vLine.setAttribute("stroke", strokeColor);
      vLine.setAttribute("stroke-width", String(strokeWidth));
      vLine.setAttribute("stroke-opacity", String(strokeOpacity));

      vPat.appendChild(vLine);
      defs.appendChild(vPat);
    }

    // ── Intersection dot pattern ────────────────────────────────────────
    const dotPat = document.createElementNS(ns, "pattern");
    dotPat.setAttribute("id", "dotGrid");
    dotPat.setAttribute("width",  String(cellW));
    dotPat.setAttribute("height", String(cellH));
    dotPat.setAttribute("patternUnits", "userSpaceOnUse");

    const dot = document.createElementNS(ns, "circle");
    dot.setAttribute("cx", "0");
    dot.setAttribute("cy", "0");
    dot.setAttribute("r",  "1.5");
    dot.setAttribute("fill", strokeColor);
    dot.setAttribute("fill-opacity", String(Math.min(strokeOpacity * 2, 0.6)));
    if (enableGlow) {
      dot.style.cssText = `animation: dotPulse ${speed * 0.7}s infinite ease-in-out;`;
    }

    dotPat.appendChild(dot);
    defs.appendChild(dotPat);

    // ── Glow filter ─────────────────────────────────────────────────────
    const filter = document.createElementNS(ns, "filter");
    filter.setAttribute("id", "lineGlow");
    filter.setAttribute("x", "-20%");
    filter.setAttribute("y", "-20%");
    filter.setAttribute("width", "140%");
    filter.setAttribute("height", "140%");

    const feGaussian = document.createElementNS(ns, "feGaussianBlur");
    feGaussian.setAttribute("stdDeviation", "2");
    feGaussian.setAttribute("result", "blur");

    const feMerge = document.createElementNS(ns, "feMerge");
    const feMergeNode1 = document.createElementNS(ns, "feMergeNode");
    feMergeNode1.setAttribute("in", "blur");
    const feMergeNode2 = document.createElementNS(ns, "feMergeNode");
    feMergeNode2.setAttribute("in", "SourceGraphic");
    feMerge.appendChild(feMergeNode1);
    feMerge.appendChild(feMergeNode2);

    filter.appendChild(feGaussian);
    filter.appendChild(feMerge);
    defs.appendChild(filter);

    gridSvg.appendChild(defs);

    // ── Grid rects ──────────────────────────────────────────────────────
    if (horizontalLines > 0) {
      const hRect = document.createElementNS(ns, "rect");
      hRect.setAttribute("width", "100%");
      hRect.setAttribute("height", "100%");
      hRect.setAttribute("fill", "url(#hGrid)");
      if (enableGlow) {
        hRect.style.cssText = `animation: gridPulse ${speed * 0.9}s infinite alternate ease-in-out;`;
      }
      gridSvg.appendChild(hRect);
    }

    if (verticalLines > 0) {
      const vRect = document.createElementNS(ns, "rect");
      vRect.setAttribute("width", "100%");
      vRect.setAttribute("height", "100%");
      vRect.setAttribute("fill", "url(#vGrid)");
      if (enableGlow) {
        vRect.style.cssText = `animation: gridPulse ${speed * 0.9}s infinite alternate ease-in-out 0.4s;`;
      }
      gridSvg.appendChild(vRect);
    }

    // Intersection dots layer
    const dotRect = document.createElementNS(ns, "rect");
    dotRect.setAttribute("width", "100%");
    dotRect.setAttribute("height", "100%");
    dotRect.setAttribute("fill", "url(#dotGrid)");
    if (enableGlow) {
      dotRect.setAttribute("filter", "url(#lineGlow)");
    }
    gridSvg.appendChild(dotRect);

    // ── Moving accent lines ─────────────────────────────────────────────
    if (enableMovingLines) {
      const movingCount = 5;
      for (let i = 0; i < movingCount; i++) {
        // Horizontal moving line
        const mH = document.createElementNS(ns, "line");
        mH.setAttribute("x1", "0");
        mH.setAttribute("y1", `${15 + i * 17}%`);
        mH.setAttribute("x2", "100%");
        mH.setAttribute("y2", `${15 + i * 17}%`);
        mH.setAttribute("stroke", strokeColor);
        mH.setAttribute("stroke-width", String(strokeWidth * 2.5));
        mH.setAttribute("stroke-opacity", String(Math.min(strokeOpacity * 2, 0.9)));
        if (enableGlow) mH.setAttribute("filter", "url(#lineGlow)");
        mH.style.cssText = `
          animation:
            slideHorizontal ${speed * 1.6}s linear infinite ${i * 1.8}s
            ${enableGlow ? `, gridGlow ${3 + i * 0.5}s infinite ease-in-out ${i * 1.8}s` : ""};
          will-change: transform;
        `;
        gridSvg.appendChild(mH);

        // Vertical moving line
        const mV = document.createElementNS(ns, "line");
        mV.setAttribute("x1", `${20 + i * 16}%`);
        mV.setAttribute("y1", "0");
        mV.setAttribute("x2", `${20 + i * 16}%`);
        mV.setAttribute("y2", "100%");
        mV.setAttribute("stroke", strokeColor);
        mV.setAttribute("stroke-width", String(strokeWidth * 2.5));
        mV.setAttribute("stroke-opacity", String(Math.min(strokeOpacity * 2, 0.9)));
        if (enableGlow) mV.setAttribute("filter", "url(#lineGlow)");
        mV.style.cssText = `
          animation:
            slideVertical ${speed * 1.6}s linear infinite ${i * 1.8 + 0.9}s
            ${enableGlow ? `, gridGlow ${3 + i * 0.5}s infinite ease-in-out ${i * 1.8 + 0.9}s` : ""};
          will-change: transform;
        `;
        gridSvg.appendChild(mV);
      }
    }

    fragment.appendChild(gridSvg);
    gridContainer.innerHTML = "";
    gridContainer.appendChild(fragment);

    // ── Scan sweep overlay (separate div so it doesn't move with grid) ──
    if (enableGlow) {
      const scan = document.createElement("div");
      scan.style.cssText = `
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(to bottom, transparent, ${strokeColor}55, transparent);
        pointer-events: none;
        animation: scanSweep ${speed * 2.2}s linear infinite;
        will-change: transform, opacity;
      `;
      gridContainer.appendChild(scan);
    }

    return () => {
      if (styleRef.current?.parentNode) {
        styleRef.current.parentNode.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, [
    horizontalLines,
    verticalLines,
    strokeColor,
    strokeWidth,
    strokeOpacity,
    speed,
    enableMovingLines,
    enableGlow,
    animationStyles,
    cellW,
    cellH,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        opacity,
        willChange: "opacity",
      }}
    />
  );
}

export default GridLines;
