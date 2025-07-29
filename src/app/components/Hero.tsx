
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
//import photo from '/MarceloBrq.jpg';
import dynamic from 'next/dynamic'; // <-- Importe o dynamic
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), { ssr: false });

export default function Hero() {

  const goToContact = () => {

     window.location.href = "/#contact";

  }

  const goToProjects = () => {

     window.location.href = "/#projects";

  }

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 md:w-64 md:h-64 relative mb-8 md:mb-0 md:mr-12"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
            <div className="relative h-full w-full rounded-full overflow-hidden bg-gray-800">
              <Image
                src='/MarceloBrq.jpg' // Replace with your image path
                alt="Marcelo Dev"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <MotionDiv
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full p-2"
          >
            <div className="bg-black rounded-full p-2">
              <span className="text-xs font-bold">👋 Disponível!</span>
            </div>
          </MotionDiv>
        </MotionDiv>
        
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Bem vindos, sou <span className="text-white">Marcelo Souza</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
            Desenvolvedor web e mobile sênior, arquiteto de soluções 
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mb-8">
          Engenheiro de sistemas apaixonado por boas práticas, escalabilidade e criação de apps incríveis. Busco constantemente a excelência na entrega de soluções excepcionais,           
          unindo funcionalidade e uma experiência de usuário envolvente. Amo enfrentar desafios e criar apps escaláveis que possam 
          crescer junto com suas necessidades. Sou também CEO da Jad Suporte.
          Vamos juntos transformar suas ideias em realidade !
          </p>
          <div className="flex flex-wrap gap-4">
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium shadow-lg"
              onClick={goToContact}
            >
              Entre em contato!
            </MotionButton>
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-800 rounded-lg font-medium border border-gray-700 shadow-lg"
              onClick={goToProjects}
            >
              Ver Projetos
            </MotionButton>
          </div>
        </MotionDiv>
      </div>
      
      {/* Animated background elements */}
      <MotionDiv
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 opacity-20 blur-xl"
      />
      <MotionDiv
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-xl"
      />
    </section>
  );
}