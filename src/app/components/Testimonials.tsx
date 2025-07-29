'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic'; // <-- Importe o dynamic
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), { ssr: false });

const testimonials = [
  {
    id: 1,
    name: 'Valeska Rocha - Gerente Financeiro',
    role: 'Empresa BRQ IT',
    content: 'Trabalhar com Marcelo foi incrível. A solução superou nossas expectativas e aumentou significativamente nossa receita e produtividade, acelerando a operação. Cortamos diversos custos com outras consultorias. Ele automatizou a importação de notas fiscais eletrônicas e toda a parte de conciliação bancária',
    avatar: '/valeska.png',
  },
  {
    id: 2,
    name: ' Walter Muniz - Analista Contábil Sênior',
    role: 'Empresa WHL Líder - Consultoria Contábil',
    content: 'Uma pessoa com o raciocínio lógico e disparado, muito a frente. Quando pensamos em algo ele já tem a solução. Automatizou diversos dos meus processos contábeis' +
    ' aumentando a produtividade e a performance. Nota mil!',
    avatar: '/walter.jpeg',
  },
  {
    id: 3,
    name: 'Rodrigo Jacinto - Gerente de Sistemas',
    role: 'Empresa ReJ Sistemas CNPJ 46.032.743/0001-44',
    content: 'Com certeza recomendaria muito. Encontrei ele no Workana e solicitei desenvolvimento de uma plataforma para extrair os xmls dos eventos do eSocial e enviar ao governo. Ele mapeou e conectou toda a minha base, automatizou meus envios, fez mais do que o pedido',
    avatar: '/rodrigo_avatar.jpeg',
  },
  {
    id: 4,
    name: 'Solange Silva - Gerente',
    role: 'Empresa BRQ IT',
    content: 'O cara simplesmente revolucionou o setor. Quando iniciei os trabalhos na área de compras a empresa não tinha nada de sistema, eram todos desconectados e com processos falhos. Ao longo dos anos, Marcelo criou diversas soluções para contabilidade, logística, financeiro, todas integradas ao SAP da empresa. Ele implementou todo  NFE da empresa, falar mais o que?',
    avatar: '/solange.png',
  },
  // Add more testimonials
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
      <div className="container mx-auto px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-500">
            Depoimentos
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            O que meus clientes e parceiros dizem sobre o meu trabalho :
          </p>
        </MotionDiv>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <MotionDiv
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-cyan-400">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"                    
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">&quot;{testimonial.content}&quot;</p>
              <div className="mt-6 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}