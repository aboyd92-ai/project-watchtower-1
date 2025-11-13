import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/Home.jsx'
import Report from './pages/Report.jsx'
import About from './pages/About.jsx'
import { incidents as seedData } from './data/incidents.js'

function App() {
  const [incidents, setIncidents] = useState(seedData)

  function handleAddIncident(newIncident) {
    // newest first
    setIncidents([newIncident, ...incidents])
  }

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home incidents={incidents} />} />
          <Route path="/report" element={<Report onAddIncident={handleAddIncident} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App