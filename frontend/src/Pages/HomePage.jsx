import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import MainContent from "../components/MainContent";
import GlobalStyles from "../components/GlobalStyles";
import BackgroundLayer from "../components/BackgroundLayer";
import BorderOverlay from "../components/BorderOverlay";
import SocialMedia from "../components/SocialMedia";

const HomePage = () =>  {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Background Layer */}
      <BackgroundLayer />
      
      {/* Main Layout Container */}
      <div className="relative w-full min-h-screen bg-gradient-to-br to-gray-800 overflow-hidden">
        {/* Content Container - Responsive borders */}
        <div className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-12 border border-cyan-500/30" />
        
        {/* Border Overlay System */}
        <BorderOverlay />
        
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden lg:block">
          <LeftSidebar />
          <RightSidebar />
        </div>
        
        {/* Main Content - Responsive positioning */}
        <div className="relative lg:absolute lg:inset-0">
          <MainContent />
        </div>
        
        {/* Social Media Links - Responsive positioning */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-full px-4">
          <div className="flex justify-center">
            <SocialMedia />
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <GlobalStyles />
    </div>
  );
}

export default HomePage;