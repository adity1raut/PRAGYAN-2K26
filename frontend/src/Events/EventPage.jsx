import React, { useState, useEffect } from "react";
import eventData from "./eventData";
import NeonEventCards from "./eventCards";
import BackgroundLayer from "../components/BackgroundLayer";
import Footer from "../Footer/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function EventPage() {
  const navigate = useNavigate();
  const { category, department } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("Flagship");
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Handle URL parameters on mount and when they change
  useEffect(() => {
    if (category) {
      // Find the matching category key (case-insensitive)
      const categoryKey = Object.keys(eventData).find(
        key => key.toLowerCase() === category.toLowerCase()
      );
      if (categoryKey) {
        setSelectedCategory(categoryKey);
      }
    } else {
      // Default to Flagship if no category in URL
      setSelectedCategory("Flagship");
    }
    if (department) {
      setSelectedDepartment(decodeURIComponent(department));
    }
  }, [category, department]);

  const currentEvents = eventData[selectedCategory]?.events || [];

  // Get all unique departments from Departmental category
  const getDepartments = () => {
    if (selectedCategory !== "Departmental") return [];
    
    const deptMap = {};
    currentEvents.forEach((event) => {
      const deptName = event.title.split("(")[0].trim();
      
      if (!deptMap[deptName]) {
        deptMap[deptName] = {
          name: deptName,
          events: [],
          totalPrize: 0,
          eventCount: 0,
        };
      }
      
      deptMap[deptName].events.push(event);
      deptMap[deptName].totalPrize += event.prizePool || 0;
      deptMap[deptName].eventCount += 1;
    });

    return Object.values(deptMap);
  };

  // Get all unique creative event types from Creative category
  const getCreativeEvents = () => {
    if (selectedCategory !== "creative") return [];
    
    const creativeMap = {};
    currentEvents.forEach((event) => {
      const eventName = event.title.split("(")[0].trim();
      
      if (!creativeMap[eventName]) {
        creativeMap[eventName] = {
          name: eventName,
          events: [],
          totalPrize: 0,
          eventCount: 0,
        };
      }
      
      creativeMap[eventName].events.push(event);
      creativeMap[eventName].totalPrize += event.prizePool || 0;
      creativeMap[eventName].eventCount += 1;
    });

    return Object.values(creativeMap);
  };

  const departments = getDepartments();
  const creativeEvents = getCreativeEvents();

  // Get events for selected department or creative event
  const getSelectedEvents = () => {
    if (!selectedDepartment) return [];
    return currentEvents.filter((event) => 
      event.title.startsWith(selectedDepartment)
    );
  };

  const selectedEvents = getSelectedEvents();

  // Handle category change with URL update
  const handleCategoryChange = (key) => {
    setSelectedCategory(key);
    setSelectedDepartment(null);
    navigate(`/events/${key.toLowerCase()}`);
  };

  // Handle department selection with URL update
  const handleDepartmentSelect = (deptName) => {
    setSelectedDepartment(deptName);
    navigate(`/events/departmental/${encodeURIComponent(deptName)}`);
  };

  // Handle creative event selection with URL update
  const handleCreativeEventSelect = (eventName) => {
    setSelectedDepartment(eventName);
    navigate(`/events/creative/${encodeURIComponent(eventName)}`);
  };

  // Handle back to departments
  const handleBackToDepartments = () => {
    setSelectedDepartment(null);
    navigate("/events/departmental");
  };

  // Handle back to creative events
  const handleBackToCreativeEvents = () => {
    setSelectedDepartment(null);
    navigate("/events/creative");
  };

  // For non-departmental categories
  const uniqueTitles = Array.from(
    new Set(currentEvents.map((e) => e.title.split("(")[0].trim()))
  );

  return (
    <>
    

      <div className="relative min-h-screen bg-gray-950 overflow-x-hidden">
          <BackgroundLayer />
        <main className="relative z-20">
          {/* Back Button */}
          <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-30">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-900/80 backdrop-blur border-2 border-red-500/40 rounded-xl sm:rounded-2xl hover:border-red-400 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
              <span className="text-red-400 font-semibold text-xs sm:text-sm">Home</span>
            </button>
          </div>

          {/* Title */}
          <section className="pt-14 sm:pt-16 md:pt-20 pb-2 sm:pb-3 px-4 text-center">
            {/* Main Image */}
            <div className="my-2 sm:my-3">
              <img
                src="/Pragyaa_main_image.png"
                alt="PRAGYAA 2026"
                className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto drop-shadow-2xl"
              />
            </div>
          </section>

          <section className="py-2 sm:py-3 px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-4 sm:mb-6">
              Events & Competitions
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-2 sm:mt-4 max-w-3xl mx-auto px-4">
              Explore flagship events, workshops, and competitions.
            </p>
            <div className="w-20 sm:w-28 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full animate-pulse mt-4 sm:mt-6"></div>
          </section>

          {/* Mega Rulebook Banner */}
          <section className="px-4 pb-2 sm:pb-4">
            <div className="max-w-4xl mx-auto">
              <a
                href="/PRAGYAA_2026_Rulebook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full bg-gradient-to-r from-red-950/60 via-gray-900/80 to-red-950/60 border-2 border-red-500/40 hover:border-red-400 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 shadow-xl shadow-red-500/10 hover:shadow-red-500/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                {/* Icon */}
                <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-500/30">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                {/* Text */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider group-hover:text-red-300 transition-colors">
                      PRAGYAA 2026 — Mega Rulebook
                    </h3>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-bold uppercase tracking-widest w-fit mx-auto sm:mx-0">
                      Official
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                    Official prize pool &amp; rules for all PRAGYAA 2026 events — dates, venues, team limits, and prize calculation breakdown across all categories.
                  </p>
                </div>
                {/* CTA */}
                <div className="shrink-0 flex items-center gap-2 text-red-400 group-hover:text-red-300 font-semibold text-sm transition-colors">
                  <span>Open PDF</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </a>
            </div>
          </section>

          {/* Category Filters */}
          <section className="px-4 py-6 sm:py-8">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 max-w-4xl mx-auto">
              {Object.entries(eventData).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 ${
                    selectedCategory === key
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/50 scale-105"
                      : "bg-gray-900/50 text-gray-400 border border-gray-800 hover:text-red-400 hover:border-red-500/50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Departmental Events - Show Departments First */}
            {selectedCategory === "Departmental" && !selectedDepartment && (
              <div className="max-w-6xl mx-auto px-2 sm:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  {departments.map((dept, index) => (
                    <div
                      key={index}
                      onClick={() => handleDepartmentSelect(dept.name)}
                      className="group bg-gradient-to-br from-red-900/30 via-gray-900/50 to-red-900/30 border-2 border-red-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10 hover:shadow-red-500/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-red-500/60"
                    >
                      {/* Department Header */}
                      <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 border-b-2 border-red-500/30 px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                            {dept.name}
                          </h3>
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      {/* Department Stats */}
                      <div className="p-4 sm:p-6">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Total Events</span>
                            <span className="text-white font-bold text-lg">{dept.eventCount}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Total Prize Pool</span>
                            <span className="text-yellow-400 font-bold text-lg">₹{dept.totalPrize.toLocaleString()}</span>
                          </div>
                        </div>

                        {/* View Events Button */}
                        <div className="mt-4 pt-4 border-t border-gray-800">
                          <div className="text-center text-sm text-red-400 group-hover:text-red-300 font-semibold">
                            Click to view events →
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Departmental Events - Show Selected Department Events */}
            {selectedCategory === "Departmental" && selectedDepartment && (
              <div className="max-w-6xl mx-auto px-2 sm:px-0">
                {/* Back to Departments Button */}
                <div className="mb-4 sm:mb-6">
                  <button
                    onClick={handleBackToDepartments}
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-900/80 backdrop-blur border-2 border-red-500/40 rounded-xl hover:border-red-400 transition-all duration-300 hover:scale-105"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                    <span className="text-red-400 font-semibold text-xs sm:text-sm">Back to Departments</span>
                  </button>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 tracking-wider px-4">
                  {selectedDepartment}
                </h2>
                <NeonEventCards events={selectedEvents} />
              </div>
            )}

            {/* Creative Events - Show Event Types First */}
            {selectedCategory === "creative" && !selectedDepartment && (
              <div className="max-w-6xl mx-auto px-2 sm:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  {creativeEvents.map((event, index) => (
                    <div
                      key={index}
                      onClick={() => handleCreativeEventSelect(event.name)}
                      className="group bg-gradient-to-br from-red-900/30 via-gray-900/50 to-red-900/30 border-2 border-red-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10 hover:shadow-red-500/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-red-500/60"
                    >
                      {/* Event Header */}
                      <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 border-b-2 border-red-500/30 px-6 py-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                            {event.name}
                          </h3>
                          <svg className="w-6 h-6 text-red-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      {/* Event Stats */}
                      <div className="p-6">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Total Events</span>
                            <span className="text-white font-bold text-lg">{event.eventCount}</span>
                          </div>
                          {event.totalPrize > 0 && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Total Prize Pool</span>
                              <span className="text-yellow-400 font-bold text-lg">₹{event.totalPrize.toLocaleString()}</span>
                            </div>
                          )}
                        </div>

                        {/* View Events Button */}
                        <div className="mt-4 pt-4 border-t border-gray-800">
                          <div className="text-center text-sm text-red-400 group-hover:text-red-300 font-semibold">
                            Click to view details →
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Creative Events - Show Selected Event */}
            {selectedCategory === "creative" && selectedDepartment && (
              <div className="max-w-6xl mx-auto px-2 sm:px-0">
                {/* Back to Creative Events Button */}
                <div className="mb-4 sm:mb-6">
                  <button
                    onClick={handleBackToCreativeEvents}
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-900/80 backdrop-blur border-2 border-red-500/40 rounded-xl hover:border-red-400 transition-all duration-300 hover:scale-105"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                    <span className="text-red-400 font-semibold text-xs sm:text-sm">Back to Creative Events</span>
                  </button>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 tracking-wider px-4">
                  {selectedDepartment}
                </h2>
                <NeonEventCards events={selectedEvents} />
              </div>
            )}

            {/* Flagship Events Display */}
            {selectedCategory === "Flagship" && (
              <div className="max-w-6xl mx-auto px-2 sm:px-0">
                <NeonEventCards events={currentEvents} />
              </div>
            )}

            {/* E-Venture Events Display */}
            {selectedCategory === "eVenture" && (
              <div className="max-w-6xl mx-auto px-2 sm:px-0">
                <div className="mb-8 text-center">
                  <p className="text-sm sm:text-base text-yellow-400 font-semibold tracking-wider uppercase">
                    Pragyaa × E-CELL presents
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 tracking-wider">
                    E-Venture
                  </h2>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 mx-auto rounded-full mt-3 animate-pulse"></div>
                </div>
                <NeonEventCards events={currentEvents} />
              </div>
            )}

            {/* Non-Departmental/Creative/Flagship/eVenture Events Display */}
            {selectedCategory !== "Departmental" && selectedCategory !== "creative" && selectedCategory !== "Flagship" && selectedCategory !== "eVenture" && (
              <div className="max-w-6xl mx-auto px-2 sm:px-0">
                {uniqueTitles.map((title) => {
                  const filtered = currentEvents.filter((e) =>
                    e.title.startsWith(title)
                  );

                  return (
                    <section key={title} className="mb-8 sm:mb-12">
                      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-wider px-4">
                        {title}
                      </h2>
                      <NeonEventCards events={filtered} />
                    </section>
                  );
                })}
              </div>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
