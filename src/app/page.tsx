import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import TechOrbit from "@/components/TechOrbit";
import MicroservicesNetwork from "@/components/MicroservicesNetwork";
import Experience from "@/components/Experience";
import SystemDesigns from "@/components/SystemDesigns";
import Projects from "@/components/Projects";
import TechStackInteractive from "@/components/TechStackInteractive";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Metrics />
        
        {/* Tech Orbit Visualization */}
        <section className="section-padding bg-alt">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-title">Technology Ecosystem</h2>
              <div className="mt-2 h-1 w-12 rounded-full accent-bg mx-auto" />
              <p className="section-subtitle mt-4">
                Interactive visualization of my tech stack
              </p>
            </div>
            <TechOrbit />
          </div>
        </section>

        <MicroservicesNetwork />
        <Experience />
        <SystemDesigns />
        <Projects />
        <TechStackInteractive />
        <Blog />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
