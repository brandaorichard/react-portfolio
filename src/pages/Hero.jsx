import React from "react";
import { motion } from "framer-motion";
import profpic from "../assets/images/profpicc.jpg";

export const Hero = () => {
  return (
    <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]">

      <div
        className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 
                      bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px]
                      border-[1px] border-[#8CD6DE]/30"
      />

      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
            <img
              src={profpic}
              alt="Ricardo Brandao"
              className="w-[275px] h-[275px] object-cover relative z-10 rounded-full border border-gray-800"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <br></br>
            <br></br>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
              Olá, sou <br /> Ricardo <span className="text-emerald-400">Brandão</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              Sou um desenvolvedor Full Stack formado pela Trybe, com sólida experiência em desenvolvimento front-end e back-end. Apaixonado por criar aplicações eficientes e centradas no usuário, sempre em busca de expandir meus conhecimentos em tecnologias web modernas.
            </p>

          </motion.div>
        </div>
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl"
        />
      </div>
    </div>
  );
};
