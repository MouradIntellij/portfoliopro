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
      {/* Background LaSalle avec animation de zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src="/LaSalle_Background.jpg"
          alt="Collège LaSalle Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient pour améliorer la lisibilité */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Particules flottantes décoratives */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Contenu par-dessus l'image de fond */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Titre principal avec animation */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
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
          className="text-xl md:text-2xl text-gray-100 mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Développeur Web | Designer
        </motion.p>

        {/* Description avec animation */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Bienvenue sur mon portfolio professionnel où je présente mes projets
          et compétences
        </motion.p>

        {/* Bouton avec animation Framer Motion */}
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
        >
          <motion.button
            className="relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-2xl transform transition-all duration-300 cursor-pointer overflow-hidden group"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* Effet de brillance au survol */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative">Voir mes projets</span>
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
        <motion.div
          className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
