import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        <Hero />
        <Metrics />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}