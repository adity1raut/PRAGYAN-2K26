import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './home';
import About from './About/About';
import EventPage from './Events/EventPage';
import WorkShop from './WorkShop/WorkShop';
import TeamPage from './Team/TeamPage';
import Gallery from './Gallery/Gallery';
import Sponsors from './Sponsors/Sponsors';
import Contact from './Contact/Contact';
import SchedulePage from './Schedule/Schedule';
import Tournament from './Tournament/Tournament';

function App() {
return (
<Router>
<Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="https://docs.google.com/forms/d/e/1FAIpQLSeuim1Qf8rCYCikzYCNzzlZ00DEqoXrOa2HtTvCHl2GOUrlkw/viewform" element={<Navigate to="/" replace />} />

        <Route path="/about" element={<About />} />

        <Route path="/events" element={<EventPage />} />
        <Route path="/workshops" element={<WorkShop />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/schedule" element={<SchedulePage />} />

        <Route path="/team" element={<TeamPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>

);
}

export default App;
