import { portfolioData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 ">
      <div className="container mx-auto max-w-4xl " >
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          À propos de moi
        </h2>
        <div className="bg-black/30 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700">
          <p className="text-gray-200 text-lg leading-relaxed">
            {portfolioData.about}
          </p>
        </div>
      </div>
    </section>
  );
}
