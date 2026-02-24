import React, { useState } from "react";
import {
  ArrowLeft,
  Trophy,
  Users,
  MapPin,
  IndianRupee,
  ChevronDown,
  ChevronUp,
  Zap,
  TrendingUp,
  Gavel,
  Star,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

/* ─────────────────────────────────────────────
   Event data
───────────────────────────────────────────── */
const events = [
  {
    id: "startup-expo",
    title: "Startup Expo",
    subtitle: "Showcase Your Vision to the World",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/40",
    glowColor: "shadow-blue-500/20",
    textColor: "text-blue-400",
    venue: "PMC-CAD Road",
    entryFee: 199,
    teamSize: "Up to 4 members",
    registerLink:
      "https://docs.google.com/forms/u/1/d/e/1FAIpQLSecTvhCGS_LQi6Ve6UbWtW7vktkchXH2ON4sh3jomdswLTNew/viewform?usp=dialog",
    description:
      "Startup Expo is your platform to showcase innovative startup ideas to investors, mentors, and industry experts. Set up your stall, present your product or prototype, network with potential collaborators, and receive real-world feedback on your venture.",
    highlights: [
      "Open stall exhibition format",
      "Direct interaction with investors & mentors",
      "Prototype or working model presentation",
      "Networking with industry professionals",
      "Prizes for the best startup ideas",
    ],
    rules: [
      "Teams must set up their stall within the allotted time before judging begins.",
      "Each team must present a startup idea supported by a working prototype, model, or detailed concept.",
      "A poster or presentation board explaining the problem, solution, and impact is mandatory.",
      "Participants must be available at their stall during judging hours for interaction.",
      "Use of offensive content or unsafe demonstrations is strictly prohibited.",
      "Tampering with another team's stall or equipment will lead to disqualification.",
      "All team members must remain the same throughout the event; changes require coordinator approval.",
      "Projects must be original — plagiarism or copied concepts will lead to disqualification.",
      "Registration fee is non-refundable.",
      "Organizers' decision is final and binding.",
    ],
    judging: [
      "Innovation & Originality",
      "Market Viability & Problem-Solution Fit",
      "Prototype Quality & Demonstration",
      "Presentation & Communication",
      "Societal / Commercial Impact",
    ],
  },
  {
    id: "lightning-pitch",
    title: "Lightning Pitch",
    subtitle: "Pitch Your Idea. Win the Room.",
    icon: Zap,
    color: "from-violet-500 to-purple-600",
    borderColor: "border-violet-500/40",
    glowColor: "shadow-violet-500/20",
    textColor: "text-violet-400",
    venue: "Auditorium",
    prizePool: 30000,
    entryFee: 199,
    teamSize: "1 to 5 members",
    registerLink:
      "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdQZTh6BkTzeKKF5ZiH9bpUafWRgDeAYq9pPB3FsVetnk4SyA/viewform?usp=dialog",
    description:
      "Lightning Pitch is a high-energy startup pitching competition where participants present their business idea to a panel of judges within a limited time. The event evaluates innovation, feasibility, market understanding, and execution capability — the same criteria used by real-world investors.",
    highlights: [
      "10 minutes total per team (pitch + Q&A)",
      "Judged by industry experts & entrepreneurs",
      "Prize pool worth ₹30,000+",
      "Open to all — individual or team",
      "Structured 11-slide pitch deck format",
    ],
    rules: [
      "Total time per team: 10 minutes (pitch presentation + 5-minute Q&A with judges).",
      "Team size: 1 to 5 members. All registered members are allowed on stage.",
      "Any team member may speak during the pitch within the total time limit.",
      "One registration is valid for one idea only. Multiple ideas require separate registrations.",
      "Participants must structure their presentation using the 11-slide pitch deck format (see below).",
      "Any form of plagiarism or misrepresentation will result in disqualification.",
      "Participants must strictly follow the time limit — exceeding it may result in penalties.",
      "Judges' decisions are final and binding.",
      "Registration fee is non-refundable.",
      "The organizing committee reserves the right to modify rules if necessary.",
    ],
    pitchDeck: [
      { slide: "Slide 1", title: "Title Slide", desc: "Startup/Idea Name, Team Name, Names of Team Members" },
      { slide: "Slide 2", title: "Problem Statement", desc: "Define the problem, who faces it, and why it matters" },
      { slide: "Slide 3", title: "Proposed Solution", desc: "Your product/service, how it solves the problem, key features" },
      { slide: "Slide 4", title: "Target Market", desc: "Customers, market size estimate, customer segments" },
      { slide: "Slide 5", title: "Product / Service Overview", desc: "Working model / prototype / concept, development stage" },
      { slide: "Slide 6", title: "Business / Revenue Model", desc: "Revenue generation, pricing strategy, revenue streams" },
      { slide: "Slide 7", title: "Competitive Landscape", desc: "Existing solutions, your USP, what makes you different" },
      { slide: "Slide 8", title: "Go-to-Market Strategy", desc: "How to reach customers, marketing approach, traction plans" },
      { slide: "Slide 9", title: "Financial Overview (Optional)", desc: "Revenue projections, expected costs, break-even outlook" },
      { slide: "Slide 10", title: "Team Introduction", desc: "Team members, roles & responsibilities, relevant skills" },
      { slide: "Slide 11", title: "Future Roadmap & Scalability", desc: "Next steps, growth plans, long-term vision" },
    ],
    judging: [
      "Innovation and Originality",
      "Problem–Solution Fit",
      "Market Feasibility",
      "Business Model Clarity",
      "Execution and Scalability",
      "Team Strength",
      "Presentation and Communication Skills",
    ],
    proTips: [
      "Keep slides simple and visually clear",
      "Focus on clarity, not complexity",
      "Practice to manage time effectively",
      "Be confident during Q&A",
      "Judges value logic, feasibility, and honesty",
      "Strong storytelling leaves a lasting impression",
    ],
  },
  {
    id: "ipl-auction",
    title: "IPL Auction",
    subtitle: "Bid Smart. Build Your Dream Team.",
    icon: Gavel,
    color: "from-indigo-500 to-purple-700",
    borderColor: "border-indigo-500/40",
    glowColor: "shadow-indigo-500/20",
    textColor: "text-indigo-400",
    venue: "A4 Hall",
    prizePool: 10000,
    entryFee: 199,
    teamSize: "3 to 5 members (1 franchise)",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdwDsIvzLbtEAF1omUdj9abG15dOlCc4e5pltUWCD6T3MzAQA/viewform",
    description:
      "The IPL Auction is a sub-event of E-Venture 2026 designed to provide participants with practical exposure to decision-making, budgeting, strategy, and team management through a mock IPL-style auction. Open to all, irrespective of branch or prior cricket knowledge.",
    highlights: [
      "Each franchise gets a fixed budget of ₹80 Cr",
      "Bid on A+, A, and B category players",
      "Must buy minimum 15 players per team",
      "Tests negotiation, strategy & financial planning",
      "Open to all — no cricket knowledge required",
    ],
    rules: [
      "Each team of 3–5 members will act as one franchise throughout the event.",
      "Each franchise will be given a fixed auction budget of ₹80 Crore.",
      "No team is allowed to exceed the allocated budget at any point.",
      "Players will be presented one by one; teams bid by raising their paddle or as instructed by the auctioneer.",
      "The highest bidder within the budget limit acquires the player. Once sold, a player cannot be re-auctioned.",
      "A fixed time limit will be given for bidding on each player. If no bid is placed, the player may go unsold.",
      "Each team must purchase a minimum of 15 players.",
      "Squad must include at least: 1 Batsman, 1 Bowler, 1 Wicketkeeper, 1 Allrounder, 1 Uncapped Batsman, 1 Uncapped Bowler, 1 Uncapped Wicketkeeper, 1 Uncapped Allrounder.",
      "Maximum 6 overseas players allowed per squad.",
      "Any form of misbehaviour, unfair practices, or external assistance is strictly prohibited.",
      "Team members must remain the same throughout the event.",
      "The decision of the event coordinators and auctioneer is final and binding.",
    ],
    playerCategories: [
      { cat: "A+ Category", base: "₹2 Crore base price", color: "text-violet-400" },
      { cat: "A Category", base: "₹1 Crore base price", color: "text-blue-300" },
      { cat: "B Category", base: "₹50 Lakh base price", color: "text-purple-400" },
    ],
    judging: [
      "Effective budget utilization",
      "Team balance and player selection strategy",
      "Completion of squad requirements",
      "Overall decision-making and justification",
    ],
  },
];

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */
function RulesAccordion({ title, items, defaultOpen = false, textColor = "text-violet-400" }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-violet-500/20 rounded-xl overflow-hidden backdrop-blur-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-violet-900/20 to-blue-900/20 hover:from-violet-900/40 hover:to-blue-900/40 transition-all duration-200 text-left"
      >
        <span className={`font-bold text-sm tracking-wide ${textColor}`}>{title}</span>
        <div className={`p-1 rounded-lg bg-white/5 ${textColor}`}>
          {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </div>
      </button>
      {open && (
        <ul className="px-5 py-4 space-y-2.5 bg-gradient-to-b from-black/30 to-black/10">
          {items.map((item, i) => (
            <li key={i} className="flex gap-3 text-xs text-gray-300 leading-relaxed">
              <span className={`font-black text-xs ${textColor} flex-shrink-0 w-4 text-right`}>{i + 1}.</span>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function EventCard({ event }) {
  const Icon = event.icon;
  return (
    <div
      id={event.id}
      className={`relative rounded-3xl overflow-hidden border-2 ${event.borderColor} shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_60px_-10px] ${event.glowColor}`}
      style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a0a1a 100%)' }}
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${event.color}`} />

      {/* Card header */}
      <div className={`relative px-6 sm:px-8 pt-6 pb-5 bg-gradient-to-br from-white/[0.04] to-transparent`}>
        {/* Faint glow blob behind icon */}
        <div className={`absolute top-4 left-6 w-20 h-20 rounded-full bg-gradient-to-br ${event.color} opacity-10 blur-2xl pointer-events-none`} />

        <div className="flex items-start gap-5">
          <div className={`relative p-3.5 rounded-2xl bg-gradient-to-br ${event.color} shadow-lg flex-shrink-0`}>
            <Icon className="w-7 h-7 text-white drop-shadow" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className={`text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
              {event.title}
            </h2>
            <p className="text-blue-200/60 text-sm mt-1 font-medium italic">{event.subtitle}</p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          {[
            { icon: <MapPin className={`w-4 h-4 ${event.textColor}`} />, label: "Venue", value: event.venue },
            { icon: <Users className={`w-4 h-4 ${event.textColor}`} />, label: "Team", value: event.teamSize },
            { icon: <IndianRupee className={`w-4 h-4 ${event.textColor}`} />, label: "Entry Fee", value: `₹${event.entryFee}` },
            event.prizePool
              ? { icon: <Trophy className="w-4 h-4 text-violet-300" />, label: "Prize Pool", value: `₹${event.prizePool.toLocaleString()}`, highlight: true }
              : null,
          ].filter(Boolean).map((stat, i) => (
            <div key={i} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border ${
              stat.highlight ? 'border-violet-500/30 bg-violet-500/10' : 'border-white/8 bg-white/5'
            }`}>
              <div className="flex-shrink-0">{stat.icon}</div>
              <div>
                <p className="text-[9px] text-blue-300/50 uppercase tracking-widest font-semibold">{stat.label}</p>
                <p className={`text-xs font-bold leading-tight ${
                  stat.highlight ? 'text-violet-300' : 'text-white'
                }`}>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className={`mx-6 sm:mx-8 h-px bg-gradient-to-r from-transparent ${event.color.replace('from-','via-').split(' ')[0].replace('via-','via-')} to-transparent opacity-30`} />

      {/* Card body */}
      <div className="px-6 sm:px-8 py-6 space-y-6">
        {/* Description */}
        <p className="text-sm text-blue-100/70 leading-relaxed">{event.description}</p>

        {/* Highlights */}
        <div>
          <h4 className={`text-[11px] font-black ${event.textColor} uppercase tracking-[0.2em] mb-3 flex items-center gap-2`}>
            <span className={`inline-block w-4 h-0.5 bg-gradient-to-r ${event.color} rounded-full`} />
            Event Highlights
          </h4>
          <ul className="space-y-2">
            {event.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className={`w-4 h-4 ${event.textColor} flex-shrink-0 mt-0.5`} />
                <span className="text-sm text-blue-100/80">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IPL Player Categories */}
        {event.playerCategories && (
          <div>
            <h4 className={`text-[11px] font-black ${event.textColor} uppercase tracking-[0.2em] mb-3 flex items-center gap-2`}>
              <span className={`inline-block w-4 h-0.5 bg-gradient-to-r ${event.color} rounded-full`} />
              Player Categories
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {event.playerCategories.map((pc, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-4 text-center border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02]`}
                >
                  <p className={`font-black text-sm ${pc.color}`}>{pc.cat}</p>
                  <p className="text-xs text-blue-200/50 mt-1 font-medium">{pc.base}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightning Pitch Deck */}
        {event.pitchDeck && (
          <div>
            <h4 className={`text-[11px] font-black ${event.textColor} uppercase tracking-[0.2em] mb-3 flex items-center gap-2`}>
              <span className={`inline-block w-4 h-0.5 bg-gradient-to-r ${event.color} rounded-full`} />
              Pitch Deck Structure (11 Slides)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {event.pitchDeck.map((s, i) => (
                <div
                  key={i}
                  className="flex gap-3 bg-white/[0.04] border border-white/8 rounded-xl p-3.5 hover:bg-white/[0.07] transition-colors"
                >
                  <span className={`text-[11px] font-black ${event.textColor} flex-shrink-0 w-14 pt-0.5`}>
                    {s.slide}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white/90">{s.title}</p>
                    <p className="text-[11px] text-blue-200/50 mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rules */}
        <RulesAccordion
          title="⚖ Rules & Regulations"
          items={event.rules}
          defaultOpen={false}
          textColor={event.textColor}
        />

        {/* Judging Criteria */}
        <div>
          <h4 className={`text-[11px] font-black ${event.textColor} uppercase tracking-[0.2em] mb-3 flex items-center gap-2`}>
            <span className={`inline-block w-4 h-0.5 bg-gradient-to-r ${event.color} rounded-full`} />
            Judging Criteria
          </h4>
          <div className="flex flex-wrap gap-2">
            {event.judging.map((j, i) => (
              <span
                key={i}
                className={`px-3.5 py-1.5 text-[11px] font-semibold rounded-full border-2 ${event.borderColor} ${event.textColor} bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default`}
              >
                {j}
              </span>
            ))}
          </div>
        </div>

        {/* Pro Tips (Lightning Pitch only) */}
        {event.proTips && (
          <div className="bg-gradient-to-br from-violet-900/25 to-purple-900/15 border border-violet-500/30 rounded-2xl p-5">
            <h4 className="text-[11px] font-black text-violet-300 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <Star className="w-4 h-4 text-violet-400" /> Pro Tips for Participants
            </h4>
            <ul className="space-y-2">
              {event.proTips.map((tip, i) => (
                <li key={i} className="text-sm text-blue-100/70 flex items-start gap-2.5">
                  <span className="text-violet-400 font-black flex-shrink-0 mt-0.5">›</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Register Button */}
        <a
          href={event.registerLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl font-black text-sm text-white bg-gradient-to-r ${event.color} hover:brightness-110 transition-all duration-300 hover:scale-[1.02] shadow-lg overflow-hidden`}
        >
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative">Register Now</span>
          <ExternalLink className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Bottom gradient bar */}
      <div className={`h-0.5 w-full bg-gradient-to-r ${event.color} opacity-40`} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function EVenturePage() {
  const navigate = useNavigate();

  const scrollToEvent = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #04040f 0%, #080820 40%, #060618 70%, #04040f 100%)' }}>
      <BackgroundLayer />

      {/* Global ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-700/8 rounded-full blur-[90px]" />
      </div>

      <main className="flex-grow relative z-10">
        {/* Back Button */}
        <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 px-4 py-2 bg-[#080820]/90 backdrop-blur-xl border border-violet-500/40 rounded-xl hover:border-violet-400 hover:bg-violet-500/10 transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-900/20"
          >
            <ArrowLeft className="w-4 h-4 text-violet-400 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-violet-300 font-bold text-xs sm:text-sm">Home</span>
          </button>
        </div>

        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 pb-10 px-4 text-center relative">
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/Pragyaa_main_image.png"
              alt="PRAGYAA 2026"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>

          {/* E-CELL badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-violet-500/50 bg-gradient-to-r from-violet-900/30 to-blue-900/30 backdrop-blur-sm mb-5 shadow-lg shadow-violet-900/20">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-lg shadow-violet-400/50"></span>
            <span className="text-violet-300 text-xs font-bold uppercase tracking-[0.15em]">
              Pragyaa × E-CELL presents
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-4 leading-none">
            E&#8209;<span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              VENTURE
            </span>
          </h1>

          <p className="text-blue-200/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-4">
            A dynamic entrepreneurship track at PRAGYAA&apos;26 — celebrating innovation,
            strategy, and business thinking across three thrilling events.
          </p>

          {/* Date badge */}
          <div className="inline-flex items-center gap-2.5 mt-2 px-5 py-2 bg-gradient-to-r from-blue-900/30 to-violet-900/30 border border-blue-500/30 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-blue-300 text-xs font-semibold tracking-wide">
              Feb 27–28 & Mar 1, 2026 · SGGSIE&T, Nanded
            </span>
          </div>

          {/* Divider */}
          <div className="relative mt-10 mx-auto w-64">
            <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm" />
          </div>
        </section>

        {/* Quick Nav */}
        <section className="px-4 pb-10">
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
            {events.map((ev) => {
              const Icon = ev.icon;
              return (
                <button
                  key={ev.id}
                  onClick={() => scrollToEvent(ev.id)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border-2 ${ev.borderColor} bg-gradient-to-r from-white/[0.04] to-white/[0.02] hover:from-white/10 hover:to-white/5 transition-all duration-200 hover:scale-105 shadow-sm backdrop-blur-sm`}
                >
                  <Icon className={`w-4 h-4 ${ev.textColor}`} />
                  <span className={`text-sm font-bold ${ev.textColor}`}>{ev.title}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* About E-Venture */}
        <section className="px-4 pb-12">
          <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden border border-violet-500/20 p-6 sm:p-8" style={{ background: 'linear-gradient(135deg, rgba(30,10,80,0.4) 0%, rgba(10,10,40,0.7) 50%, rgba(20,5,60,0.4) 100%)' }}>
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="relative text-xl sm:text-2xl font-black text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-7 bg-gradient-to-b from-blue-400 to-violet-600 rounded-full shadow-lg shadow-violet-500/50"></span>
              <span className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">About E-Venture</span>
            </h2>
            <p className="relative text-blue-100/70 text-sm sm:text-base leading-relaxed mb-6">
              E-Venture is the entrepreneurship wing of PRAGYAA, the national-level socio-technical
              fiesta of SGGSIE&T, Nanded — powered by E-CELL. It brings together innovators,
              strategists, and future entrepreneurs under one roof with three exciting events:
              the <span className="text-blue-400 font-bold">Startup Expo</span>, the high-energy{" "}
              <span className="text-violet-400 font-bold">Lightning Pitch</span>, and the strategic{" "}
              <span className="text-indigo-400 font-bold">IPL Auction</span>. Whether you have a startup
              idea, a business model, or a knack for strategy, there&apos;s a stage for you here.
            </p>
            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Events", value: "3", color: "from-blue-500 to-blue-700" },
                { label: "Prize Pool", value: "₹40,000+", color: "from-violet-500 to-violet-700" },
                { label: "Date", value: "Feb 27 – Mar 1", color: "from-purple-500 to-purple-700" },
                { label: "Coordinator", value: "Mr. Darshan Singh", color: "from-indigo-500 to-indigo-700" },
              ].map((s, i) => (
                <div key={i} className="text-center p-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                  <p className={`text-base sm:text-lg font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>{s.value}</p>
                  <p className="text-[10px] text-blue-300/50 uppercase tracking-widest font-semibold mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General Rules */}
        <section className="px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-[0.15em] mb-6 text-center">
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                General Rules
              </span>
              <span className="text-blue-200/40 font-medium text-sm block mt-0.5 tracking-wide normal-case">Applicable to all E-Venture events</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Registration fee is non-refundable.",
                "Rules may be changed without prior notice — check the website regularly.",
                "Results will be declared and announced on the day of the event.",
                "Prizes will be distributed on the third day (March 1, 2026).",
                "Decision of the organizers shall be considered final and binding.",
                "Number of winners is subject to change.",
                "Participants must follow all safety instructions during the event.",
                "Any misconduct or disrespectful behaviour may lead to disqualification.",
              ].map((rule, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start rounded-xl px-4 py-3.5 border border-violet-500/15 bg-gradient-to-r from-violet-900/10 to-blue-900/10 hover:from-violet-900/20 hover:to-blue-900/20 transition-colors"
                >
                  <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-black text-[10px] flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-sm text-blue-100/70 leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Cards */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-3xl sm:text-4xl font-black text-center uppercase tracking-[0.12em]">
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                Events
              </span>
            </h2>
            {events.map((ev) => (
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="px-4 pb-12">
          <div className="max-w-3xl mx-auto text-center relative rounded-3xl overflow-hidden border border-violet-500/20 p-7 sm:p-10" style={{ background: 'linear-gradient(135deg, rgba(20,10,60,0.6) 0%, rgba(8,8,30,0.8) 50%, rgba(20,10,60,0.6) 100%)' }}>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-violet-500/10 rounded-full blur-2xl" />
            </div>
            <h2 className="relative text-lg font-black bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent mb-5 uppercase tracking-widest">Event Coordinator</h2>
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <p className="text-white font-bold text-base">Mr. Darshan Singh</p>
                <a
                  href="tel:9322199877"
                  className="text-violet-400 font-semibold text-sm hover:text-violet-300 transition-colors mt-0.5 block"
                >
                  +91 9322199877
                </a>
              </div>
              <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-violet-500/40 to-transparent"></div>
              <div className="text-center">
                <p className="text-blue-300/50 text-[10px] uppercase tracking-widest font-bold mb-1">Faculty In-charge</p>
                <p className="text-white font-bold text-base">Dr. Milind Bhalerao</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="relative z-20 w-full">
        <Footer />
      </div>
    </div>
  );
}
