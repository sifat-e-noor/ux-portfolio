import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import AIAndUX from "./pages/AIAndUX.jsx";
import CV from "./pages/CV.jsx";
import UxUnite from "./pages/UxUnite.jsx";
import SynesisConvay from "./pages/SynesisConvay.jsx";
import AiReading from "./pages/AiReading.jsx";

function App() {
  const rawBase = import.meta.env.BASE_URL ?? '/';
  const basename = rawBase === '/' ? '/' : rawBase.replace(/\/$/, '');
  
  return (
    <BrowserRouter basename={basename}>
      <NavBar />
      <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<Work />} />
        <Route path="/case-study" element={<CaseStudy />} />
        {/* Dedicated case study pages */}
        <Route path="/case-study/ux-unite" element={<UxUnite />} />
        <Route path="/case-study/synesis-convay" element={<SynesisConvay />} />
        <Route path="/case-study/ai-reading" element={<AiReading />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ai-and-ux" element={<AIAndUX />} />
        <Route path="/cv" element={<CV />} />
        {/* Catch-all: strip leading '/pages' (GH Pages may serve paths under /pages/...) */}
        <Route path="*" element={<StripPagesRedirect />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

function StripPagesRedirect() {
  const loc = useLocation();
  // Remove a single leading '/pages' segment if present
  const cleanedPath = loc.pathname.replace(/^\/pages/, "") || "/";
  return (
    <Navigate to={cleanedPath + (loc.search || "") + (loc.hash || "")} replace />
  );
}
