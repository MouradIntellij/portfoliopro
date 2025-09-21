import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Mes compétences
        </h2>
        <div className="space-y-6">
          {portfolioData.skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-gray-700"
            >
              <div className="flex justify-between mb-4">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-blue-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
