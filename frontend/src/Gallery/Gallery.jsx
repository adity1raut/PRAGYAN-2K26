import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";
import "./AnimatedGallery.css";

function AnimatedGallery() {
  const navigate = useNavigate();
  const [hoveredImage, setHoveredImage] = useState(null);

  const galleryPhotos = {
    stripOne: [
      { src: "/Gallery/jr1.jpg" },
      { src: "/Gallery/jr2.jpg" },
      { src: "/Gallery/jr3.jpg" },
      { src: "/Gallery/jr4.jpg" },
    ],
    stripTwo: [
      { src: "/Gallery/jr5.jpg" },
      { src: "/Gallery/jr6.jpg" },
      { src: "/Gallery/t1.jpg" },
      { src: "/Gallery/t2.jpg" },
    ],
    stripThree: [
      { src: "/Gallery/t3.jpg" },
      { src: "/Gallery/t4.jpg" },
      { src: "/Gallery/t5.jpg" },
      { src: "/Gallery/t6.jpg" },
    ],
    stripFour: [
      { src: "/Gallery/t7.jpg" },
      { src: "/Gallery/t8.jpg" },
      { src: "/Gallery/t9.jpg" },
      { src: "/Gallery/t10.jpg" },
      { src: "/Gallery/t11.jpg" },
      { src: "/Gallery/t12.jpg" },
    ],
  };

  const renderStrip = (photos, className, stripIndex) => {
    const duplicatedPhotos = [...photos, ...photos, ...photos];

    return (
      <div className={`gallery-strip ${className}`}>
        <div className="strip-track">
          {duplicatedPhotos.map((photo, i) => (
            <div
              key={i}
              className={`gallery-item ${
                hoveredImage === `${stripIndex}-${i}` ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredImage(`${stripIndex}-${i}`)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="image-wrapper">
                <img src={photo.src} alt={`Gallery ${stripIndex}-${i}`} />
                <div className="image-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-x-hidden">
      {/* Background Layer with StarField and GridLines */}
      <BackgroundLayer />

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        {/* Back Button */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
          <button
            onClick={() => navigate("/")}
            className="group relative flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-gray-950 to-gray-900 backdrop-blur-xl border-2 border-red-500/40 rounded-xl sm:rounded-2xl hover:border-red-500/80 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-red-400 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-red-500 group-hover:text-red-400 font-semibold text-xs sm:text-sm tracking-wide transition-colors duration-300">
              Home
            </span>
          </button>
        </div>

        {/* Title Section */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Main Image */}
            <div className="my-3 sm:my-4 md:my-5">
              <img
                src="/Pragyaa_main_image.png"
                alt="PRAGYAA 2026"
                className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Gallery Hero Section */}
        <section className="py-6 sm:py-8 md:py-10 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-4 sm:mb-6 animate-gradient">
              Gallery
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Moments That Define Innovation
            </p>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full animate-pulse"></div>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-8 sm:py-12 md:py-16 px-4 relative z-10">
          <div className="max-w-full mx-auto">
            <div className="gallery-strips-container">
              {renderStrip(galleryPhotos.stripOne, "strip-one", 0)}
              {renderStrip(galleryPhotos.stripTwo, "strip-two", 1)}
              {renderStrip(galleryPhotos.stripThree, "strip-three", 2)}
              {renderStrip(galleryPhotos.stripFour, "strip-four", 3)}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default AnimatedGallery;