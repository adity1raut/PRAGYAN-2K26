import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add blur effect to main content when menu opens
  useEffect(() => {
    const mainContent = document.querySelector('main') || document.querySelector('#root > div');
    
    if (isMenuOpen) {
      if (mainContent) {
        mainContent.style.filter = 'blur(8px)';
        mainContent.style.transition = 'filter 0.5s ease';
      }
      document.body.style.overflow = 'hidden';
    } else {
      if (mainContent) {
        mainContent.style.filter = 'none';
      }
      document.body.style.overflow = '';
    }

    return () => {
      if (mainContent) {
        mainContent.style.filter = 'none';
      }
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Contact', href: '/contact' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Tournament', href: '/tournament' }
  ];

  const handleNavigation = (href) => {
    setIsMenuOpen(false);
    navigate(href);
  };

  return (
    <>
      <nav className="xl:hidden relative z-50">
        <div className="fixed top-6 right-6 z-[70]">
          {/* Simple Menu Button with Blur Effect */}
          <button
            onClick={toggleMenu}
            className="group relative w-14 h-14 bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400/50"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            
            {/* Simple Hamburger Icon */}
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ease-in-out ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Dropdown Menu Panel - Right Side */}
        <div className={`fixed top-16 right-4 z-[60] w-72 transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        }`}>
          {/* Menu Container with backdrop blur */}
          <div className="bg-gray-900/95 backdrop-blur-xl border border-red-500/30 rounded-2xl shadow-2xl shadow-red-500/20 overflow-hidden">
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-red-500/20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
              <h3 className="text-lg font-bold bg-gradient-to-r from-red-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Navigation
              </h3>
            </div>

            {/* Menu Items */}
            <div className="max-h-[70vh] overflow-y-auto custom-scrollbar py-3 px-3">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-red-600/80 hover:via-orange-600/80 hover:to-rose-600/80 border border-transparent hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/30 group"
                >
                  <span className="font-medium">{item.name}</span>
                  <svg className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Backdrop overlay - Click to close */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-500"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>

      {/* Enhanced Custom CSS for animations */}
      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(239, 68, 68, 0.6) rgba(0, 0, 0, 0.1);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #dc2626, #ea580c, #e11d48);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #b91c1c, #c2410c, #be123c);
          transform: scale(1.1);
        }

        @keyframes slide-in-stagger {
          0% {
            opacity: 0;
            transform: translateX(-30px) translateY(-10px) scale(0.9) rotateY(-10deg);
          }
          50% {
            opacity: 0.7;
            transform: translateX(-10px) translateY(-3px) scale(0.95) rotateY(-3deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1) rotateY(0);
          }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes bounce-delay-1 {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.7; }
          40% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes bounce-delay-2 {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.7; }
          40% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes bounce-delay-3 {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.7; }
          40% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
          }
        }

        .animate-slide-in-stagger {
          animation: slide-in-stagger 0.8s ease-out forwards;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 3s linear infinite;
        }

        .animate-bounce-delay-1 {
          animation: bounce-delay-1 1.4s infinite;
          animation-delay: 0s;
        }

        .animate-bounce-delay-2 {
          animation: bounce-delay-2 1.4s infinite;
          animation-delay: 0.2s;
        }

        .animate-bounce-delay-3 {
          animation: bounce-delay-3 1.4s infinite;
          animation-delay: 0.4s;
        }

        .animate-pulse-ring {
          animation: pulse-ring 1.5s ease-out infinite;
        }

        .menu-item-parent:hover .menu-item-child {
          transform: scale(1.02) translateY(-8px);
        }

        .menu-item-child:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(239, 68, 68, 0.4), 0 0 20px rgba(234, 88, 12, 0.3);
        }

        /* Prevent body scroll when menu is open */
        body.menu-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default MenuBar;