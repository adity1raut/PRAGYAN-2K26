import React, { memo } from "react";
import Hero from "../Curser/Hero";
import StarField from "./StartField";
import GridLines from "./GridLines";

const BackgroundLayer = () => {
  // Mobile detection for performance
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const isTablet =
    typeof window !== "undefined" &&
    window.innerWidth >= 768 &&
    window.innerWidth < 1024;

  // Adjust density based on device
  const starDensity = isMobile ? "medium" : isTablet ? "high" : "ultra";
  const showComets = !isMobile;
  const cometCount = isTablet ? 4 : 7;

  return (
    <div className="fixed inset-0 z-0">
      <StarField
        density={starDensity}
        showComets={showComets}
        cometCount={cometCount}
        isDark={true}
        showNebula={!isMobile}
        showPulsars={!isMobile}
      />
      <GridLines
        strokeColor="#ff5757"
        horizontalLines={isMobile ? 14 : isTablet ? 22 : 30}
        verticalLines={isMobile ? 14 : isTablet ? 22 : 30}
        strokeOpacity={0.18}
        strokeWidth={0.5}
        speed={isMobile ? 10 : 8}
        opacity={0.35}
        enableGlow={true}
        enableMovingLines={!isMobile}
      />
    </div>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(BackgroundLayer);
