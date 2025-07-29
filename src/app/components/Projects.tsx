
'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import viska_mobile1 from '../public/viska_mobile1.png'
import dynamic from 'next/dynamic'; // <-- Importe o dynamic
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), { ssr: false });
const MotionA = dynamic(() => import('framer-motion').then(mod => mod.motion.a), { ssr: false });
import { projectCategories, projects,Project } from '../../../data/projectData';  
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react'; // Certifique-se de importar seus ícones

  
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openModal = (project : Project) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

 const nextMedia = () => {
    // Adicione uma verificação de nulidade, pois selectedProject pode ser null
    if (selectedProject) {
      setCurrentMediaIndex((prev) =>
        (prev + 1) % selectedProject.media.length
      );
    }
  };

  const prevMedia = () => {
    // Adicione uma verificação de nulidade, pois selectedProject pode ser null
    if (selectedProject) {
      setCurrentMediaIndex((prev) =>
        (prev - 1 + selectedProject.media.length) % selectedProject.media.length
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/50 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Meus Projetos
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Aqui você pode visualizar alguns dos meus projetos realizados e concluídos. Desde sites, landing pages, até automações,
            aplicações móveis(android-ios), sistemas complexos empresariais e integrações com Governo( nfe, sped, esocial,etc)
          </p>
        </MotionDiv>
        
        {/* Category Filter */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
            <MotionButton
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </MotionButton>
          ))}
        </MotionDiv>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Project Preview Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                <Image
                  src={project.previewImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">Ver Detalhes</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-gray-800/50 p-6 rounded-b-xl border border-t-0 border-gray-700/50">
                <h3 className="text-xl font-bold mb-2">{project.subtitle}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <MotionDiv
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative w-full max-w-4xl bg-gray-800 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Display */}
              <div className="relative h-96 w-full">
                {selectedProject.media[currentMediaIndex].type === 'image' ? (
                  <Image
                    src={selectedProject.media[currentMediaIndex].url}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <video
                    src={selectedProject.media[currentMediaIndex].url}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                )}

                {/* Navigation Arrows */}
                {selectedProject.media.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevMedia();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 hover:bg-black/80"
                    >
                      <ChevronLeftIcon className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextMedia();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 hover:bg-black/80"
                    >
                      <ChevronRightIcon className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Live Site Button */}
                {selectedProject.liveUrl && (
                  <MotionA
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-4 py-2 mb-4 bg-green-600 hover:bg-green-700 rounded-md font-medium"
                  >
                    Ver site-demonstração on line
                  </MotionA>
                )}

                <div className="flex justify-center space-x-2">
                  {selectedProject.media.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentMediaIndex(index);
                      }}
                      className={`w-3 h-3 rounded-full ${currentMediaIndex === index ? 'bg-cyan-500' : 'bg-gray-500'}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-700/50 hover:bg-gray-600/80 rounded-full p-2 transition-colors"
              >
                <XIcon className="w-6 h-6 text-white" />
              </button>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
}

// Icon components
/* function ChevronLeftIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
} */

