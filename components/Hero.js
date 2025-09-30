// components/Hero.js
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { Link } from "react-scroll";
import Image from "next/image";

// Variantes d'animation pour le bouton
const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  tap: { scale: 0.95 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden"
    >
      {/* Image de fond avec balise img normale */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background_home.jpg"
          alt="Background"
          className="w-full h-full object-cover"
          width={1920} // remplace par la vraie largeur de ton image si tu sais
          height={1080} // idem pour la hauteur
        />
        {/* Overlay très léger pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Contenu par-dessus l'image de fond */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Titre principal avec animation */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bonjour, je suis{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Etudiant(e) du Collège LaSalle
          </span>
        </motion.h1>

        {/* Sous-titre avec animation */}
        <motion.p
          className="text-xl md:text-2xl text-gray-100 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Développeur Web | Designer
        </motion.p>

        {/* Description avec animation */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Bienvenue sur mon portfolio professionnel où je présente mes projets
          et compétences
        </motion.p>

        {/* Bouton avec animation Framer Motion */}
        <Link href="Projects" smooth={true} duration={500} offset={-70}>
          <motion.button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transform transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Voir mes projets
          </motion.button>
        </Link>
      </div>

      {/* Indicateur de défilement animé */}
      <motion.div
        className="absolute bottom-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
