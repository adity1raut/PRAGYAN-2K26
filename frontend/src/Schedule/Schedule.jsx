
import { useState } from "react";
import { ArrowLeft, Clock, MapPin, Users, CalendarDays, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

const scheduleData = {
  day1: {
    label: "Day 1",
    title: "Inaugural Day",
    date: "27 Feb 2026",
    shortDate: "27 FEB",
    dayNum: "01",
    events: [
      { time: "10:45 AM – 12:00 PM", event: "Inauguration Ceremony", venue: "Auditorium", organizer: "PRAGYAA Core Committee", highlight: true },
      { time: "12:00 – 12:15 PM", event: "Buffer / Transition Time", venue: "—", organizer: "—" },
      { time: "12:15 – 12:45 PM", event: "Event Opening & Briefing", venue: "Multiple Venues", organizer: "Event Coordination Team" },
      { time: "12:00 – 05:00 PM", event: "Texplorer – Style Your Partner", venue: "Auditorium", organizer: "TESA" },
      { time: "12:00 – 05:00 PM", event: "E-Venture (Startup Expo)", venue: "PMC Area", organizer: "E-Cell" },
      { time: "12:15 – 05:00 PM", event: "Designathon", venue: "A4 Complex Hall", organizer: "PESA" },
      { time: "12:00 – 05:00 PM", event: "Vision Edge – National Level Poster Presentation", venue: "A Complex Common Area", organizer: "Flagship Team" },
      { time: "12:15 – 05:00 PM", event: "AI Bootcamp", venue: "CVDV Lab", organizer: "Flagship Team" },
      { time: "12:00 – 05:00 PM", event: "Code-Clash 2.0", venue: "Language Lab", organizer: "HackIT" },
      { time: "12:15 – 05:00 PM", event: "Electrospark – Voltage Voyage", venue: "Electrical Dept.", organizer: "EESA" },
      { time: "12:15 – 03:15 PM", event: "Cenfest – Bridge Building", venue: "Civil Dept.", organizer: "CESA" },
      { time: "03:15 – 05:15 PM", event: "Cenfest – CAD War", venue: "Civil Dept.", organizer: "CESA" },
      { time: "12:30 – 03:00 PM", event: "Checkmate (Chess)", venue: "Above Ten Bhagyabagar", organizer: "Creative Events Team" },
      { time: "12:15 – 05:00 PM", event: "Chem Trek – Quiztilization", venue: "Chemical Dept.", organizer: "ChESA-IIChE" },
      { time: "12:15 – 05:00 PM", event: "Mechaverse – CAD War", venue: "Mechanical Dept.", organizer: "MESA" },
    ],
  },
  day2: {
    label: "Day 2",
    title: "Technical & Competitive Events",
    date: "28 Feb 2026",
    shortDate: "28 FEB",
    dayNum: "02",
    events: [
      { time: "10:00 AM – 05:00 PM", event: "InnoVerse – Project Exhibition", venue: "Admin (1st & 2nd Floor)", organizer: "Flagship Team" },
      { time: "11:00 AM – 05:00 PM", event: "Math-E-Magic", venue: "AB6 Classroom", organizer: "BMC" },
      { time: "10:00 AM – 05:00 PM", event: "E-Venture (Startup Expo)", venue: "PMC Area", organizer: "E-Cell" },
      { time: "11:00 AM – 05:00 PM", event: "FarOath 6.0 – Treasure Hunt", venue: "PMC Circle", organizer: "Creative Team" },
      { time: "10:00 AM – 05:00 PM", event: "E-Venture (Lightning Pitch)", venue: "Textile Lawn", organizer: "E-Cell" },
      { time: "11:00 AM – 02:00 PM", event: "Chem Trek – Industry Defined Problem", venue: "A4 Complex", organizer: "ChESA-IIChE" },
      { time: "11:00 AM – 05:00 PM", event: "DSA – Knock Out", venue: "Language Lab", organizer: "ITSA" },
      { time: "11:00 AM – 05:00 PM", event: "AI Bootcamp", venue: "CVDV Lab", organizer: "Flagship Team" },
      { time: "11:00 AM – 05:00 PM", event: "Electrospark – Breadboard Builtoff", venue: "Electrical Dept.", organizer: "EESA" },
      { time: "11:00 AM – 03:00 PM", event: "Texplorer – T-shirt Painting", venue: "Textile Dept.", organizer: "TESA" },
      { time: "03:00 PM – 05:00 PM", event: "Texplorer – TextQuize", venue: "Textile Dept.", organizer: "TESA" },
      { time: "10:00 AM – 12:00 PM", event: "Cenfest – Float a Boat", venue: "Civil Dept.", organizer: "CESA" },
      { time: "01:00 PM – 03:00 PM", event: "Cenfest – Town Planning", venue: "Civil Dept.", organizer: "CESA" },
      { time: "03:00 PM – 05:00 PM", event: "Cenfest – Build Blind", venue: "Civil Dept.", organizer: "CESA" },
      { time: "11:00 AM – 05:00 PM", event: "Mechaverse – Marketing Mania", venue: "Mechanical Dept.", organizer: "MESA" },
    ],
  },
  day3: {
    label: "Day 3",
    title: "Valedictory & Prize Distribution",
    date: "01 Mar 2026",
    shortDate: "01 MAR",
    dayNum: "03",
    events: [
      { time: "10:00 AM – 03:00 PM", event: "Udaan – Junior Scientist", venue: "Admin (1st & 2nd Floor)", organizer: "Flagship Team" },
      { time: "10:00 AM – 03:00 PM", event: "Art & Literature Exhibition", venue: "AB Classrooms", organizer: "Team Drishti" },
      { time: "10:00 AM – 03:00 PM", event: "Bootcamp Hiring", venue: "T&P Section", organizer: "Flagship Team" },
      { time: "10:00 AM – 03:00 PM", event: "Electrospark – Step into Strenge", venue: "Electrical Dept.", organizer: "EESA" },
      { time: "10:00 AM – 03:00 PM", event: "E-Venture (IPL Auction)", venue: "A4 Complex", organizer: "Management Team" },
      { time: "10:00 AM – 03:00 PM", event: "Mechaverse – Contraption Cascade", venue: "Mechanical Dept.", organizer: "MESA" },
      { time: "03:00 PM – 04:00 PM", event: "Buffer / Transition Time", venue: "—", organizer: "—" },
      { time: "04:00 PM – 06:30 PM", event: "Prize Distribution Ceremony", venue: "Auditorium", organizer: "PRAGYAA Core Committee", highlight: true },
    ],
  },
};

const isBuffer = (item) =>
  item.event.toLowerCase().includes("buffer") || item.event.toLowerCase().includes("transition");

const SchedulePage = () => {
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState("day1");

  const handleBack = () => navigate("/");

  const currentDay = scheduleData[activeDay];
  const regularEvents = currentDay.events.filter((e) => !isBuffer(e));

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-x-hidden">
      <BackgroundLayer />

      <main className="flex-grow relative z-10">
        {/* Back Button */}
        <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50">
          <button
            onClick={handleBack}
            className="group flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-xl border border-red-500/40 rounded-xl hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
          >
            <ArrowLeft className="w-4 h-4 text-red-500 transition-transform duration-300 group-hover:-translate-x-0.5" />
            <span className="text-red-500 font-semibold text-xs tracking-widest uppercase">Home</span>
          </button>
        </div>

        {/* Hero / Header */}
        <section className="pt-16 sm:pt-20 pb-4 px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mt-2 mb-4">
              <img
                src="/Pragyaa_main_image.png"
                alt="PRAGYAA 2026"
                className="w-full max-w-xs sm:max-w-md md:max-w-lg xl:max-w-xl mx-auto drop-shadow-2xl"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-widest uppercase bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent animate-gradient mb-2">
              Event Schedule
            </h2>

            {/* Date chips */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-3 mb-2">
              {Object.values(scheduleData).map((d) => (
                <span
                  key={d.dayNum}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/5 text-red-300 text-[11px] sm:text-xs font-semibold tracking-widest uppercase"
                >
                  <CalendarDays className="w-3 h-3" />
                  {d.shortDate}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-red-600" />
              <Zap className="w-4 h-4 text-red-500" />
              <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-red-600" />
            </div>
          </div>
        </section>

        {/* Day Tabs */}
        <section className="px-4 sm:px-6 max-w-6xl mx-auto w-full">
          <div className="flex gap-3 sm:gap-4 mb-8 justify-center">
            {Object.entries(scheduleData).map(([key, day]) => {
              const isActive = activeDay === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveDay(key)}
                  className={`relative group flex flex-col items-center px-5 sm:px-8 py-3 sm:py-4 rounded-2xl border-2 transition-all duration-300 min-w-[90px] sm:min-w-[120px] ${
                    isActive
                      ? "border-red-500 bg-gradient-to-b from-red-600/30 to-red-900/20 shadow-xl shadow-red-500/20 scale-105"
                      : "border-gray-700/50 bg-gray-900/30 hover:border-red-500/50 hover:bg-gray-800/40 hover:scale-102"
                  }`}
                >
                  {isActive && (
                    <span className="absolute -top-px left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent rounded-full" />
                  )}
                  <span
                    className={`text-2xl sm:text-3xl font-black leading-none ${
                      isActive ? "text-red-400" : "text-gray-600 group-hover:text-gray-400"
                    }`}
                  >
                    {day.dayNum}
                  </span>
                  <span
                    className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-1 ${
                      isActive ? "text-red-300" : "text-gray-500 group-hover:text-gray-400"
                    }`}
                  >
                    {day.label}
                  </span>
                  <span
                    className={`text-[9px] sm:text-[10px] font-medium mt-0.5 ${
                      isActive ? "text-red-400/80" : "text-gray-600"
                    }`}
                  >
                    {day.shortDate}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Day Banner */}
          <div className="relative mb-6 rounded-2xl overflow-hidden border border-red-500/20 bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(239,68,68,0.08)_0%,_transparent_60%)]" />
            <div className="relative">
              <p className="text-[10px] sm:text-xs text-red-500/70 font-bold tracking-[3px] uppercase mb-1">
                {currentDay.label}
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-wide">
                {currentDay.title}
              </h3>
            </div>
            <div className="relative flex items-center gap-2 shrink-0">
              <CalendarDays className="w-4 h-4 text-red-400" />
              <span className="text-red-300 font-semibold text-sm sm:text-base tracking-widest">
                {currentDay.date}
              </span>
              <span className="ml-3 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold">
                {regularEvents.length} Events
              </span>
            </div>
          </div>

          {/* ── Desktop Table ── */}
          <div className="hidden md:block mb-12 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#1a0000] via-red-950/60 to-[#1a0000] border-b border-red-800/40">
                  <th className="px-6 py-4 text-left w-[22%]">
                    <div className="flex items-center gap-2 text-red-400 font-bold text-xs tracking-[2px] uppercase">
                      <Clock className="w-3.5 h-3.5" /> Time
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left w-[36%] text-red-400 font-bold text-xs tracking-[2px] uppercase">
                    Event
                  </th>
                  <th className="px-6 py-4 text-left w-[22%]">
                    <div className="flex items-center gap-2 text-red-400 font-bold text-xs tracking-[2px] uppercase">
                      <MapPin className="w-3.5 h-3.5" /> Venue
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left w-[20%]">
                    <div className="flex items-center gap-2 text-red-400 font-bold text-xs tracking-[2px] uppercase">
                      <Users className="w-3.5 h-3.5" /> Organized By
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentDay.events.map((item, idx) => {
                  const buffer = isBuffer(item);
                  const highlighted = item.highlight;
                  return (
                    <tr
                      key={idx}
                      className={`group border-b transition-all duration-150 ${
                        buffer
                          ? "border-gray-800/30 bg-black/20"
                          : highlighted
                          ? "border-red-500/20 bg-red-950/20 hover:bg-red-950/30"
                          : idx % 2 === 0
                          ? "border-gray-800/40 bg-gray-900/20 hover:bg-white/[0.02]"
                          : "border-gray-800/40 bg-black/20 hover:bg-white/[0.02]"
                      }`}
                    >
                      <td className={`px-6 py-3.5 font-mono text-xs font-semibold whitespace-nowrap ${buffer ? "text-gray-600" : highlighted ? "text-red-300" : "text-red-400/80"}`}>
                        {item.time}
                      </td>
                      <td className="px-6 py-3.5">
                        <div className={`flex items-center gap-2 ${buffer ? "text-gray-600 italic" : highlighted ? "text-white font-bold" : "text-gray-200 font-medium"}`}>
                          {highlighted && <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />}
                          {item.event}
                        </div>
                      </td>
                      <td className={`px-6 py-3.5 text-xs ${buffer ? "text-gray-700" : "text-gray-400"}`}>
                        {item.venue}
                      </td>
                      <td className="px-6 py-3.5">
                        {!buffer && item.organizer !== "—" ? (
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide ${
                            highlighted
                              ? "bg-red-500/20 border border-red-500/40 text-red-300"
                              : "bg-red-500/8 border border-red-500/15 text-red-400/80 group-hover:border-red-500/30"
                          }`}>
                            {item.organizer}
                          </span>
                        ) : (
                          <span className="text-gray-700 text-xs">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* ── Mobile Cards ── */}
          <div className="md:hidden space-y-2.5 mb-10">
            {currentDay.events.map((item, idx) => {
              const buffer = isBuffer(item);
              const highlighted = item.highlight;
              return (
                <div
                  key={idx}
                  className={`relative rounded-xl border overflow-hidden transition-all duration-200 ${
                    buffer
                      ? "border-gray-800/30 bg-black/20 py-2 px-4"
                      : highlighted
                      ? "border-red-500/40 bg-red-950/20 shadow-lg shadow-red-900/20"
                      : "border-gray-800/40 bg-gray-900/30 hover:border-red-500/20"
                  }`}
                >
                  {!buffer && (
                    <div className={`absolute left-0 inset-y-0 w-0.5 ${highlighted ? "bg-red-500" : "bg-red-500/20"}`} />
                  )}
                  {buffer ? (
                    <p className="text-gray-600 text-[11px] italic text-center py-0.5">{item.event}</p>
                  ) : (
                    <div className="p-3.5 pl-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className={`flex items-center gap-1.5 font-mono text-[11px] font-semibold ${highlighted ? "text-red-300" : "text-red-400/80"}`}>
                          <Clock className="w-3 h-3 shrink-0" />
                          <span>{item.time}</span>
                        </div>
                        {item.organizer !== "—" && (
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 ${
                            highlighted
                              ? "bg-red-500/20 border border-red-500/40 text-red-300"
                              : "bg-red-500/8 border border-red-500/20 text-red-400/80"
                          }`}>
                            {item.organizer}
                          </span>
                        )}
                      </div>
                      <p className={`text-sm font-semibold mb-1.5 ${highlighted ? "text-white" : "text-gray-100"}`}>
                        {highlighted && <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mr-2 mb-0.5" />}
                        {item.event}
                      </p>
                      {item.venue !== "—" && (
                        <div className="flex items-center gap-1.5 text-gray-500 text-[11px]">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span>{item.venue}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <div className="relative z-20 w-full mt-6">
        <Footer />
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: rgba(0,0,0,0.5); }
        ::-webkit-scrollbar-thumb { background: rgba(239,68,68,0.4); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(239,68,68,0.6); }
      `}</style>
    </div>
  );
};

export default SchedulePage;
