import { Routes, Route } from "react-router-dom";
import header from "./components/header.jsx";
import footer from "./components/footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Report from "./pages/Report.jsx";

function App() {
  return (
    <div className="app-container">
      <header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;