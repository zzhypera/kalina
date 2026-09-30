
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Heritage from "./pages/Heritage";
import LanguageKnowledge from "./pages/LanguageKnowledge";
import CommunityToday from "./pages/CommunityToday";
import DigitalHeritage from "./pages/DigitalHeritage";
import Sources from "./pages/Sources";

const SELECTOR = ".section-title,.info-card,.feature-tile,.gallery-item,.source-card,.timeline-item,.note-box,.quote-panel,.today-panel,.heritage-highlight,.map-preview,.ethics-panel,.acknowledgments,.content-block>div";

function Effects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const t = setTimeout(() => {
      document.querySelectorAll(SELECTOR).forEach((el, i) => {
        el.classList.add("rv");
        el.style.transitionDelay = `${(i % 4) * 80}ms`;
        io.observe(el);
      });
    }, 30);
    const glow = (e) => {
      const c = e.target.closest && e.target.closest(".info-card,.feature-tile");
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", `${e.clientX - r.left}px`);
    };
    window.addEventListener("pointermove", glow);
    return () => { clearTimeout(t); io.disconnect(); window.removeEventListener("pointermove", glow); };
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Effects />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/language" element={<LanguageKnowledge />} />
          <Route path="/today" element={<CommunityToday />} />
          <Route path="/digital-heritage" element={<DigitalHeritage />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
