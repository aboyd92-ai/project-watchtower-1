import { Routes, Route } from 'react-router-dom'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/Home.jsx'
import Report from './pages/Report.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App