import { useNavigate } from "react-router-dom";
import { Trophy, Users } from "lucide-react";

function EventCard({ event }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/event/${encodeURIComponent(event.id)}`);
  };

  return (
    <div
      className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-xl overflow-hidden shadow-lg shadow-red-500/10 hover:border-red-500/50 hover:scale-105 transition-all duration-300 cursor-pointer p-6 sm:p-8 flex flex-col"
      onClick={handleViewDetails}
    >
      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{event.title}</h3>
      <p className="text-sm text-red-300 mb-4">{event.tagline}</p>

      <div className="flex flex-wrap gap-3 text-xs sm:text-sm mb-5">
        {event.prizePool && (
          <div className="flex items-center gap-1.5 text-yellow-400">
            <Trophy className="w-3.5 h-3.5" />
            <span className="font-semibold">₹{event.prizePool.toLocaleString()}</span>
          </div>
        )}
        {event.entryFee !== undefined && (
          <div className="text-gray-400">
            Entry: <span className="text-gray-200">₹{event.entryFee}</span>
          </div>
        )}
        {event.members && (
          <div className="flex items-center gap-1.5 text-gray-400">
            <Users className="w-3.5 h-3.5" />
            <span className="text-gray-200">{event.members} Members</span>
          </div>
        )}
      </div>

      <button
        className="mt-auto px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow hover:shadow-red-500/40"
        onClick={(e) => {
          e.stopPropagation();
          handleViewDetails();
        }}
      >
        View Details →
      </button>
    </div>
  );
}

export default function NeonEventCards({ events = [] }) {
  return (
    <section className="relative w-full px-2 sm:px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {events.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
