// app/page.js - GARDE CE FICHIER TEL QUEL
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolioData";

export const metadata = {
  title: `${portfolioData.name} - Portfolio`,
  description: `Portfolio professionnel de ${portfolioData.name}`,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
