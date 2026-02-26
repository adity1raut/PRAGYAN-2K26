import React from "react";
import { useNavigate } from "react-router-dom";

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="relative z-10 bg-black text-white">
      <div className="max-w-7xl mx-auto py-6 md:py-8 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/Footer.png"
              alt="PRAGYAA 2025"
              className="h-32 w-32 md:h-40 md:w-40 mb-3 object-contain"
            />
            <p className="text-sm text-gray-400 text-center md:text-left max-w-xs">
              National Level Annual Technical Festival of SGGSIET
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-red-500 text-center md:text-left">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2 items-center md:items-start">
              <button
                onClick={() => handleNavigation("/events")}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Events
              </button>
              <button
                onClick={() => handleNavigation("/schedule")}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Schedule
              </button>
              <button
                onClick={() => handleNavigation("/sponsors")}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Sponsors
              </button>
              <button
                onClick={() => handleNavigation("/about")}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation("/register")}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Register
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </button>
              <button
                onClick={() => handleNavigation("/gallery")}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Gallery
              </button>
              <a
                href="https://forms.gle/mmZ8L4KkBBF6F8DJ8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Accommodation
              </a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-red-500 text-center md:text-left">
              Contact Us
            </h3>

            <address className="not-italic text-sm text-gray-400 text-center md:text-left space-y-1">
              <p>
                Shri Guru Gobind Singhji Institute of Engineering and Technology
              </p>
              <p>Vishnupuri, Nanded - 431606</p>
              <p>Maharashtra, India</p>
            </address>

            <div className="space-y-1 text-center md:text-left">
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+912462228342"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  +91 9834797489
                </a>
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:pragyaa@sggs.ac.in"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  pragyaa@sggs.ac.in
                </a>
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Student Coordinator:</span>{" "}
                <a
                  href="mailto:technicalsecretary@sggs.ac.in"
                  className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                >
                  technicalsecretary@sggs.ac.in
                </a>
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://www.sggs.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  www.sggs.ac.in
                </a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-3 pt-2">
              <a
                href="https://www.instagram.com/sggspragyaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition-all duration-300"
              >
                <InstagramIcon className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href="https://www.linkedin.com/company/pragyaa-sggs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300"
              >
                <LinkedinIcon className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href="https://www.facebook.com/sggspragyaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Like us on Facebook"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-700 transition-all duration-300"
              >
                <FacebookIcon className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href="https://x.com/sggspragyaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X (Twitter)"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-400 transition-all duration-300"
              >
                <XIcon className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href="https://youtube.com/@pragyaa-sggsiet7271"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-red-600 transition-all duration-300"
              >
                <YoutubeIcon className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-4 mt-6 border-t border-gray-800 text-center space-y-2">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-400">
            <button
              onClick={() => handleNavigation("/privacy-policy")}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handleNavigation("/terms-of-service")}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => handleNavigation("/sitemap")}
              className="hover:text-white transition-colors"
            >
              Sitemap
            </button>
          </div>
          <p className="text-xs text-gray-400">
            Copyright © PRAGYAA 2026 All rights reserved | This website is made
            by{" "}
            <button
              onClick={() => handleNavigation("/team")}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              PRAGYAA 2026 WEB TEAM
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
