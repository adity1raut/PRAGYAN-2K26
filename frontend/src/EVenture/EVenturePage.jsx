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
    color: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-500/40",
    glowColor: "shadow-emerald-500/20",
    textColor: "text-emerald-400",
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
    color: "from-yellow-500 to-orange-500",
    borderColor: "border-yellow-500/40",
    glowColor: "shadow-yellow-500/20",
    textColor: "text-yellow-400",
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
    color: "from-blue-500 to-purple-600",
    borderColor: "border-blue-500/40",
    glowColor: "shadow-blue-500/20",
    textColor: "text-blue-400",
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
      { cat: "A+ Category", base: "₹2 Crore base price", color: "text-yellow-400" },
      { cat: "A Category", base: "₹1 Crore base price", color: "text-gray-300" },
      { cat: "B Category", base: "₹50 Lakh base price", color: "text-orange-400" },
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
function RulesAccordion({ title, items, defaultOpen = false, textColor = "text-red-400" }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors duration-200 text-left"
      >
        <span className={`font-semibold text-sm ${textColor}`}>{title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <ul className="px-4 py-3 space-y-2 bg-black/20">
          {items.map((item, i) => (
            <li key={i} className="flex gap-2 text-xs text-gray-300 leading-relaxed">
              <span className={`font-bold ${textColor} flex-shrink-0`}>{i + 1}.</span>
              <span>{item}</span>
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
      className={`bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-800/90 border-2 ${event.borderColor} rounded-2xl overflow-hidden shadow-2xl ${event.glowColor} hover:shadow-lg transition-all duration-500`}
    >
      {/* Card header */}
      <div className={`bg-gradient-to-r ${event.color} p-0.5`}>
        <div className="bg-gray-950/95 px-5 sm:px-6 py-5 sm:py-6">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${event.color} flex-shrink-0`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className={`text-2xl sm:text-3xl font-black ${event.textColor} tracking-wide`}>
                {event.title}
              </h2>
              <p className="text-gray-400 text-sm mt-0.5 font-medium">{event.subtitle}</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Venue</p>
                <p className="text-xs text-white font-semibold leading-tight">{event.venue}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Team</p>
                <p className="text-xs text-white font-semibold leading-tight">{event.teamSize}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IndianRupee className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Entry Fee</p>
                <p className="text-xs text-white font-semibold">₹{event.entryFee}</p>
              </div>
            </div>
            {event.prizePool && (
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Prize Pool</p>
                  <p className="text-xs text-yellow-400 font-bold">₹{event.prizePool.toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="px-5 sm:px-6 py-5 space-y-5">
        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed">{event.description}</p>

        {/* Highlights */}
        <div>
          <h4 className={`text-xs font-bold ${event.textColor} uppercase tracking-widest mb-3`}>
            Event Highlights
          </h4>
          <ul className="space-y-2">
            {event.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className={`w-4 h-4 ${event.textColor} flex-shrink-0 mt-0.5`} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IPL Player Categories */}
        {event.playerCategories && (
          <div>
            <h4 className={`text-xs font-bold ${event.textColor} uppercase tracking-widest mb-3`}>
              Player Categories
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {event.playerCategories.map((pc, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 text-center"
                >
                  <p className={`font-bold text-sm ${pc.color}`}>{pc.cat}</p>
                  <p className="text-xs text-gray-400 mt-1">{pc.base}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightning Pitch Deck */}
        {event.pitchDeck && (
          <div>
            <h4 className={`text-xs font-bold ${event.textColor} uppercase tracking-widest mb-3`}>
              Pitch Deck Structure (11 Slides)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {event.pitchDeck.map((s, i) => (
                <div
                  key={i}
                  className="flex gap-3 bg-white/5 border border-white/10 rounded-xl p-3"
                >
                  <span className={`text-xs font-black ${event.textColor} flex-shrink-0 w-14`}>
                    {s.slide}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white">{s.title}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rules */}
        <RulesAccordion
          title="Rules & Regulations"
          items={event.rules}
          defaultOpen={false}
          textColor={event.textColor}
        />

        {/* Judging Criteria */}
        <div>
          <h4 className={`text-xs font-bold ${event.textColor} uppercase tracking-widest mb-3`}>
            Judging Criteria
          </h4>
          <div className="flex flex-wrap gap-2">
            {event.judging.map((j, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs font-medium rounded-full border ${event.borderColor} ${event.textColor} bg-white/5`}
              >
                {j}
              </span>
            ))}
          </div>
        </div>

        {/* Pro Tips (Lightning Pitch only) */}
        {event.proTips && (
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4">
            <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Star className="w-4 h-4" /> Pro Tips for Participants
            </h4>
            <ul className="space-y-1">
              {event.proTips.map((tip, i) => (
                <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                  <span className="text-yellow-400 flex-shrink-0">›</span>
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
          className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r ${event.color} hover:opacity-90 transition-all duration-300 hover:scale-[1.02] shadow-lg`}
        >
          Register Now
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
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
    <div className="min-h-screen bg-black flex flex-col relative overflow-x-hidden">
      <BackgroundLayer />

      <main className="flex-grow relative z-10">
        {/* Back Button */}
        <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 px-4 py-2 bg-gray-950/90 backdrop-blur-xl border-2 border-red-500/40 rounded-xl hover:border-red-500/80 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 text-red-500 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-red-400 font-semibold text-xs sm:text-sm">Home</span>
          </button>
        </div>

        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 pb-8 px-4 text-center relative">
          {/* Main Image */}
          <div className="mb-4">
            <img
              src="/Pragyaa_main_image.png"
              alt="PRAGYAA 2026"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>

          {/* E-CELL badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
              Pragyaa × E-CELL presents
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-3">
            E-<span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
              VENTURE
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-2">
            A dynamic entrepreneurship track at PRAGYAA&apos;26 that celebrates innovation,
            strategy, and business thinking. Three unique events — one platform to launch your
            entrepreneurial journey.
          </p>

          {/* Date badge */}
          <div className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
            <span className="text-red-400 text-xs font-semibold">
              Feb 27–28 & Mar 1, 2026 · SGGSIE&T, Nanded
            </span>
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mt-8"></div>
        </section>

        {/* Quick Nav */}
        <section className="px-4 pb-8">
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
            {events.map((ev) => {
              const Icon = ev.icon;
              return (
                <button
                  key={ev.id}
                  onClick={() => scrollToEvent(ev.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 ${ev.borderColor} bg-white/5 hover:bg-white/10 transition-all duration-200 hover:scale-105`}
                >
                  <Icon className={`w-4 h-4 ${ev.textColor}`} />
                  <span className={`text-sm font-semibold ${ev.textColor}`}>{ev.title}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* About E-Venture */}
        <section className="px-4 pb-10">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-red-900/30 via-gray-900/60 to-red-900/30 border border-red-500/20 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-3">
              <span className="w-1 h-6 bg-red-500 rounded-full"></span>
              About E-Venture
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              E-Venture is the entrepreneurship wing of PRAGYAA, the national-level socio-technical
              fiesta of SGGSIE&T, Nanded — powered by E-CELL. It brings together innovators,
              strategists, and future entrepreneurs under one roof with three exciting events:
              the <span className="text-emerald-400 font-semibold">Startup Expo</span>, the high-energy{" "}
              <span className="text-yellow-400 font-semibold">Lightning Pitch</span>, and the strategic{" "}
              <span className="text-blue-400 font-semibold">IPL Auction</span>. Whether you have a startup
              idea, a business model, or a knack for strategy, there&apos;s a stage for you here.
            </p>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Events", value: "3" },
                { label: "Prize Pool", value: "₹40,000+" },
                { label: "Date", value: "Feb 27 – Mar 1" },
                { label: "Coordinator", value: "Mr. Darshan Singh" },
              ].map((s, i) => (
                <div key={i} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-lg sm:text-xl font-black text-white">{s.value}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General Rules */}
        <section className="px-4 pb-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg sm:text-xl font-bold text-red-400 uppercase tracking-widest mb-4 text-center">
              General Rules (All E-Venture Events)
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
                  className="flex gap-3 items-start bg-white/5 border border-red-500/20 rounded-xl px-4 py-3"
                >
                  <span className="text-red-500 font-bold text-sm flex-shrink-0">{i + 1}.</span>
                  <p className="text-sm text-gray-300 leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Cards */}
        <section className="px-4 pb-14">
          <div className="max-w-5xl mx-auto space-y-10">
            <h2 className="text-2xl sm:text-3xl font-black text-center text-white uppercase tracking-widest mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
                Events
              </span>
            </h2>
            {events.map((ev) => (
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="px-4 pb-10">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-red-500/20 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white mb-4">Event Coordinator</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-white font-semibold">Mr. Darshan Singh</p>
                <a
                  href="tel:9322199877"
                  className="text-red-400 text-sm hover:text-red-300 transition-colors"
                >
                  +91 9322199877
                </a>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-700"></div>
              <div className="text-center">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Faculty In-charge</p>
                <p className="text-white font-semibold">Dr. Milind Bhalerao</p>
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
