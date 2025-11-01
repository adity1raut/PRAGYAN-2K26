import React from 'react';
import Clock from './Clock/Clock';

export default function MainContent() {

  return (
    <main className="relative z-5 flex-1 flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-20 text-center min-h-[calc(100vh-80px)]">
      {/* Top tagline - responsive text and spacing */}
      <div className="text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] text-cyan-400 mb-2 sm:mb-3 uppercase font-medium animate-pulse">
        THE QUANTUM NEXUS
      </div>

      {/* Main title - highly responsive sizing */}
      <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-[8px] xs:tracking-[10px] sm:tracking-[12px] md:tracking-[15px] my-3 sm:my-4 md:my-5 bg-gradient-to-b from-white via-cyan-200 to-gray-600 bg-clip-text text-transparent uppercase animate-glitch drop-shadow-2xl">
        PRAGYAA
      </h1>

      {/* Subtitle - responsive and enhanced */}
      <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] my-3 sm:my-4 md:my-5 uppercase text-gray-300 font-light max-w-4xl leading-relaxed">
        "BRIGHTER THAN EVER BEFORE"
      </p>

      {/* Enhanced description for mobile */}
      <div className="block sm:hidden text-xs text-gray-400 mb-4 px-2 leading-relaxed">
        Innovation • Technology • Excellence
      </div>

      {/* Clock component - responsive container */}
      <div className="mt-4 sm:mt-6 md:mt-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl">
        <Clock />
      </div>

      {/* Additional decorative elements for mobile */}
      <div className="absolute top-1/4 left-4 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 sm:hidden"></div>
      <div className="absolute top-1/4 right-4 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 sm:hidden"></div>
      
      {/* Mobile-specific glow effects */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent pointer-events-none sm:hidden"></div>
    </main>
  );
}