import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Users, Phone, MapPin, BookOpen } from "lucide-react";
import eventData from "./eventData";
import BackgroundLayer from "../components/BackgroundLayer";
import Footer from "../Footer/Footer";

function findEvent(eventId) {
  for (const category of Object.values(eventData)) {
    const found = category.events.find(
      (e) => e.id === decodeURIComponent(eventId)
    );
    if (found) return found;
  }
  return null;
}

export default function EventDetailPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = findEvent(eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xl font-bold mb-4">Event not found.</p>
          <button
            onClick={() => navigate("/events")}
            className="px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-500 transition-colors"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-950 overflow-x-hidden">
      <BackgroundLayer />

      <main className="relative z-20 pb-16">
        {/* Back Button */}
        <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-30">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-900/90 backdrop-blur border-2 border-red-500/40 rounded-xl hover:border-red-400 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-semibold text-sm">Back</span>
          </button>
        </div>

        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 pb-8 px-4 text-center max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            PRAGYAA 2026
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            {event.title}
          </h1>
          <p className="text-base sm:text-lg text-red-300 font-medium">{event.tagline}</p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full mt-5 animate-pulse" />
        </section>

        <div className="max-w-4xl mx-auto px-4 space-y-6">

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {event.prizePool && (
              <div className="bg-gray-900/70 border border-red-500/30 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-1.5 text-yellow-400 mb-2">
                  <Trophy className="w-4 h-4" />
                  <span className="text-[10px] font-semibold uppercase tracking-wide">Prize Pool</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">₹{event.prizePool.toLocaleString()}</p>
              </div>
            )}
            {event.entryFee !== undefined && (
              <div className="bg-gray-900/70 border border-red-500/30 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-1.5 text-red-400 mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wide">Entry Fee</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">₹{event.entryFee}</p>
              </div>
            )}
            {event.members && (
              <div className="bg-gray-900/70 border border-red-500/30 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-1.5 text-red-400 mb-2">
                  <Users className="w-4 h-4" />
                  <span className="text-[10px] font-semibold uppercase tracking-wide">Team Size</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">{event.members}</p>
              </div>
            )}
            {event.venue && (
              <div className="bg-gray-900/70 border border-red-500/30 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-1.5 text-red-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] font-semibold uppercase tracking-wide">Venue</span>
                </div>
                <p className="text-sm font-semibold text-white leading-tight">{event.venue}</p>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="bg-gray-900/60 border border-red-500/25 rounded-2xl p-5 sm:p-6">
            <h2 className="text-base sm:text-lg font-bold text-red-400 uppercase tracking-widest mb-3">About the Event</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{event.description}</p>
          </div>

          {/* Rulebook */}
          {event.rules && event.rules.length > 0 && (
            <div className="bg-gray-900/60 border border-red-500/25 rounded-2xl p-5 sm:p-6">
              <h2 className="text-base sm:text-lg font-bold text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Rulebook
              </h2>
              <div className="space-y-4">
                {event.rules.map((section, sIdx) => (
                  <div
                    key={sIdx}
                    className="border border-red-500/20 rounded-xl overflow-hidden"
                  >
                    {/* Section Header */}
                    <div className="bg-gradient-to-r from-red-900/40 to-red-800/30 px-4 py-2.5 border-b border-red-500/20">
                      <h3 className="text-xs sm:text-sm font-bold text-red-300 uppercase tracking-wide">
                        {section.section}
                      </h3>
                    </div>
                    {/* Section Items */}
                    <ul className="p-4 space-y-2">
                      {section.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className="flex items-start gap-2.5 text-sm text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Coordinators */}
          <div className="bg-gray-900/60 border border-red-500/25 rounded-2xl p-5 sm:p-6">
            <h2 className="text-base sm:text-lg font-bold text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Coordinators
            </h2>
            <div className="space-y-3">
              {event.coordinators.map((coord, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 p-3 bg-gray-800/50 rounded-xl border border-gray-700/50"
                >
                  <span className="text-white font-medium text-sm sm:text-base">{coord.name}</span>
                  <a
                    href={`tel:${coord.phone}`}
                    className="text-red-400 hover:text-red-300 hover:underline transition-colors text-sm font-semibold"
                  >
                    {coord.phone}
                  </a>
                </div>
              ))}
            </div>
            {event.faculty && (
              <p className="mt-3 text-xs text-gray-500 text-center">
                Faculty In-charge: <span className="text-gray-400 font-medium">{event.faculty}</span>
              </p>
            )}
          </div>

          {/* Register Button */}
          <a
            href={event.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-lg font-bold rounded-2xl hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-xl shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.02]"
          >
            Register Now →
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
