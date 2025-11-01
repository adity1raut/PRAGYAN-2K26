import React, { useState } from "react";
import { ArrowLeft, Calendar, Clock, MapPin, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from "../Footer/Footer"

const SchedulePage = () => {
  const navigate = useNavigate()
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    { id: 1, date: "Feb 21, 2025", day: "Day 1" },
    { id: 2, date: "Feb 22, 2025", day: "Day 2" },
    { id: 3, date: "Feb 23, 2025", day: "Day 3" },
  ];

  const eventSchedules = {
    1: [
      { id: 1, name: "Opening/Inauguration Event", organizer: "Team Pragyaa", timing: "10 AM - 11.30 AM", venue: "Auditorium" },
      { id: 2, name: "Python For AIML", organizer: "ITSA", timing: "1 PM - 4 PM", venue: "IT Dept" },
      { id: 3, name: "CAD & CATIA", organizer: "PESA", timing: "1 PM - 4 PM", venue: "Prod Dept" },
      { id: 4, name: "Surveying/Resume Building", organizer: "CESA", timing: "1 PM– 4 PM", venue: "Civil Dept" },
      { id: 5, name: "RC Car racing(round 1)", organizer: "PRAGYAA", timing: "2 PM onwards", venue: "Ground" },
      { id: 6, name: "Valorant", organizer: "PRAGYAA", timing: "5 PM onwards", venue: "Coming soon" },
      { id: 7, name: "Paper Presentation (Domain1)", organizer: "PRAGYAA", timing: "5 PM onwards", venue: "A4Hall/Seminar Hall" },
      { id: 8, name: "Math – e - magic", organizer: "BMC", timing: "12 noon – 4 PM", venue: "AB6" },
      { id: 9, name: "Voltage Voyage", organizer: "EESA", timing: "2 PM - 5 PM", venue: "Electrical Dept" },
      { id: 10, name: "Tex Quiz", organizer: "TESA", timing: "2 PM – 5 PM", venue: "Textile Dept" },
      { id: 11, name: "Bridge Building", organizer: "CESA", timing: "3 PM - 6.30 PM", venue: "Civil Dept" },
      { id: 12, name: "Coding Contest", organizer: "ITSA", timing: "5 PM onwards", venue: "IT Dept" },
      { id: 13, name: "BGMI", organizer: "MESA", timing: "5 PM onwards", venue: "IT Dept" },
      { id: 14, name: "Gear Based Puzzle", organizer: "MESA", timing: "5 PM onwards", venue: "Mech Dept" },
      { id: 15, name: "IPL auction", organizer: "PRAGYAA", timing: "7:30 PM Onwards", venue: "Coming soon" },
    ],

    2: [
      { id: 1, name: "Python For AIML", organizer: "PRAGYAA", timing: "10 AM - 2 PM", venue: "IT Dept" },
      { id: 2, name: "CAD & CATIA", organizer: "PESA", timing: "10 AM - 2 PM", venue: "Prod Dept" },
      { id: 3, name: "Surveying/Resume Building", organizer: "CESA", timing: "12 AM - 2PM", venue: "Civil Dept" },
      { id: 4, name: "RC Car Racing(finals)", organizer: "PRAGYAA", timing: "2PM – onwards", venue: "Ground" },
      { id: 5, name: "Pick & Place(round1)", organizer: "PRAGYAA", timing: "2PM – 6PM", venue: "PMC" },
      { id: 6, name: "Boat Racing", organizer: "PRAGYAA", timing: "2PM – 6PM", venue: "PMC" },
      { id: 7, name: "Paper Presentation (Domain2)", organizer: "ELITE", timing: "2 PM - 5 PM", venue: "A4Hall/Seminar Hall" },
      { id: 8, name: "Chem Crafter", organizer: "CHESA", timing: "10 AM onwards", venue: "Chem Dept" },
      { id: 9, name: "Town Planning", organizer: "CESA", timing: "5 PM – 8PM", venue: "Civil Dept" },
      { id: 10, name: "CAD WAR(civil)", organizer: "CESA", timing: "1PM – 4PM", venue: "Civil Dept" },
      { id: 11, name: "Style your Partner", organizer: "TESA", timing: "10 AM onwards", venue: "Textile Dept" },
      { id: 12, name: "Shark Tank", organizer: "PESA", timing: "10 AM – 2PM", venue: "A4 Hall" },
      { id: 13, name: "Astro Quest", organizer: "ANTRIX", timing: "10 AM – 2PM", venue: "A3 Hall" },
      { id: 14, name: "Bridge Buster Challenge", organizer: "HACKIT", timing: "5 PM onwards", venue: "CSE Dept" },
      { id: 15, name: "Mega Quiz", organizer: "ORATORY", timing: "4 PM onwards", venue: "PMC" },
      { id: 16, name: "Tech Quest", organizer: "ELITE", timing: "10 AM onwards", venue: "EXTC Dept" },
      { id: 17, name: "Free fire", organizer: "PRAGYAA", timing: "5 PM onwards", venue: "Coming soon" },
      { id: 18, name: "Chess Programmer", organizer: "PRAGYAA", timing: "5PM – 7PM", venue: "Coming soon" },
    ],

    3: [
      { id: 1, name: "Data Science Workshop", organizer: "PRAGYAA", timing: "12PM - 4 PM", venue: "ML lab CSE/IT" },
      { id: 2, name: "Junior Scientist", organizer: "PRAGYAA", timing: "10 AM Onwards", venue: "Coming soon" },
      { id: 3, name: "Mock Placement", organizer: "PRAGYAA", timing: "10 AM onwards", venue: "Coming soon" },
      { id: 4, name: "Float a Boat", organizer: "CESA", timing: "10 AM onwards", venue: "Civil Dept" },
      { id: 5, name: "Bridge Building Testing", organizer: "CESA", timing: "10 AM onwards", venue: "Civil Dept" },
      { id: 6, name: "CAD WAR", organizer: "MESA", timing: "1 PM - 4 PM", venue: "Mech Dept" },
      { id: 7, name: "Wire Whispering", organizer: "EESA", timing: "1 PM - 4 PM", venue: "Electrical Dept" },
      { id: 8, name: "Chess", organizer: "PRAGYAA", timing: "10 AM onwards", venue: "Coming soon" },
      { id: 9, name: "Chem Crafter", organizer: "CHESA", timing: "10 AM onwards", venue: "Chem Dept" },
      { id: 10, name: "COD", organizer: "PRAGYAA", timing: "10 AM onwards", venue: "Coming soon" },
      { id: 11, name: "Treasure Hunt", organizer: "PRAGYAA", timing: "1 PM – onwards", venue: "Coming soon" },
      { id: 12, name: "Draw your design", organizer: "TESA", timing: "5 PM onwards", venue: "Coming soon" },
      { id: 13, name: "Cultural Events", organizer: "PRAGYAA", timing: "5 PM onwards", venue: "Coming soon" },
    ],
  };

  const handleDayClick = (dayId) => {
    setActiveDay(dayId);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const getOrganizerColor = (organizer) => {
    switch (organizer) {
      case "PRAGYAA": return "text-blue-600 border-blue-600 bg-blue-50"
      case "CESA": return "text-green-600 border-green-600 bg-green-50"
      case "MESA": return "text-purple-600 border-purple-600 bg-purple-50"
      case "EESA": return "text-orange-600 border-orange-600 bg-orange-50"
      case "ITSA": return "text-red-600 border-red-600 bg-red-50"
      case "TESA": return "text-pink-600 border-pink-600 bg-pink-50"
      case "PESA": return "text-indigo-600 border-indigo-600 bg-indigo-50"
      default: return "text-gray-600 border-gray-600 bg-gray-50"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200 text-white font-medium"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          
          <h1 className="text-5xl font-bold text-center mb-4">Event Schedule</h1>
          <p className="text-xl text-center text-blue-100">
            Complete schedule of all events happening during Pragyaa 2025
          </p>
        </div>
      </div>

      {/* Day Selection */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center gap-4 mb-8">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => handleDayClick(day.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex flex-col items-center min-w-[120px] ${
                activeDay === day.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="text-sm">{day.day}</span>
              <span className="text-xs opacity-80">{day.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Events Schedule */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Calendar size={24} />
              {days.find((day) => day.id === activeDay)?.day} - {days.find((day) => day.id === activeDay)?.date}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {eventSchedules[activeDay].map((event) => (
              <div
                key={event.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600"
              >
                {/* Event Number */}
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    #{event.id}
                  </span>
                  {/* Organizer Badge */}
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getOrganizerColor(event.organizer)}`}>
                    {event.organizer}
                  </div>
                </div>

                {/* Event Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {event.name}
                </h3>

                {/* Event Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>{event.timing}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <span>Organized by {event.organizer}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Event Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">
              {eventSchedules[activeDay].length}
            </h3>
            <p className="text-gray-600 font-medium">Events Today</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-green-600 mb-2">
              {[...new Set(eventSchedules[activeDay].map(event => event.organizer))].length}
            </h3>
            <p className="text-gray-600 font-medium">Organizing Teams</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">
              {[...new Set(eventSchedules[activeDay].map(event => event.venue))].length}
            </h3>
            <p className="text-gray-600 font-medium">Venues</p>
          </div>
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default SchedulePage;