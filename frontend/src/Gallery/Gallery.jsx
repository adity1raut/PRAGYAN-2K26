import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

function AnimatedGallery() {
  const navigate = useNavigate();
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleBack = () => navigate(-1);

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
    // Duplicate photos for seamless infinite scroll
    const duplicatedPhotos = [...photos, ...photos];
    
    return (
      <div className="gallery_strip_wrapper">
        <div className={`gallery__strip ${className}`}>
          {duplicatedPhotos.map((photo, i) => (
            <div 
              className="photo" 
              key={i}
              onMouseEnter={() => setHoveredImage(`${stripIndex}-${i}`)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="photo__image">
                <div className="photo__border">
                  <div className="photo__glow"></div>
                  <img src={photo.src} alt="" loading="lazy" />
                  <div className="photo__overlay">
                    <div className="photo__overlay-grid"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col relative">
      <BackgroundLayer />

      <main className="flex-grow relative overflow-hidden z-10">
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
          <button
            onClick={handleBack}
            className="group relative flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-gray-950 to-gray-900 backdrop-blur-xl border-2 border-red-500/40 rounded-xl sm:rounded-2xl hover:border-red-500/80 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-red-400 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-red-500 group-hover:text-red-400 font-semibold text-xs sm:text-sm tracking-wide transition-colors duration-300">
              Back
            </span>
          </button>
        </div>

        <section className="pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[3px] xs:tracking-[5px] sm:tracking-[8px] md:tracking-[12px] lg:tracking-[15px] my-2 sm:my-3 md:my-4 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase">
              PRAGYAA
            </h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] uppercase text-gray-300 font-light">
              "BRIGHTER THAN EVER BEFORE"
            </p>
          </div>
        </section>

        <section className="py-6 sm:py-8 md:py-10 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-6 sm:mb-8 animate-gradient">
              Gallery
            </h2>
            <div className="gallery-container">
              {renderStrip(galleryPhotos.stripOne, "one", 0)}
              {renderStrip(galleryPhotos.stripTwo, "two", 1)}
              {renderStrip(galleryPhotos.stripThree, "three", 2)}
              {renderStrip(galleryPhotos.stripFour, "four", 3)}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .gallery-container {
          display: flex;
          gap: 0.5rem;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* Ambient glow effect */
        .gallery-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1), transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .gallery_strip_wrapper {
          flex: 1;
          overflow: hidden;
          display: flex;
          align-items: flex-start;
          background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
          border-left: 1px solid rgba(239, 68, 68, 0.1);
          position: relative;
        }

        .gallery_strip_wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(239, 68, 68, 0.05) 0%,
            transparent 20%,
            transparent 80%,
            rgba(239, 68, 68, 0.05) 100%
          );
          pointer-events: none;
        }

        .gallery__strip {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.5rem 0;
          width: 100%;
          animation: float 40s linear infinite;
          position: relative;
          z-index: 2;
        }

        .gallery__strip.one {
          animation-duration: 35s;
        }

        .gallery__strip.two {
          animation-duration: 45s;
          animation-direction: reverse;
        }

        .gallery__strip.three {
          animation-duration: 38s;
        }

        .gallery__strip.four {
          animation-duration: 42s;
          animation-direction: reverse;
        }

        .gallery__strip:hover {
          animation-play-state: paused;
        }

        .photo {
          width: 100%;
          position: relative;
          padding: 0 0.5rem;
        }

        .photo__image {
          width: 100%;
          position: relative;
        }

        .photo__border {
          position: relative;
          padding: 2px;
          background: linear-gradient(135deg, 
            rgba(239, 68, 68, 0.3) 0%,
            rgba(220, 38, 38, 0.2) 25%,
            rgba(185, 28, 28, 0.1) 50%,
            rgba(220, 38, 38, 0.2) 75%,
            rgba(239, 68, 68, 0.3) 100%
          );
          background-size: 200% 200%;
          animation: borderShift 4s ease infinite;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .photo:hover .photo__border {
          background: linear-gradient(135deg, 
            rgba(239, 68, 68, 0.6) 0%,
            rgba(220, 38, 38, 0.4) 25%,
            rgba(185, 28, 28, 0.3) 50%,
            rgba(220, 38, 38, 0.4) 75%,
            rgba(239, 68, 68, 0.6) 100%
          );
          padding: 3px;
          transform: translateY(-4px);
          box-shadow: 
            0 10px 40px -10px rgba(239, 68, 68, 0.5),
            0 0 20px rgba(239, 68, 68, 0.3),
            inset 0 0 20px rgba(239, 68, 68, 0.1);
        }

        .photo__glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 1;
        }

        .photo:hover .photo__glow {
          opacity: 1;
          animation: pulse 2s ease-in-out infinite;
        }

        .photo__border img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: 6px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
          aspect-ratio: 4/3;
        }

        .photo:hover .photo__border img {
          transform: scale(1.05);
          filter: brightness(1.1) contrast(1.05);
        }

        .photo__overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(239, 68, 68, 0.1) 0%,
            transparent 50%,
            rgba(185, 28, 28, 0.1) 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 6px;
          pointer-events: none;
          z-index: 3;
        }

        .photo:hover .photo__overlay {
          opacity: 1;
        }

        .photo__overlay-grid {
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(239, 68, 68, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .photo:hover .photo__overlay-grid {
          opacity: 1;
        }

        @keyframes float {
          from { 
            transform: translateY(0); 
          }
          to { 
            transform: translateY(-50%); 
          }
        }

        @keyframes borderShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .gallery-container {
            gap: 0.25rem;
          }

          .gallery__strip {
            gap: 1.25rem;
            padding: 1.25rem 0;
          }

          .photo {
            padding: 0 0.25rem;
          }
        }

        @media (max-width: 768px) {
          .gallery-container {
            flex-direction: column;
            gap: 1rem;
          }

          .gallery_strip_wrapper {
            border-left: none;
            border-top: 1px solid rgba(239, 68, 68, 0.1);
          }

          .gallery__strip {
            flex-direction: row;
            gap: 1rem;
            padding: 0 1rem;
            animation: scroll 30s linear infinite;
          }

          .gallery__strip.one {
            animation-duration: 25s;
          }

          .gallery__strip.two {
            animation-duration: 35s;
          }

          .gallery__strip.three {
            animation-duration: 28s;
          }

          .gallery__strip.four {
            animation-duration: 32s;
          }

          .photo {
            min-width: 280px;
            max-width: 280px;
            padding: 0;
          }

          .photo__border img {
            aspect-ratio: 3/4;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .gallery__strip.two,
          .gallery__strip.four {
            animation-direction: reverse;
          }
        }

        @media (max-width: 640px) {
          .gallery__strip {
            gap: 0.75rem;
            padding: 0 0.75rem;
          }

          .photo {
            min-width: 240px;
            max-width: 240px;
          }

          .photo__border {
            padding: 1.5px;
          }

          .photo:hover .photo__border {
            padding: 2px;
          }
        }

        @media (max-width: 480px) {
          .photo {
            min-width: 200px;
            max-width: 200px;
          }

          .gallery__strip {
            gap: 0.5rem;
            padding: 0 0.5rem;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .gallery__strip {
            animation: none;
          }

          .photo__border,
          .photo__border img,
          .photo__overlay,
          .photo__overlay-grid,
          .photo__glow {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}

export default AnimatedGallery;