
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";
import ComingSoon from "../components/ComingSoon/ComingSoon";

const SchedulePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-x-hidden">
      {/* Background Layer */}
      <BackgroundLayer />

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10">
        {/* Back Button */}
        <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50">
          <button
            onClick={handleBack}
            className="group relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-gray-950 to-gray-900 backdrop-blur-xl border-2 border-red-500/40 rounded-xl sm:rounded-2xl hover:border-red-500/80 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-red-400 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-red-500 group-hover:text-red-400 font-semibold text-xs sm:text-sm tracking-wide transition-colors duration-300">
              Home
            </span>
          </button>
        </div>

        {/* Header Section */}
        <section className="pt-16 sm:pt-20 md:pt-24 pb-3 sm:pb-4 md:pb-6 px-4 relative z-10 text-center">
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

        {/* Schedule Section Title */}
        <section className="py-3 sm:py-4 md:py-6 px-4 relative z-10 flex flex-col justify-center items-center text-center">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-3 sm:mb-4 md:mb-6 animate-gradient">
            Event Schedule
          </h2>

          <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] my-1.5 sm:my-2 md:my-3 lg:my-4 uppercase text-gray-300 font-light max-w-4xl leading-relaxed">
            14, 15 Feb & 01 March, 2026
          </p>

          {/* Decorative line */}
          <div className="w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full animate-pulse mb-8"></div>
        </section>

        {/* Coming Soon Component */}
        <ComingSoon />
      </main>

      {/* Footer */}
      <div className="relative z-20 w-full mt-4 sm:mt-6 md:mt-8">
        <Footer />
      </div>

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

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(239, 68, 68, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(239, 68, 68, 0.7);
        }
      `}</style>
    </div>
  );
};

export default SchedulePage;
