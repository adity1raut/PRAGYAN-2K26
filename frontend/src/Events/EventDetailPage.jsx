import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Users, Phone, MapPin, BookOpen, FileText, Building2, Star, ChevronRight } from "lucide-react";
import eventData from "./eventData";
import BackgroundLayer from "../components/BackgroundLayer";
import Footer from "../Footer/Footer";

const TOWN_PLANNING_ID = "CESA-Cenfest (Town Planning)";

function findEvent(eventId) {
  for (const category of Object.values(eventData)) {
    const found = category.events.find(
      (e) => e.id === decodeURIComponent(eventId)
    );
    if (found) return found;
  }
  return null;
}

const DEPARTMENTS = [
  {
    id: 1,
    label: "Engineering & Technology",
    color: "from-red-900/40 to-red-800/20",
    border: "border-red-500/30",
    dot: "bg-red-500",
    items: ["Civil Engineering","Mechanical Engineering","Electrical Engineering","Electronics & Communication Engineering","Computer Science & Engineering","Artificial Intelligence & Data Science","Information Technology","Chemical Engineering","Instrumentation Engineering","Textile Technology"],
  },
  {
    id: 2,
    label: "Architecture & Planning",
    color: "from-orange-900/40 to-orange-800/20",
    border: "border-orange-500/30",
    dot: "bg-orange-500",
    items: ["Architecture","Urban & Regional Planning","Interior Design","Landscape Architecture"],
  },
  {
    id: 3,
    label: "Science",
    color: "from-amber-900/40 to-amber-800/20",
    border: "border-amber-500/30",
    dot: "bg-amber-500",
    items: ["Physics","Chemistry","Mathematics","Statistics","Environmental Science","Data Science","Earth Sciences"],
  },
  {
    id: 4,
    label: "Management & Commerce",
    color: "from-yellow-900/40 to-yellow-800/20",
    border: "border-yellow-500/30",
    dot: "bg-yellow-500",
    items: ["Business Administration (BBA/MBA)","Commerce","Finance","Economics","Entrepreneurship & Innovation"],
  },
  {
    id: 5,
    label: "Humanities & Social Sciences",
    color: "from-rose-900/40 to-rose-800/20",
    border: "border-rose-500/30",
    dot: "bg-rose-400",
    items: ["English","Psychology","Sociology","Political Science","Public Administration","History","Philosophy"],
  },
  {
    id: 6,
    label: "Emerging Technological Departments",
    color: "from-red-900/40 to-pink-900/20",
    border: "border-pink-500/30",
    dot: "bg-pink-500",
    items: ["Robotics","Cyber Security","Blockchain Technology","Cloud Computing","IoT & Embedded Systems"],
  },
  {
    id: 7,
    label: "Health & Allied Sciences",
    color: "from-red-900/40 to-red-700/20",
    border: "border-red-400/30",
    dot: "bg-red-400",
    items: ["Pharmacy","Nursing","Public Health","Physiotherapy"],
  },
  {
    id: 8,
    label: "Law Departments",
    color: "from-orange-900/40 to-red-900/20",
    border: "border-orange-400/30",
    dot: "bg-orange-400",
    items: ["Integrated Law (BA LLB / BBA LLB)","LLM"],
  },
  {
    id: 9,
    label: "Design & Fine Arts",
    color: "from-amber-900/30 to-orange-900/20",
    border: "border-amber-400/30",
    dot: "bg-amber-400",
    items: ["Visual Communication","Animation & Multimedia","Industrial Design","Fashion Design"],
  },
];

/* â”€â”€â”€ Town Planning special reveal page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function TownPlanningReveal({ event, navigate }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#04040a" }}>
      <BackgroundLayer />

      {/* â”€â”€ Deep atmosphere layers â”€â”€ */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Main red bloom top-left */}
        <div className="absolute -top-40 -left-40 w-[900px] h-[900px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(185,28,28,0.25) 0%, transparent 70%)" }} />
        {/* Orange bloom bottom-right */}
        <div className="absolute -bottom-60 -right-60 w-[800px] h-[800px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(194,65,12,0.3) 0%, transparent 70%)" }} />
        {/* Subtle center vignette */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 40%, rgba(4,4,10,0.6) 100%)" }} />
        {/* Fine dot matrix */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,80,80,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Horizontal scan line */}
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.15) 3px,rgba(255,255,255,0.15) 4px)" }} />
      </div>

      <main className="relative z-20 pb-24">

        {/* â”€â”€ Back â”€â”€ */}
        <div className="fixed top-5 left-5 z-30">
          <button onClick={() => navigate(-1)}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300"
            style={{ background: "rgba(4,4,10,0.85)", border: "1px solid rgba(239,68,68,0.25)", backdropFilter: "blur(12px)" }}>
            <ArrowLeft className="w-4 h-4 text-red-400 group-hover:-translate-x-0.5 transition-transform duration-200" />
            <span className="text-red-400 font-black text-[11px] uppercase tracking-[0.2em]">Back</span>
          </button>
        </div>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
             HERO â€” city-grid + giant title
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="relative pt-28 pb-16 px-4 text-center overflow-hidden">

          {/* City-grid blueprint background (hero only) */}
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: "linear-gradient(rgba(239,68,68,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(239,68,68,0.6) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
          {/* Fade edges of grid */}
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 30%, #04040a 85%)" }} />

          {/* PRAGYAA badge */}
          <div className="relative inline-flex items-center gap-3 px-5 py-2.5 mb-10 rounded-full"
            style={{ background: "rgba(185,28,28,0.12)", border: "1px solid rgba(239,68,68,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" style={{ boxShadow: "0 0 6px rgba(239,68,68,0.9)", animation: "pulse 2s infinite" }} />
            <span className="text-red-400 text-[11px] font-black uppercase tracking-[0.35em]">PRAGYAA 2026 &nbsp;Â·&nbsp; CESA-CENFEST</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" style={{ boxShadow: "0 0 6px rgba(239,68,68,0.9)", animation: "pulse 2s infinite" }} />
          </div>

          {/* Giant stacked title */}
          <div className="relative">
            <h1 className="block text-[clamp(4rem,14vw,10rem)] font-black leading-[0.8] tracking-[-0.04em] text-white"
              style={{ textShadow: "0 0 100px rgba(239,68,68,0.5), 0 0 200px rgba(239,68,68,0.2)" }}>
              TOWN
            </h1>
            <h1 className="block text-[clamp(4rem,14vw,10rem)] font-black leading-[0.8] tracking-[-0.04em]"
              style={{ background: "linear-gradient(100deg,#ef4444 0%,#fb923c 40%,#ef4444 80%,#f97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 30px rgba(239,68,68,0.4))" }}>
              PLANNING
            </h1>
            {/* Glow pool beneath title */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 blur-3xl opacity-40 rounded-full"
              style={{ background: "linear-gradient(90deg,#ef4444,#f97316)" }} />
          </div>

          {/* Thin accent line */}
          <div className="relative flex items-center justify-center gap-4 mt-10 mb-8">
            <div className="h-px w-24" style={{ background: "linear-gradient(to right,transparent,rgba(239,68,68,0.7))" }} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500/70">Problem Statement Â· 2026</span>
            <div className="h-px w-24" style={{ background: "linear-gradient(to left,transparent,rgba(239,68,68,0.7))" }} />
          </div>

          {/* Stat pills */}
          <div className="relative flex flex-wrap justify-center gap-2.5">
            {[
              { icon: <Trophy className="w-3.5 h-3.5" />, label: `₹${event.prizePool?.toLocaleString()}`, color: "rgba(234,179,8", b: "rgba(234,179,8,0.3)", t: "#fde047" },
              { icon: <Users className="w-3.5 h-3.5" />, label: `Team of ${event.members}`, color: "rgba(239,68,68", b: "rgba(239,68,68,0.3)", t: "#fca5a5" },
              { icon: <MapPin className="w-3.5 h-3.5" />, label: event.venue, color: "rgba(239,68,68", b: "rgba(239,68,68,0.3)", t: "#fca5a5" },
              { icon: null, label: `Entry ₹${event.entryFee}`, color: "rgba(249,115,22", b: "rgba(249,115,22,0.3)", t: "#fdba74" },
            ].map((p, i) => (
              <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs"
                style={{ background: `${p.color},0.06)`, border: `1px solid ${p.b}`, color: p.t }}>
                {p.icon}{p.label}
              </span>
            ))}
          </div>
        </section>

        {/* â•â•â•â• CONTENT CARDS â•â•â•â• */}
        <div className="max-w-5xl mx-auto px-4 space-y-5">

          {/* â”€â”€ PROBLEM STATEMENT â”€â”€ */}
          <div className="relative rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(239,68,68,0.22)", boxShadow: "0 0 0 1px rgba(239,68,68,0.06), 0 32px 80px rgba(0,0,0,0.7), 0 0 100px rgba(185,28,28,0.08)" }}>
            {/* Blueprint grid inside card */}
            <div className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: "linear-gradient(rgba(239,68,68,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(239,68,68,0.8) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(160deg,rgba(185,28,28,0.08) 0%,rgba(4,4,10,0.97) 60%)" }} />
            {/* Animated top-border glow */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg,transparent 0%,rgba(239,68,68,0.8) 30%,rgba(249,115,22,0.8) 60%,transparent 100%)" }} />

            {/* Header */}
            <div className="relative flex items-center gap-3 px-6 py-4"
              style={{ borderBottom: "1px solid rgba(239,68,68,0.12)", background: "rgba(239,68,68,0.03)" }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg,rgba(239,68,68,0.25),rgba(239,68,68,0.1))", border: "1px solid rgba(239,68,68,0.35)" }}>
                <FileText className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-red-400">Official Problem Statement</p>
                <p className="text-[11px] text-gray-600 mt-0.5">Read carefully â€” this defines your challenge</p>
              </div>
              <div className="ml-auto flex items-center gap-2 px-3 py-1 rounded-full"
                style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" style={{ boxShadow: "0 0 6px rgba(239,68,68,1)" }} />
                <span className="text-[10px] font-black uppercase tracking-widest text-red-400">LIVE</span>
              </div>
            </div>

            {/* Body */}
            <div className="relative p-6 sm:p-8 space-y-5">
              <p className="text-gray-100 text-[15px] leading-7 font-medium">
                A{" "}
                <span className="text-red-300 font-black px-1.5 py-0.5 rounded"
                  style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.2)" }}>
                  538 ACRES
                </span>{" "}
                land has been allocated for the development of a new university campus. Prepare a{" "}
                <span className="text-white font-bold">comprehensive campus master plan</span> for the site demonstrating appropriate land utilization, spatial organization, circulation planning, and integration of functional areas.
              </p>
              <p className="text-gray-400 text-sm sm:text-[14px] leading-6">
                The proposal must respond effectively to the{" "}
                <span className="text-orange-300 font-semibold">irregular site geometry</span> and clearly present{" "}
                <span className="text-orange-300 font-semibold">zoning strategy</span>, movement networks, open space structure, and overall campus organization.
              </p>
              {/* Highlighted sub-block */}
              <div className="rounded-xl p-5"
                style={{ background: "linear-gradient(135deg,rgba(239,68,68,0.06),rgba(249,115,22,0.03))", border: "1px solid rgba(239,68,68,0.14)" }}>
                <p className="text-gray-400 text-[13px] leading-6">
                  All decisions regarding types, number, size, and location of buildings, roads, water tank, water supply network, drainage system and other campus facilities are{" "}
                  <span className="text-white font-bold">left entirely to you</span>. Your design must clearly communicate the planning concept, zoning, and spatial relationships of the campus.
                </p>
              </div>
            </div>
          </div>

          {/* â”€â”€ COMPULSORY BLOCKS â”€â”€ */}
          <div className="relative rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(239,68,68,0.2)", background: "linear-gradient(135deg,rgba(18,4,4,0.98),rgba(8,2,2,0.98))", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg,transparent,rgba(239,68,68,0.6),transparent)" }} />
            <div className="flex items-center gap-3 px-6 py-4"
              style={{ borderBottom: "1px solid rgba(239,68,68,0.1)", background: "rgba(239,68,68,0.03)" }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg,rgba(239,68,68,0.25),rgba(239,68,68,0.1))", border: "1px solid rgba(239,68,68,0.35)" }}>
                <Building2 className="w-4 h-4 text-red-400" />
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-red-400">Compulsory Blocks</p>
              <span className="ml-auto text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full"
                style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171" }}>
                MANDATORY
              </span>
            </div>
            <div className="p-6 grid sm:grid-cols-3 gap-3">
              {[
                { name: "Administrative Building", icon: "🏛️" },
                { name: "Auditorium(s)", icon: "🎭" },
                { name: "Central Library", icon: "📚" },
              ].map((block, i) => (
                <div key={i} className="relative group flex items-center gap-3.5 p-4 rounded-xl overflow-hidden transition-all duration-300"
                  style={{ background: "linear-gradient(135deg,rgba(239,68,68,0.09),rgba(249,115,22,0.04))", border: "1px solid rgba(239,68,68,0.18)" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg,rgba(239,68,68,0.12),rgba(249,115,22,0.06))" }} />
                  <span className="relative text-2xl">{block.icon}</span>
                  <span className="relative text-white font-bold text-sm leading-tight">{block.name}</span>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-500/50" />
                </div>
              ))}
            </div>
          </div>

          {/* â”€â”€ ACADEMIC DEPARTMENTS â”€â”€ */}
          <div className="relative rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(239,68,68,0.18)", background: "linear-gradient(135deg,rgba(12,3,3,0.99),rgba(6,1,1,0.99))", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg,transparent,rgba(249,115,22,0.5),rgba(239,68,68,0.5),transparent)" }} />
            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-4"
              style={{ borderBottom: "1px solid rgba(239,68,68,0.1)", background: "rgba(239,68,68,0.025)" }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg,rgba(249,115,22,0.25),rgba(249,115,22,0.08))", border: "1px solid rgba(249,115,22,0.3)" }}>
                <BookOpen className="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-400">Proposed Academic Departments</p>
                <p className="text-[11px] text-gray-600 mt-0.5">Choose any 4 categories to include in your campus plan</p>
              </div>
              <span className="ml-auto text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full"
                style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)", color: "#fdba74" }}>
                CHOOSE ANY 4
              </span>
            </div>

            <div className="p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {DEPARTMENTS.map((dept) => (
                <div key={dept.id} className="rounded-xl overflow-hidden group transition-all duration-200 hover:scale-[1.015]"
                  style={{ border: `1px solid ${dept.borderHex ?? "rgba(239,68,68,0.18)"}`, background: "rgba(255,255,255,0.015)" }}>
                  {/* Dept header row */}
                  <div className={`flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r ${dept.color}`}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <span className="text-[10px] font-black tabular-nums"
                      style={{ color: "rgba(255,255,255,0.3)" }}>
                      {String(dept.id).padStart(2, "0")}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${dept.dot} shrink-0`}
                      style={{ boxShadow: `0 0 6px currentColor` }} />
                    <span className="text-white font-black text-[12px] leading-tight">{dept.label}</span>
                  </div>
                  {/* Items */}
                  <ul className="px-4 py-3 space-y-1.5">
                    {dept.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px] text-gray-500 leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full ${dept.dot} mt-1.5 shrink-0 opacity-60`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* â”€â”€ IMPORTANT NOTE â”€â”€ */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* animated sweep border */}
            <div className="absolute inset-0 rounded-2xl p-px"
              style={{ background: "linear-gradient(135deg,rgba(239,68,68,0.5),rgba(249,115,22,0.3),rgba(239,68,68,0.5))" }}>
              <div className="w-full h-full rounded-2xl" style={{ background: "rgba(185,28,28,0.06)" }} />
            </div>
            <div className="relative flex gap-4 p-5 sm:p-6">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg,rgba(239,68,68,0.25),rgba(185,28,28,0.15))", border: "1px solid rgba(239,68,68,0.4)", boxShadow: "0 0 20px rgba(239,68,68,0.15)" }}>
                <span className="text-red-300 font-black text-xl leading-none">!</span>
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-red-400 mb-2">Important Note</p>
                <p className="text-gray-300 text-sm sm:text-[14px] leading-6">
                  The campus master plan must be{" "}
                  <span className="text-white font-black">entirely original</span>. Any submission found to be copied or adapted will be{" "}
                  <span className="text-red-400 font-black">immediately disqualified</span>.
                </p>
              </div>
            </div>
          </div>

          {/* â”€â”€ COORDINATORS + REGISTER â”€â”€ */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Coordinators */}
            <div className="rounded-2xl p-5"
              style={{ background: "linear-gradient(135deg,rgba(18,4,4,0.98),rgba(8,2,2,0.98))", border: "1px solid rgba(239,68,68,0.15)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
              <h3 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-red-500 mb-4">
                <Phone className="w-3.5 h-3.5" /> Coordinators
              </h3>
              <div className="space-y-2">
                {event.coordinators.map((c, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl transition-colors duration-200"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-gray-200 text-[13px] font-semibold">{c.name}</span>
                    <a href={`tel:${c.phone}`}
                      className="text-red-400 hover:text-red-300 text-[13px] font-bold tabular-nums transition-colors"
                      style={{ letterSpacing: "0.03em" }}>
                      {c.phone}
                    </a>
                  </div>
                ))}
              </div>
              {event.faculty && (
                <p className="mt-4 text-center text-[11px] text-gray-600">
                  Faculty In-charge: <span className="text-gray-500 font-semibold">{event.faculty}</span>
                </p>
              )}
            </div>

            {/* Register */}
            <div className="flex flex-col gap-3">
              <a href={event.registerLink} target="_blank" rel="noopener noreferrer"
                className="relative flex-1 flex items-center justify-center gap-3 font-black text-white text-base rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
                style={{ minHeight: 80, letterSpacing: "0.12em", background: "linear-gradient(135deg,#ef4444 0%,#dc2626 40%,#b91c1c 100%)", boxShadow: "0 0 50px rgba(239,68,68,0.3), 0 0 120px rgba(185,28,28,0.15), 0 12px 40px rgba(0,0,0,0.7)" }}>
                {/* Shimmer overlay */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.08) 50%,transparent 60%)" }} />
                {/* Top highlight */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)" }} />
                <span className="relative uppercase tracking-[0.15em]">Register Now</span>
                <span className="relative text-xl transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </a>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center rounded-xl py-3"
                  style={{ background: "rgba(234,179,8,0.05)", border: "1px solid rgba(234,179,8,0.15)" }}>
                  <p className="text-[10px] uppercase tracking-widest text-gray-600">Prize Pool</p>
                  <p className="text-yellow-400 font-black text-base mt-0.5">₹{event.prizePool?.toLocaleString()}</p>
                </div>
                <div className="text-center rounded-xl py-3"
                  style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
                  <p className="text-[10px] uppercase tracking-widest text-gray-600">Entry Fee</p>
                  <p className="text-red-400 font-black text-base mt-0.5">₹{event.entryFee}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── PROBLEM STATEMENT PDF ── */}
          <a
            href="/old_Town_Planning_PS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 w-full px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
            style={{ background: "linear-gradient(135deg,rgba(239,68,68,0.07),rgba(249,115,22,0.04))", border: "1px solid rgba(239,68,68,0.25)", boxShadow: "0 8px 30px rgba(0,0,0,0.4)" }}>
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
              style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.35)" }}>
              <FileText className="w-5 h-5 text-red-400" />
            </div>
            <div className="flex-1">
              <p className="text-white font-black text-sm uppercase tracking-[0.1em]">Problem Statement PDF</p>
              <p className="text-gray-500 text-[11px] mt-0.5">Click to open the official Town Planning PS</p>
            </div>
            <span className="text-red-400 font-black text-sm uppercase tracking-widest transition-transform duration-200 group-hover:translate-x-1">
              Open &rarr;
            </span>
          </a>

        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ─── Default event detail page ─────────────────────────────────── */
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

  /* Intercept Town Planning â†’ special page */
  if (event.id === TOWN_PLANNING_ID) {
    return <TownPlanningReveal event={event} navigate={navigate} />;
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

          {/* Problem Statement */}
          {event.problemStatements && event.problemStatements.length > 0 && (
            <div className="bg-gray-900/60 border border-red-500/25 rounded-2xl p-5 sm:p-6">
              <h2 className="text-base sm:text-lg font-bold text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Problem Statement
              </h2>
              <div className="space-y-3">
                {event.problemStatements.map((ps, idx) => (
                  <a
                    key={idx}
                    href={ps.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full px-5 py-4 bg-gray-800/60 border border-red-500/30 rounded-xl hover:border-red-400 hover:bg-gray-800 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/20 border border-red-500/30 group-hover:bg-red-500/30 transition-colors shrink-0">
                      <FileText className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">{ps.label}</p>
                      <p className="text-gray-400 text-xs mt-0.5">Click to open PDF</p>
                    </div>
                    <span className="text-red-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
                      Open â†’
                    </span>
                  </a>
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
            Register Now &rarr;

          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
