import React, { useState, useEffect } from "react";
import { Youtube, Instagram, Facebook, Linkedin } from "lucide-react";

export default function SocialMedia() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/sggspragyaa/",
      glowColor: "hover:shadow-pink-500/50",
      bgGradient:
        "hover:from-purple-500 hover:via-pink-500 hover:to-orange-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/sggspragyaa",
      glowColor: "hover:shadow-blue-500/50",
      bgGradient: "hover:from-blue-600 hover:to-blue-700",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/pragyaa-sggs/",
      glowColor: "hover:shadow-blue-600/50",
      bgGradient: "hover:from-blue-600 hover:to-blue-800",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@pragyaa-sggsiet7271",
      glowColor: "hover:shadow-red-500/50",
      bgGradient: "hover:from-red-500 hover:to-red-600",
    },
  ];

  return (
    <div className="bg-gradient-to-br flex items-center justify-center p-2">
      <div className="flex gap-3 justify-center">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <div
              key={social.name}
              className={`relative transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-12 opacity-0 scale-75"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group relative transition-all duration-500 block"
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${social.glowColor} shadow-2xl scale-150`}
                ></div>

                {/* Icon container */}
                <div
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 ${social.bgGradient} p-3 rounded-2xl border border-gray-700 group-hover:border-transparent transition-all duration-500 group-hover:scale-110 shadow-lg transform`}
                >
                  {/* Shine overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon */}
                  <IconComponent className="relative w-6 h-6 drop-shadow-lg transition-colors duration-500 text-gray-300 group-hover:text-white" />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
