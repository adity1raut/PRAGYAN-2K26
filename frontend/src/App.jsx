import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import EventPage from "./Events/EventPage";
import NotFound from "./Pages/NotFound";
import CursorStarField from "./components/CursorStarField";
import MagneticCursor from "./components/MagneticCursor";
import { CursorProvider } from "./cursorContext.jsx";
import ScrollIndicator from "./ScrollIndicator.jsx";

// lazy imports remain same...

function App() {
  console.log("App rendered");

  const [loading, setLoading] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const hasShownVideo = sessionStorage.getItem("videoShown");
    if (!hasShownVideo) {
      setLoading(true);
      sessionStorage.setItem("videoShown", "true");
    }

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const timer = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
    <MagneticCursor /> 
    <CursorStarField />   
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <video
            autoPlay
            muted
            playsInline
            onEnded={() => setLoading(false)}
            className={`w-full h-full ${
              isMobile ? "object-contain" : "object-cover"
            }`}
          >
            <source src="/pragyaa2.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <CursorProvider>
        <Router>
          <ScrollIndicator />
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<Navigate to="/events/departmental" />} />
            <Route path="/events/:type" element={<EventPage />} />

              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </CursorProvider>
    </>
  );
}

export default App;
