// components/Hero.js
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

// Variantes d'animation pour le bouton
const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 25px rgba(6, 182, 212, 0.6)",
    transition: {
      duration: 0.3,
    },
  },
  tap: { scale: 0.95 },
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Effet parallax sur le background
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Suivre la position de la souris pour l'effet parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden"
    >
      {/* Background avec effet parallax et zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: backgroundY,
          scale: 1.1,
        }}
      >
        <motion.div
          className="w-full h-full"
          style={{
            background: `url('/images/LaSalle_Background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          initial={{ scale: 1.3 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Overlay gradient animé */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => {
          // Valeurs fixes basées sur l'index pour éviter l'erreur d'hydratation
          const size = ((i * 7) % 6) + 2;
          const left = (i * 13) % 100;
          const top = (i * 17) % 100;
          const xMovement = ((i * 5) % 30) - 15;
          const duration = 4 + ((i * 3) % 3);
          const delay = (i * 0.3) % 3;
          const blur = ((i * 5) % 10) + 5;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                background: `radial-gradient(circle, ${
                  i % 3 === 0
                    ? "rgba(6, 182, 212, 0.4)"
                    : i % 3 === 1
                    ? "rgba(59, 130, 246, 0.4)"
                    : "rgba(147, 51, 234, 0.3)"
                }, transparent)`,
                boxShadow: `0 0 ${blur}px ${
                  i % 3 === 0
                    ? "rgba(6, 182, 212, 0.5)"
                    : i % 3 === 1
                    ? "rgba(59, 130, 246, 0.5)"
                    : "rgba(147, 51, 234, 0.4)"
                }`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, xMovement, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Lignes lumineuses qui traversent l'écran */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-5 pointer-events-none"
          style={{
            width: "200%",
            top: `${20 + i * 30}%`,
            left: "-50%",
          }}
          animate={{
            x: ["0%", "50%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        />
      ))}

      {/* Contenu principal avec effet de fade et mouvement */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        style={{ opacity }}
      >
        {/* Titre principal avec animation */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <span className="text-white">Bonjour, je suis</span>{" "}
          <motion.span
            className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Etudiant(e) du Collège LaSalle
          </motion.span>
        </motion.h1>

        {/* Sous-titre avec animation */}
        <motion.p
          className="text-xl md:text-2xl font-semibold mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-white">Développeur Web</span>
          <span className="text-cyan-300 mx-2">|</span>
          <span className="text-white">Designer</span>
        </motion.p>

        {/* Description avec animation */}
        <motion.p
          className="text-base md:text-lg text-white font-medium mb-10 max-w-2xl mx-auto drop-shadow-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Bienvenue sur mon portfolio professionnel où je présente mes projets
          et compétences
        </motion.p>

        {/* Boutons avec animations avancées */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
        >
          {/* Bouton Voir mes projets */}
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
          >
            <motion.button
              className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-2xl cursor-pointer overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Effet de brillance qui traverse */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%", skewX: -20 }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8 }}
              />

              {/* Cercles qui se propagent au hover */}
              <motion.span
                className="absolute inset-0 rounded-xl"
                whileHover={{
                  boxShadow: [
                    "0 0 0 0 rgba(6, 182, 212, 0.7)",
                    "0 0 0 15px rgba(6, 182, 212, 0)",
                  ],
                }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />

              <span className="relative flex items-center gap-2">
                Voir mes projets
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </Link>

          {/* Bouton Télécharger CV */}
          <a
            href="/CV.pdf"
            download="CV_Prenom_Nom.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="relative bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-2xl cursor-pointer overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Effet de brillance qui traverse */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%", skewX: -20 }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8 }}
              />

              {/* Cercles qui se propagent au hover */}
              <motion.span
                className="absolute inset-0 rounded-xl"
                whileHover={{
                  boxShadow: [
                    "0 0 0 0 rgba(168, 85, 247, 0.7)",
                    "0 0 0 15px rgba(168, 85, 247, 0)",
                  ],
                }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />

              <span className="relative flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Télécharger CV
              </span>
            </motion.button>
          </a>
        </motion.div>
      </motion.div>

      {/* Indicateur de défilement animé avec effet pulsant */}
      <motion.div
        className="absolute bottom-8 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="relative w-6 h-10 border-2 border-white/70 rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              opacity: [1, 0.3, 1],
              height: ["12px", "8px", "12px"],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Cercles qui se propagent */}
          <motion.div
            className="absolute -inset-2 border-2 border-white/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Effet de vignette sur les bords */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
      </div>
    </section>
  );
}
