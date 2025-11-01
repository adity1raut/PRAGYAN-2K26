import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-6 md:py-8 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="https://res.cloudinary.com/dg6qtpags/image/upload/v1738229669/your-cloudinary-folder-name/hw47imc72mac5hf32mfm.png" 
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
              <a 
                href="#guestbox" 
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Events
              </a>
              <a 
                href="#schedule" 
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Schedule
              </a>
              <a 
                href="#sponsors" 
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Sponsors
              </a>
              <a 
                href="#about" 
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
              <a 
                href="#register" 
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Register
              </a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-red-500 text-center md:text-left">
              Contact Us
            </h3>
            
            <address className="not-italic text-sm text-gray-400 text-center md:text-left space-y-1">
              <p>SGGSIET Campus</p>
              <p>Nanded, Maharashtra</p>
            </address>
            
            <div className="space-y-1 text-center md:text-left">
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:pragyaa@sggs.ac.in"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  pragyaa@sggs.ac.in
                </a>
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Student Coordinator:</span>{' '}
                <a
                  href="mailto:technicalsecretary@sggs.ac.in"
                  className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                >
                  technicalsecretary@sggs.ac.in
                </a>
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-3 pt-2">
              <a
                href="https://www.instagram.com/sggspragyaa?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href="https://www.linkedin.com/company/pragyaa-sggs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href="https://www.facebook.com/sggspragyaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-700 transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href="https://x.com/sggspragyaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-400 transition-all duration-300"
              >
                <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href="https://youtube.com/@pragyaa-sggsiet7271?si=KAPSRifoQcXFM7bd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-red-600 transition-all duration-300"
              >
                <Youtube className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-4 mt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-400">
            Copyright © PRAGYAA 2025 All rights reserved | This website is made by PRAGYAA 2025 WEB TEAM.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;