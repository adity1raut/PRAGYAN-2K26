import React, { useState, useEffect } from "react";
import Clock from "./Clock/Clock";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Director from '../assets/director-manesh-kokare.jpg'
import Dean from '../assets/dean-sb-dethe.jpg'
import fac_Cor from '../assets/Atul_Shine_sir.webp'

export default function MainContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const navigate = useNavigate();

  const eventDetails = {
    date: "Feb 27, 28 & Mar 1, 2026",
    venue: "SGGSIE&T Vishnupuri, Nanded",
    participants: "5000+ Expected",
    events: "30+ Events",
    contact: {
      email: "pragyaa@sggs.ac.in",
      phone: "+91 1234567890",
    },
  };

  const faqs = [
    {
      question: "What are the accommodation arrangements?",
      answer:
        "For boys accommodation facilities are available at the Gurdwara for free. For girls accommodation facilities are available at SGGS girls hostel.",
    },
    {
      question: "What is the exact location of the event?",
      answer:
        "The event will be held at SGGSIE&T Vishnupuri, Nanded, Maharashtra. The campus is easily accessible from the Nanded railway station and bus stand.",
    },
    {
      question: "Is registration fee refundable?",
      answer:
        "No, the registration fee is non-refundable. However, it can be transferred to another participant from the same institution with prior approval.",
    },
    {
      question: "Is there any on the spot registration available?",
      answer:
        "Yes, on-the-spot registration is available for select events, subject to availability. However, pre-registration is highly recommended to ensure your participation.",
    },
    {
      question: "What is arrangement of food?",
      answer:
        "Food arrangements will be available on campus throughout the event. Multiple food stalls and canteens will be operational serving breakfast, lunch, dinner, and snacks at reasonable prices.",
    },
  ];

  const mentors = [
    {
      name: "Manesh Kokare",
      role: "SGGSIE&T ",
      badge: "Director",
      desc: "Leading SGGSIET towards excellence in technical education",
      img: Director,
    },
    {
      name: "Prof.S.B.Dethe",
      role: "Dean",
      badge: "Student Affairs",
      desc: "Fostering innovation and research culture",
      img: Dean,
    },
    {
      name: "Dr.A.S.Shinde",
      role: "Faculty Coordinator",
      badge: "Festival Mentor",
      desc: "Orchestrating PRAGYAA's success year after year",
      img: fac_Cor,
    },
    {
      name: "Prof. Mahendra Sukre",
      role: "Faculty Co-Coordinator",
      badge: "Festival Mentor",
      desc: "Driving technical excellence in computer science",
      img: "/Sukare_Sir.jpeg",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    const sections = document.querySelectorAll("[data-animate-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToMap = () => {
    document.getElementById("map-section")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="relative z-5 flex flex-col items-center justify-start flex-grow min-[780px]:justify-center text-center px-3 min-[480px]:px-0 md:px-6 min-[780px]:px-12 xl:px-16 py-6 sm:py-8 min-[780px]:py-0 w-full">
        <div className="w-full max-w-6xl min-[480px]:max-w-full min-[780px]:max-w-6xl min-[480px]:px-3">
          <div
            className={`text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs min-[780px]:text-[10px] lg:text-xs xl:text-sm tracking-[1.5px] xs:tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] min-[780px]:tracking-[2px] lg:tracking-[2.5px] xl:tracking-[3px] text-red-400 mb-1.5 xs:mb-2 sm:mb-2.5 md:mb-3 min-[780px]:mb-1.5 lg:mb-2 xl:mb-3 uppercase font-medium animate-pulse transition-all duration-500 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Multiverse of innovation
          </div>

          <div
            className={`my-2 xs:my-3 sm:my-3.5 md:my-4 min-[780px]:my-2 lg:my-3 xl:my-4 transition-all duration-700 ease-out delay-100 ${
              isLoaded
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <img
              src="/Pragyaa_main_image.png"
              alt="PRAGYAA 2026"
              className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg min-[780px]:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl mx-auto drop-shadow-2xl"
            />
          </div>

          <p
            className={`text-[10px] xs:text-xs sm:text-sm md:text-base min-[780px]:text-xs lg:text-sm xl:text-base 2xl:text-lg tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] min-[780px]:tracking-[1.5px] lg:tracking-[2px] xl:tracking-[2.5px] 2xl:tracking-[3px] my-2 xs:my-3 sm:my-3.5 md:my-4 min-[780px]:my-1.5 lg:my-2 xl:my-3 uppercase text-gray-300 font-light max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg min-[780px]:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto leading-relaxed transition-all duration-600 ease-out delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            "YOUR IDEAS, OUR MULTIVERSE"
          </p>

          <div
            className={`mt-3 xs:mt-4 sm:mt-5 md:mt-6 min-[780px]:mt-3 lg:mt-4 xl:mt-5 w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md min-[480px]:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto transition-all duration-600 ease-out delay-400 ${
              isLoaded
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-90"
            }`}
          >
            <Clock />
          </div>
        </div>

        {/* Quick Info Cards - Small Screens */}
        <div
          className={`block max-[778px]:block min-[779px]:hidden w-full max-w-md min-[480px]:max-w-full mx-auto mt-8 min-[480px]:px-3 transition-all duration-700 ease-out delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
            <button
              onClick={() => navigate("/schedule")}
              className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg transition-all duration-300 cursor-pointer hover:bg-white/10 hover:border-red-400/50 hover:scale-105 w-full"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1.5 sm:mb-2 mx-auto" />
              <h3 className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                Schedule
              </h3>
              <p className="text-[10px] sm:text-xs text-white font-semibold leading-tight">
                View Events
              </p>
            </button>

            <button
              onClick={scrollToMap}
              className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg transition-all duration-300 cursor-pointer hover:bg-white/10 hover:border-red-400/50 hover:scale-105 w-full"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1.5 sm:mb-2 mx-auto" />
              <h3 className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                Venue
              </h3>
              <p className="text-[10px] sm:text-xs text-white font-semibold leading-tight">
                {eventDetails.venue}
              </p>
            </button>

            <div className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-red-400/50">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1.5 sm:mb-2 mx-auto" />
              <h3 className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                Participants
              </h3>
              <p className="text-[10px] sm:text-xs text-white font-semibold leading-tight">
                {eventDetails.participants}
              </p>
            </div>

            <div className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-red-400/50">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1.5 sm:mb-2 mx-auto" />
              <h3 className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                Events
              </h3>
              <p className="text-[10px] sm:text-xs text-white font-semibold leading-tight">
                {eventDetails.events}
              </p>
            </div>
          </div>

          {/* Prize Pool Section */}
          <div
            id="prize-pool-section"
            data-animate-section
            className={`mt-8 transition-all duration-700 ${
              visibleSections.has("prize-pool-section")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-xl p-1 animate-gradient">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-red-600/20 animate-pulse"></div>
              <div className="relative bg-black/90 rounded-lg p-4 sm:p-6">
                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="flex justify-center">
                    <div className="relative">
                      <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 animate-pulse" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>
                  
                  <h3 className="text-[10px] sm:text-xs text-red-300 uppercase tracking-[2px] sm:tracking-[3px] font-semibold animate-pulse">
                    🎯 Exciting Announcement 🎯
                  </h3>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient leading-tight">
                      PRIZE Pool Worth
                    </p>
                    <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-yellow-200 via-yellow-400 to-red-400 bg-clip-text text-transparent animate-gradient drop-shadow-2xl">
                      ₹5,00,000+
                    </p>
                    <p className="text-sm sm:text-base font-bold text-red-300 uppercase tracking-wider">
                      In Total Rewards! 🏆
                    </p>
                  </div>
                  
                  <div className="pt-1 sm:pt-2">
                    <p className="text-[10px] sm:text-xs text-gray-300 leading-relaxed">
                      The brightest minds will be rewarded with incredible prizes! 
                      <span className="text-yellow-400 font-semibold"> Don't miss this golden opportunity</span> to showcase your innovation!
                    </p>
                  </div>

                  <div className="flex justify-center gap-2 sm:gap-3 pt-1 sm:pt-2">
                    <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce"></div>
                    <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Section */}
          <div
            id="about-section"
            data-animate-section
            className={`mt-8 p-5 bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg transition-all duration-700 ${
              visibleSections.has("about-section")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <h3 className="text-sm text-red-400 uppercase tracking-wider mb-3 font-bold">
              About PRAGYAA 2K26
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed text-left">
              PRAGYAA is a national-level technical fiesta by SGGSIE&T, Nanded,
              where students compete in techno-social events focused on
              technology for societal welfare. With themes highlighting human
              welfare, it offers diverse competitions, from junior science to
              robotics, fostering excellence in technology.
            </p>
          </div>

          {/* VIP Guest Section */}
          <div
            id="vip-section"
            data-animate-section
            className={`mt-8 transition-all duration-700 ${
              visibleSections.has("vip-section")
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-red-500/30 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500">
              <div className="p-4 sm:p-6 border-b border-red-500/30 bg-gradient-to-r from-red-500/20 via-red-600/10 to-transparent">
                <h3 className="text-base sm:text-lg text-red-400 uppercase tracking-wider font-bold text-center">
                  VIP Guest
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 text-center">
                  Distinguished guest gracing our festival
                </p>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-1 tracking-wide">
                    Dr. Tikle Sir
                  </h4>
                </div>
                
                <div className="w-[70%] sm:w-full aspect-[4/5] rounded-xl overflow-hidden border-2 border-red-500/50 shadow-lg shadow-red-500/30 mx-auto">
                  <img
                    src="/Guest/Tiklesh_sir.jpeg"
                    alt="Dr. Tikle Sir"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Our Guiding Lights Section */}
          <div
            id="mentors-section"
            data-animate-section
            className={`mt-8 overflow-hidden transition-all duration-700 ${
              visibleSections.has("mentors-section")
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="p-4 border-b border-pink-500/20 bg-gradient-to-r from-pink-500/10 to-transparent">
              <h3 className="text-sm sm:text-base text-pink-400 uppercase tracking-wider font-bold">
                Our Guiding Lights
              </h3>
              <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1">
                The visionaries who make PRAGYAA legendary
              </p>
            </div>

            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {mentors.map((mentor, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center text-center p-4 bg-gradient-to-br from-gray-900/20 to-gray-800/10 rounded-xl border-2 border-pink-500/30 hover:border-pink-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 hover:bg-gradient-to-br hover:from-gray-800/40 hover:to-gray-700/30 backdrop-blur-xl"
                  >
                    <div className="relative mb-3">
                      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-3 border-pink-500/50 group-hover:border-pink-400 transition-all duration-500 shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/60 group-hover:shadow-2xl">
                        <img
                          src={mentor.img}
                          alt={mentor.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-pink-500/90 group-hover:bg-pink-500 backdrop-blur-sm rounded-full whitespace-nowrap transition-all duration-300 group-hover:scale-110 shadow-md">
                        <p className="text-[7px] sm:text-[8px] text-white font-bold uppercase tracking-wide">
                          {mentor.badge}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1 transition-all duration-300 group-hover:translate-y-[-4px]">
                      <h4 className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight group-hover:text-pink-300 transition-colors duration-300">
                        {mentor.name}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-pink-300 font-semibold group-hover:text-pink-200 transition-colors duration-300">
                        {mentor.role}
                      </p>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-400 leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                        {mentor.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div
            id="faq-section"
            data-animate-section
            className={`mt-8 overflow-hidden transition-all duration-700 ${
              visibleSections.has("faq-section")
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="p-4 border-b border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-transparent">
              <h3 className="text-sm sm:text-base text-blue-400 uppercase tracking-wider font-bold text-center">
                FAQ
              </h3>
              <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1 text-center">
                Frequently Asked Questions
              </p>
            </div>

            <div className="p-4 sm:p-6">
              <div className="space-y-3 max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-xl border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-blue-500/5 transition-all duration-300"
                    >
                      <span className="text-xs sm:text-sm md:text-base font-semibold text-white pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-blue-500/20 bg-blue-500/5">
                        <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div
            id="map-section"
            data-animate-section
            className={`mt-8 mb-6 overflow-hidden transition-all duration-700 ${
              visibleSections.has("map-section")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="p-4 border-b border-green-500/20 bg-gradient-to-r from-green-500/10 to-transparent">
              <h3 className="text-sm sm:text-base text-green-400 uppercase tracking-wider font-bold text-center">
                Our Location
              </h3>
              <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1 text-center">
                Find us on the map
              </p>
            </div>

            <div className="p-4 sm:p-6">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8919886453847!2d77.30847831490152!3d19.15976098704085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7a33d2e8a8d%3A0x4e5f5f5e5f5e5f5e!2sShri%20Guru%20Gobind%20Singhji%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1642000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 sm:h-80 md:h-96"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.google.com/?q=476V+J6R+Shri+Guru+Gobind+Singhji+Institute+of+Engineering+and+Technology,+Guru+Tegh+Bahadurji+Marg,+Vishnupuri,+Nanded,+Maharashtra+431606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/50"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`hidden md:block absolute top-1/4 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 w-0.5 sm:w-1 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-red-400 to-transparent opacity-30 transition-all duration-500 ease-out delay-500 ${
            isLoaded ? "opacity-30 scale-y-100" : "opacity-0 scale-y-0"
          }`}
        ></div>
        <div
          className={`hidden md:block absolute top-1/4 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 w-0.5 sm:w-1 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-red-400 to-transparent opacity-30 transition-all duration-500 ease-out delay-550 ${
            isLoaded ? "opacity-30 scale-y-100" : "opacity-0 scale-y-0"
          }`}
        ></div>

        <div
          className={`absolute inset-0 bg-gradient-radial from-red-500/5 via-transparent to-transparent pointer-events-none transition-opacity duration-800 ease-out delay-150 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </main>

      <footer className="w-full bg-gradient-to-br from-black/40 to-gray-900/30 backdrop-blur-xl border-t border-red-500/30 shadow-2xl mt-auto min-[780px]:hidden">
        <div className="max-w-7xl mx-auto px-5 pt-8 pb-4">
          <div className="text-center mb-4">
            <h2 className="text-xl font-black tracking-wider text-white mb-1">
              PRAGYAA 2026
            </h2>
            <p className="text-[9px] text-gray-400 uppercase tracking-wide">
              National Level Annual Technical Festival
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-4">
            <a
              href="https://www.instagram.com/sggspragyaa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-pink-500/30 hover:border-pink-500 bg-gray-800/50 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-pink-400" />
            </a>
            <a
              href="https://www.linkedin.com/company/pragyaa-sggs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-blue-500/30 hover:border-blue-500 bg-gray-800/50 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
            </a>
            <a
              href="https://x.com/sggspragyaa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cyan-500/30 hover:border-cyan-500 bg-gray-800/50 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-cyan-400" />
            </a>
            <a
              href="https://youtube.com/@pragyaa-sggsiet7271"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-red-500/30 hover:border-red-500 bg-gray-800/50 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-red-400" />
            </a>
          </div>

          <div className="mb-4 pb-4 border-b border-gray-700 max-w-md mx-auto">
            <h3 className="text-xs text-red-400 uppercase tracking-wider mb-3 font-bold text-center">
              Contact Us
            </h3>
            <div className="space-y-2 text-left">
              <a
                href={`mailto:${eventDetails.contact.email}`}
                className="flex items-center gap-2 text-[10px] text-gray-400 hover:text-red-400 transition-colors duration-300 group"
              >
                <Mail className="w-3.5 h-3.5 text-red-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="truncate">{eventDetails.contact.email}</span>
              </a>
              <a
                href={`tel:${eventDetails.contact.phone}`}
                className="flex items-center gap-2 text-[10px] text-gray-400 hover:text-red-400 transition-colors duration-300 group"
              >
                <Phone className="w-3.5 h-3.5 text-red-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>{eventDetails.contact.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-[10px] text-gray-400 group">
                <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                <span className="leading-relaxed">{eventDetails.venue}</span>
              </div>
            </div>
          </div>

          <div className="pt-3 pb-3 border-t border-gray-700">
            <p className="text-[9px] text-gray-500 text-center uppercase tracking-wider">
              © 2026 PRAGYAA | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className="md:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-red-500/50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform duration-300" />
      </button>

      {/* VIP Guest Modal */}
      <div
        id="vip-modal"
        className="hidden fixed inset-0 z-[100] items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={(e) => {
          if (e.target.id === 'vip-modal') {
            const modal = document.getElementById('vip-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
          }
        }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-red-500/50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => {
              const modal = document.getElementById('vip-modal');
              modal.classList.add('hidden');
              modal.classList.remove('flex');
            }}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/40 border border-red-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Close modal"
          >
            <span className="text-white text-xl font-bold">×</span>
          </button>
          
          <div className="relative h-52 sm:h-80 overflow-hidden rounded-t-2xl">
            <img
              src="/Guest/Tiklesh_sir.jpeg"
              alt="Dr. Tikle Sir"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-wide">
                Dr. Tikle Sir
              </h2>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-sm text-red-400 uppercase tracking-wider mb-2 font-bold">About</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Eminent academician and researcher, inspiring generations of engineers with groundbreaking contributions to technical education and innovation
              </p>
            </div>
            
            <div>
              <h3 className="text-sm text-red-400 uppercase tracking-wider mb-2 font-bold">Event Details</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Dr. Tikle Sir will be gracing PRAGYAA 2K26 with his presence, sharing valuable insights and inspiring the next generation of engineers and innovators. His contributions to technical education have shaped countless careers and continue to influence the academic landscape.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">Distinguished Guest</span>
              <span className="px-3 py-1.5 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">Academic Excellence</span>
              <span className="px-3 py-1.5 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">Innovation Leader</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
