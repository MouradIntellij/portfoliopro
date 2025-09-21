import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Bonjour, je suis Mourad Sehboub
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Développeur Web | Designer
      </p>
      <p className="text-center max-w-2xl mb-12 text-gray-00">
        Bienvenue sur mon portfolio professionnel où je présente mes projets et
        compétences
      </p>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        Voir mes projets
      </button>
    </section>
  );
}
