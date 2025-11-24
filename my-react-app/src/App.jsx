import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home.jsx';
import Report from './pages/Report.jsx';
import About from './pages/About.jsx';
import { incidents as seedData } from './data/incidents.js';
import ReportedIncidents from './pages/ReportedIncidents.jsx';
import './App.css';

function App() {
  
  const sampleIncidents = seedData;

  // 👉 2) User-submitted reports: used ONLY on Report page
  const [reports, setReports] = useState([]);

  
  function handleAddIncident(newIncident) {
    setReports((prev) => [newIncident, ...prev]); // newest first
  }

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          
          <Route path="/" element={<Home incidents={sampleIncidents} />} />

          
          <Route
            path="/report"
            element={
              <Report
                onAddIncident={handleAddIncident}
                reports={reports}
              />
            }
          />

          <Route path="/about" element={<About />} />

          {/* Reported incidents page */}
          <Route path="/reported-incidents" element={<ReportedIncidents incidents={reports} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;