import { ArrowLeft, Star, Calendar, Award, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

const currentGuest = {
  name: "Dr. Tikle Sir",
  title: "Chief Guest — PRAGYAA 2026",
  designation: "Distinguished Academic Leader & Visionary",
  image: "/Guest/Tiklesh_sir.jpeg",
  description:
    "An esteemed academician and visionary leader who has made remarkable contributions to technical education and research, inspiring countless students and faculty members across the country.",
  year: "2026",
};

const previousGuests = [
  {
    id: 1,
    name: "Dr. Mukesh Sir",
    year: "2025",
    designation: "Renowned Research Scholar & Industry Expert",
    image: "/Guest/Mukesh_sir.jpg",
  },
  {
    id: 2,
    name: "Dr. Dinesh Sir",
    year: "2025",
    designation: "Eminent Professor & Educational Innovator",
    image: "/Guest/Dinesh_Sir.jpg",
  },
  {
    id: 3,
    name: "Dr. H.C. Verma Sir",
    year: "2023",
    designation: "Legendary Physics Educator & Author",
    image: "/Guest/hc-verma-bw.jpg",
  },
];

function Guest() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col relative overflow-x-hidden">
      <BackgroundLayer />

      <main className="flex-grow relative z-10">
        {/* Back Button */}
        <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-30">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-900/90 backdrop-blur border-2 border-red-500/40 rounded-xl hover:border-red-400 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-semibold text-sm">Home</span>
          </button>
        </div>

        {/* Hero */}
        <section className="pt-20 sm:pt-24 pb-8 px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-red-500/10 border-2 border-red-500/30 mb-5">
            <Star className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent uppercase mb-3">
            Distinguished Guests
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Visionaries who inspire us — past and present.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full mt-5 animate-pulse" />
        </section>

        {/* Chief Guest 2026 */}
        <section className="px-4 pb-14 max-w-5xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-5">
            <Award className="w-5 h-5 text-red-400" />
            <h2 className="text-xs font-semibold text-red-400 uppercase tracking-widest">
              Chief Guest — 2026
            </h2>
            <div className="flex-1 h-px bg-red-500/20" />
          </div>

          <div className="bg-gradient-to-br from-red-900/25 via-gray-900/70 to-red-900/20 border-2 border-red-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-red-500/10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Side */}
              <div className="relative min-h-64 sm:min-h-80 md:min-h-full">
                <img
                  src={currentGuest.image}
                  alt={currentGuest.name}
                  className="w-full h-full object-cover object-center"
                  style={{ minHeight: "320px" }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent md:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/60 hidden md:block" />

                {/* Year Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1.5 bg-red-600/90 backdrop-blur px-3 py-1.5 rounded-full shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span className="text-white text-xs font-bold">2026</span>
                  </div>
                </div>
              </div>

              {/* Info Side */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">
                  {currentGuest.title}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                  {currentGuest.name}
                </h3>
                <p className="text-sm sm:text-base text-red-300 font-medium mb-4">
                  {currentGuest.designation}
                </p>

                <div className="h-px bg-gradient-to-r from-red-500/40 to-transparent mb-5" />

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {currentGuest.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-xs font-semibold bg-red-500/15 border border-red-500/30 text-red-300 rounded-full">
                    Distinguished Guest
                  </span>
                  <span className="px-3 py-1.5 text-xs font-semibold bg-red-500/15 border border-red-500/30 text-red-300 rounded-full">
                    Academic Excellence
                  </span>
                  <span className="px-3 py-1.5 text-xs font-semibold bg-red-500/15 border border-red-500/30 text-red-300 rounded-full">
                    Innovation Leader
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Guests */}
        <section className="px-4 pb-16 max-w-5xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-gray-400" />
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Previous Distinguished Guests
            </h2>
            <div className="flex-1 h-px bg-gray-700/60" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {previousGuests.map((guest) => (
              <div
                key={guest.id}
                className="group bg-gray-900/60 border-2 border-gray-800/80 rounded-2xl overflow-hidden hover:border-red-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />

                  {/* Year badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-gray-950/80 backdrop-blur border border-red-500/40 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3 h-3 text-red-400" />
                    <span className="text-red-300 text-xs font-bold">{guest.year}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-red-300 transition-colors duration-200">
                    {guest.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-snug">
                    {guest.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Guest;
