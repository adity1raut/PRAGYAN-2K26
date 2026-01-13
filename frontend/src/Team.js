import React, { useState } from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";

export default function TeamCard() {
  const [isHovered, setIsHovered] = useState(false);

  const teamMember = {
    name: "Alex Chen",
    role: "Lead Developer",
    bio: "Full-stack engineer specializing in cutting-edge web technologies and AI integration.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    socials: {
      linkedin: "#",
      instagram: "#",
      email: "alex@example.com",
    },
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div
        className="relative w-full max-w-sm group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glowing background effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-cyan-500 rounded-lg blur-lg opacity-25 group-hover:opacity-75 transition duration-500 animate-pulse"></div>

        {/* Main card container */}
        <div className="relative bg-black border border-cyan-500/30 rounded-lg overflow-hidden">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none z-20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-purple-600 to-cyan-400"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 via-purple-600 to-cyan-400"></div>
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
          </div>

          <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none z-20">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-red-600 via-purple-600 to-cyan-400"></div>
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-red-600 via-purple-600 to-cyan-400"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
          </div>

          <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none z-20">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-purple-600 to-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-red-600 via-purple-600 to-cyan-400"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
          </div>

          <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none z-20">
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-red-600 via-purple-600 to-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-red-600 via-purple-600 to-cyan-400"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>
          </div>

          {/* Animated scan line */}
          <div
            className={`absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-1000 ${isHovered ? "top-full" : "top-0"}`}
          ></div>

          {/* Image section */}
          <div className="relative h-80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-black z-10"></div>
            <img
              src={teamMember.image}
              alt={teamMember.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Glitch effect overlay */}
            <div
              className={`absolute inset-0 bg-cyan-500/10 mix-blend-overlay transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
            ></div>
          </div>

          {/* Content section */}
          <div className="relative p-6 bg-gradient-to-b from-black via-gray-900 to-black">
            {/* Data line decoration */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

            {/* Name with glow */}
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 mb-1 tracking-wide">
              {teamMember.name}
            </h3>

            {/* Role with animated underline */}
            <div className="relative inline-block mb-6">
              <p className="text-cyan-400 font-bold text-sm tracking-widest uppercase drop-shadow-lg">
                {teamMember.role}
              </p>
              <div
                className={`h-0.5 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 transition-all duration-500 ${isHovered ? "w-full shadow-lg shadow-cyan-500/50" : "w-0"}`}
              ></div>
            </div>

            {/* Bio */}

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-red-600 via-purple-600 to-cyan-500 mb-6 opacity-40 shadow-lg shadow-purple-500/30"></div>

            {/* Social links */}
            <div className="flex gap-4 justify-center">
              <a
                href={teamMember.socials.linkedin}
                className="w-12 h-12 rounded border border-cyan-500/30 bg-black/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 group/icon"
              >
                <Linkedin className="w-6 h-6 group-hover/icon:scale-110 transition-transform" />
              </a>
              <a
                href={teamMember.socials.instagram}
                className="w-12 h-12 rounded border border-purple-500/30 bg-black/50 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 hover:text-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 group/icon"
              >
                <Instagram className="w-6 h-6 group-hover/icon:scale-110 transition-transform" />
              </a>
              <a
                href={`mailto:${teamMember.socials.email}`}
                className="w-12 h-12 rounded border border-red-500/30 bg-black/50 flex items-center justify-center text-red-400 hover:bg-red-500/20 hover:border-red-400 hover:text-red-300 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 group/icon"
              >
                <Mail className="w-6 h-6 group-hover/icon:scale-110 transition-transform" />
              </a>
            </div>

            {/* Tech dots decoration */}
            <div className="absolute bottom-4 right-4 flex gap-1">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
              <div
                className="w-1 h-1 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1 h-1 bg-red-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div
          className={`absolute -top-4 -right-4 w-2 h-2 bg-cyan-400 rounded-full transition-all duration-1000 ${isHovered ? "opacity-100 translate-x-2 -translate-y-2" : "opacity-0"}`}
        ></div>
        <div
          className={`absolute -bottom-4 -left-4 w-2 h-2 bg-purple-500 rounded-full transition-all duration-1000 delay-100 ${isHovered ? "opacity-100 -translate-x-2 translate-y-2" : "opacity-0"}`}
        ></div>
      </div>
    </div>
  );
}
