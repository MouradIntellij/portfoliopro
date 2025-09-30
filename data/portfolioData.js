export const portfolioData = {
  name: "Étudiant(e) du Collège LaSalle",
  title: "Développeur Web | Designer",
  about:
    "Je suis passionné par la création d'expériences web exceptionnelles. Avec une expertise en développement frontend et un œil pour le design, je m'efforce de créer des interfaces à la fois belles et fonctionnelles.",
  email: "etudiant.e@collegelasalle.com",
  adress: "2000 Rue Sainte-Catherine O, Montréal, QC H3H 2T2",
  Year: "1959",
  phone: "2000 Rue Sainte-Catherine O, Montréal, QC H3H 2T2   depuis 1959  (514) 939-2006",
  social: {
    github: "https://github.com/MouradIntellij/portfoliopro",
    linkedin: "https://www.linkedin.com/in/mourad-maths-b0904632b/",
    twitter: "https://twitter.com/votreusername",
  },
  projects: [
    {
      id: 1,
      title: "Application E-commerce",
      description:
        "Une application e-commerce complète avec panier, paiement et administration.",
      image: "/images/Projet1.jpg",

      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      sourceCode: "https://github.com/votreusername/projet1",
      liveDemo: "https://votresite.com/projet1",
    },
    {
      id: 2,
      title: "Plateforme de Blog",
      description:
        "Une plateforme de blog moderne avec système de commentaires et likes.",
      image: "/images/Projet2.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Firebase"],
      sourceCode: "https://github.com/votreusername/projet2",
      liveDemo: "https://votresite.com/projet2",
    },
    {
      id: 3,
      title: "Application Météo",
      description:
        "Application météo avec prévisions sur 7 jours et géolocalisation.",
      image: "/images/Projet3.jpg",
      tags: ["React", "API", "Geolocation"],
      sourceCode: "https://github.com/votreusername/projet3",
      liveDemo: "https://votresite.com/projet3",
    },
  ],
  skills: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Design Responsive", level: 90 },
  ],
};
