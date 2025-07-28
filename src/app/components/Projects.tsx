
'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import viska_mobile1 from '../public/viska_mobile1.png'
import dynamic from 'next/dynamic'; // <-- Importe o dynamic
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), { ssr: false });
const MotionA = dynamic(() => import('framer-motion').then(mod => mod.motion.a), { ssr: false });

const projectCategories = [
  { id: 'all', name: 'Todos' },
  { id: 'mobile', name: 'Apps para celular' },
  { id: 'business', name: 'Sistemas Empresariais' },
  { id: 'trading', name: 'E-commerce e Landing Page' },
  { id: 'automation', name: 'Automações e WebScraping' },
  { id: 'government', name: 'Governo' },
  { id: 'ai', name: 'Inteligência Artificial' },
];

const projects = [
  /* {
    id: 1,
    title: 'E-Commerce Mobile App',
    description: 'Cross-platform shopping app with payment integration',
    category: 'mobile',
    tags: ['React Native', 'Firebase', 'Stripe'],
    previewImage: '/projects/ecommerce-preview.jpg',
    media: [
      { type: 'image', url: '/projects/ecommerce-1.jpg' },
      { type: 'video', url: '/projects/ecommerce-demo.mp4' },
    ],
    liveUrl: 'https://ecommerce-example.com' // Example live URL
  }, */
  {
    id: 1,
    title: 'Empresa Viska DryWall',
    subtitle:'Empresa Viska DryWall - Gestão Empresarial para Controle de Atividades e Horas de profissional',
    description: 'Controle de atividades, produção, obras realizadas, materiais,horas trabalhadas, Geolocalização' +
    ' e mapas,mensageria,contas a pagar e receber e suporte a idiomas',
    category: 'mobile',
    tags: ['Flutter', 'Firebase', 'Python'],
    previewImage: '/viska_mobile0.png',
    media: [
      { type: 'image', url: '/viska_mobile1.png' },
      { type: 'image', url: '/produto_viska.png' },
      { type: 'image', url: '/reports_viska.png' },
      { type: 'image', url: '/atividade_viska.png' },
      { type: 'image', url: '/tarefa_viska.png' },
      { type: 'video', url: '/viska_mobile.mp4' },
    ],
    liveUrl: 'https://ecommerce-example.com' // Example live URL
  },
  {
    id: 2,
    title: 'Empresa RS SuperMercados - PDV Mobile',
    subtitle:'Empresa RS SuperMercados - Software PDV para gestão de caixa de supermercado',
    description: 'Software PDV para gestão de caixa de supermercado, cadastro clientes, produtos, código de barras,controle de estoque, inventário',
    category: 'mobile',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    previewImage: '/pdv3.jpg',
    media: [
      { type: 'image', url: '/pdv1.png' },
      { type: 'image', url: '/pdv2.png' },
      { type: 'image', url: '/cliente_pdv.png' },
      { type: 'image', url: '/categoria_pdv.png' },
    ],
    liveUrl: 'https://www.youtube.com/watch?v=qyU7NjRWmeM&t=107s' // Example live URL
  },
  {
    id: 3,
    title: 'Empresa BRQ IT - Ponto Eletrônico',
    subtitle:'Empresa BRQ IT - Ponto Eletrônico',
    description: 'Atuei como líder técnico e desenvolvedor na criação da solução de ponto eletrônico da empresa juntamente com o time de devs.',
    category: 'mobile',
    tags: ['Android','IOS', 'Node.js', 'SQL Server'],
    previewImage: '/gestao-de-ponto-eletronico-em-nuvem-vantagens-dp.png',
    media: [
      { type: 'image', url: '/ponto.png' },
      { type: 'image', url: '/ponto2.png' },            
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.brq.pontobrq&hl=pt_BR' // Example live URL
  },
  {
    id: 4,
    title: 'Empresa New Force Line',
    subtitle:'Empresa New Force Line - Alarme Monitorado',
    description: 'App CFTV mobile desenvolvido para conectar aos dispositivos de câmera e alarme do cliente. O app utilizou o padrão ONVIF (Open Network Video Interface Forum) e RTSP (Real Time Streaming Protocol). ' +
    'O sistema também possui controle de faturas, permitindo o pagamento na interface.',
    category: 'mobile',
    tags: ['React Native','ONVIF', 'Node.js', 'My Sql'],
    previewImage: '/alarme1.png',
    media: [
      { type: 'image', url: '/alarme2.png' },
      { type: 'image', url: '/alarme3.png' },    
      { type: 'image', url: '/alarme4.png' }        
    ],
    liveUrl: 'https://newforceline.com.br' // Example live URL
  },
  {
    id: 5,
    title: 'Empresa BRQ IT Solutions',
    subtitle:'Empresa BRQ IT Solutions - Portal de Faturamento',
    description: 'Software ERP para gestão financeira e contábil, dashboards ,NFE, Emissão, Cancelamento, Substituição, CRM Clientes. Relatório de Faturamentos e Recebimento, relatório de materiais',
    category: 'business',
    tags: ['React', 'Node.js', 'PostgreSQL','Docker'],
    previewImage: '/dashboard.png',
    media: [
      { type: 'image', url: '/dashboard.png' },
      { type: 'image', url: '/InformacoesRecebimento.png' },
      { type: 'image', url: '/info_recebimento.png' },
      { type: 'image', url: '/nfe.png' },
      { type: 'video', url: '/financeiro.mp4' },
    ],
    liveUrl: 'https://erp-example.com' // Example live URL
  },
  {
    id: 6,
    title: 'Empresa Viska Drywall',
    subtitle:'Empresa Viska Drywall - ERP Completo empresarial',
    description: 'Software ERP para gestão financeira e contábil, dashboards ,NFE, Emissão, Cancelamento, Substituição, CRM Clientes. Relatório de Faturamentos e Recebimento, relatório de materiais',
    category: 'business',
    tags: ['React Next Js', 'Node.js', 'Firebase','Docker'],
    previewImage: '/ERP1.png',
    media: [
      { type: 'image', url: '/Erp2.png' },
      { type: 'image', url: '/Erp3.png' },
      { type: 'image', url: '/erp4.png' },
      { type: 'image', url: '/ERP5.png' },
      { type: 'image', url: '/erp6.png' },
      { type: 'video', url: '/viska_erp.mp4' },
    ],
    liveUrl: 'https://erpdrywall-d5bf273193f8.herokuapp.com/' // Example live URL
  },
  {
    id: 7,
    title: 'Nutricionista Juliana Saldanha',
    subtitle:'Nutricionista Juliana Saldanha - agendamento de consultas, cadastro de medicamentos, nota fiscal',
    description: 'Agendamento de consultas, cadastro de usuários, pacientes - CRM Agenda com campo para área de especialidades, Geração de Nota Fiscal Eletrônica de Serviço e Mercadoria',
    category: 'business',
    tags: ['Javascript','TailwindCSS' ,'ASP.NET', 'SQL Server'],
    previewImage: '/medico1.png',
    media: [
      { type: 'image', url: '/medico1.png' },
      { type: 'image', url: '/medico2.png' },
      { type: 'video', url: '/medico.mp4' },
      
    ],
    liveUrl: 'https://erpdrywall-d5bf273193f8.herokuapp.com/' // Example live URL
  },
  {
    id: 8,
    title: 'Hidroclean Serviços Marítimos(Bravante)',
    subtitle:'Hidroclean Serviços Marítimos - landing page + sistema interno para controle de equipamentos de proteção ambiental',
    description: 'Atuação com o time da WBOX liderado por Arthur Kós Filho - construção da landing page, manutenção dos sistemas internos e de manutenção marítima,criação de sistema de barragens, portal do fornecedor e do RH',
    category: 'business',
    tags: ['Javascript','ASP.NET', 'SQL Server','TOTVS'],
    previewImage: '/hidroclean0.png',
    media: [
      { type: 'image', url: '/hidroclean1.png' },
      { type: 'image', url: '/hidroclean2.png' },
      { type: 'image', url: '/hidroclean3.png' },
      { type: 'image', url: '/hidroclean4.png' },
      { type: 'image', url: '/hidroclean5.png' },
      
    ],
    liveUrl: 'https://bravante.com.br/hidroclean//' // Example live URL
  },
  {
    id: 9,
    title: 'APPAI - Associação Beneficente dos Professores Públicos Ativos e Inativos RJ',
    subtitle:'APPAI - Associação Beneficente dos Professores Públicos Ativos e Inativos RJ',
    description: 'Fiz parte do time de desenvolvimento responsável por criar a Home Page, o Portal do Associado, os programas Saúde 10, desenvolvimento e manutenção dos sistemas internos médicos da empresa. Fui responsável também pelas integrações e gerador de relatório no sistema TOTVS RM',
    category: 'business',
    tags: ['Javascript','ASP.NET', 'SQL Server','TOTVS'],
    previewImage: '/appai0.png',
    media: [
      { type: 'image', url: '/appai0.png' },
      { type: 'image', url: '/appai1.png' },
      { type: 'image', url: '/appai2.png' },
      { type: 'image', url: '/appai3.png' },
      { type: 'image', url: '/appai4.png' },
      
    ],
    liveUrl: 'https://www.appai.org.br' // Example live URL
  },
  {
    id: 10,
    title: 'Vertigo Computação - B2W',
    subtitle:'Vertigo Computação - B2W',
    description: 'Fiz parte do time de desenvolvimento responsável por criar e dar manutenção nos e-commerces e Web Services do grupo B2W(Americanas, Submarino e Shoptime),utilizando tecnologias JAVA como Struts,JSF e Java Beans, com destaque para o Submarino, que hoje migrou para Americanas.com',
    category: 'trading',
    tags: ['Javascript','JAVA','SOAP UI','ORACLE WEBLOGIC'],
    previewImage: '/submarino1.png',
    media: [
      { type: 'image', url: '/submarino1.png' },
      { type: 'image', url: '/submarino2.png' },
      { type: 'image', url: '/submarino3.png' }
      
    ],
    liveUrl: 'https://www.submarino.com.br' // Example live URL
  },
  {
    id: 11,
    title: 'Oliveira Uniformes',
    subtitle:'Oliveira Uniformes',
    description: 'Desenvolvimento de Marketplace integrado para a empresa especializada em uniformes e EPIs Oliveira Uniformes, incluindo a Landing Page, Área administrativa e e-commerce. O sistema utiliza PHP no backend, HTML5, local storage para ações do usuário e Jquery',
    category: 'trading',
    tags: ['Wordpress','HTML5', 'PHP','MYSQL','Jquery'],
    previewImage: '/oliveira2.png',
    media: [
      { type: 'image', url: '/oliveira2.png' },
      { type: 'image', url: '/oliveira1.png' },
      { type: 'image', url: '/oliveira3.png' }
      
    ],
    liveUrl: 'https://www.oliveirauniformes.com.br' // Example live URL
  },
  {
    id: 12,
    title: 'Araken Petshop',
    subtitle:'Araken Petshop',
    description: 'Desenvolvimento de e-commerce no nicho de Pet Shops para a empresa Araken Pet Center.O sistema utiliza HTML5 e Bootstrap no front end,Node Js no backend "conteinerizado" em um Docker, e banco de dados MySql',
    category: 'trading',
    tags: ['Docker','HTML5','Bootstrap', 'Node JS','MYSQL'],
    previewImage: '/araken1.png',
    media: [
      { type: 'image', url: '/araken1.png' },
      { type: 'image', url: '/areken1.png' },
      { type: 'video', url: '/petshop.mp4' },
      
    ],
    liveUrl: 'https://arakenpetcenter.com.br' // Example live URL
  },
  {
    id: 13,
    title: 'Walter Muniz Contabilidade',
    subtitle:'Walter Muniz Contabilidade',
    description: 'Landing page para o nicho de contabilidade para a empresa Walter Muniz Contabilidade. A landing page foi construída utilizando React Next JS no front end. O sistema inclui galeria de fotos, e blog contábil',
    category: 'trading',
    tags: ['Next Js','React Js','Javascript'],
    previewImage: '/walter3.png',
    media: [
      { type: 'image', url: '/walter3.png' },
      { type: 'image', url: '/walter2.png' },
      { type: 'image', url: '/walter1.png' },
      
    ],
    liveUrl: 'https://waltermuniz-contador.vercel.app' // Example live URL
  },
  {
    id: 14,
    title: 'JF Anúncios de Supermercado',
    subtitle:'JF Anúncios de Supermercado',
    description: 'Geração de anúncios automáticos para supermercado, utilizando inteligência artificial. O sistema gera prompts de comando para a I.A a partir das seleções do usuário na tela. ElevenLabs gera o audio, a Runway cria o vídeo 3d. Uma verdadeira inovação no mercado de I.A',
    category: 'ai',
    tags: ['React Js','Docker','ElevenLabs','Runway','Firebase','Node JS','Typescript'],
    previewImage: '/jfs2.png',
    media: [
      { type: 'image', url: '/jfs2.png' },
      { type: 'image', url: '/jfs1.png' },
      { type: 'image', url: '/jfs3.png' },
      { type: 'image', url: '/jfs4.png' },
      
    ],
    liveUrl: 'https://jfs-anuncios.vercel.app' // Example live URL
  },
  /*  {
    id: 15,
    title: 'Automação Jira - SAP',
    subtitle:'Automação Jira - SAP',
    description: 'Geração de anúncios automáticos para supermercado, utilizando inteligência artificial. ',
    category: 'ai',
    tags: ['Next Js','React Js','ElevenLabs','RunWay'],
    previewImage: '/walter3.png',
    media: [
      { type: 'image', url: '/walter3.png' },
      { type: 'image', url: '/walter2.png' },
      { type: 'image', url: '/walter1.png' },
      
    ],
    liveUrl: 'https://waltermuniz-contador.vercel.app' // Example live URL
  }, */
  {
    id: 16,
    title: 'Web Scraping Processos Judiciais OAB Paraná',
    subtitle:'Web Scraping Processos Judiciais OAB Paraná',
    description: 'Sistema web scraping criado em Python utilizando a biblioteca Selenium para extrair informações de processos judiciais da OAB do Estado do Paraná. Sistema conta com bot automatizado',
    category: 'automation',
    tags: ['Python','Mongo DB','Bot'],
    previewImage: '/oabpr2.png',
    media: [
      { type: 'image', url: '/oabpr2.png' },
      { type: 'image', url: '/oab1.png' },
      { type: 'image', url: '/oab2.png' },
      
    ],
    liveUrl: 'https://github.com/souzamarcelo9/webscraping_oabpr' // Example live URL
  },
  {
    id: 17,
    title: 'Empresa ReJ Sistemas E-SOCIAL Extração e Geração de Eventos',
    subtitle:'Empresa ReJ Sistemas E-SOCIAL Extração e Geração de Eventos',
    description: 'Geração de eventos(XML) para o sistema eSocial do governo. Sistema inclui eventos iniciais (como admissões e tabelas), periódicos (como folha de pagamento e fechamento) e não periódicos (como afastamentos e alterações contratuais). ' +
    'Sistema desenvolvido usando .net Core + Web Service',
    category: 'government',
    tags: ['.Net Core','My Sql','Web Service','SOAP','XML'],
    previewImage: '/esocial0.png',
    media: [
      { type: 'image', url: '/esocial1.png' },
      { type: 'image', url: '/esocial2.png' },
      { type: 'image', url: '/esocial3.png' },
      { type: 'image', url: '/esocial4.png' },
      { type: 'image', url: '/esocial_xml.png' },
      
    ],
    liveUrl: '#' // Example live URL
  },
  {
    id: 18,
    title: 'NFE - Nota Fiscal Eletrônica',
    subtitle:'NFE - Nota Fiscal Eletrônica',
    description: 'Sistema para geração de NFE das prefeituras e dos Estados, mapeamento do xml e das regras de negócio do cliente, classes e interfaces para cada prefeitura, utilizando orientação a objeto, tratamento de erros e exceções, assinatura Digital com certificado A3, integre com seu ERP preferido',
    category: 'government',
    tags: ['Java','Spring','Oracle','RabbitMQ','JCO','Hibernate'],
    previewImage: '/sistema_nfe.png',
    media: [
      { type: 'image', url: '/sistema_nfe.png' },
      { type: 'image', url: '/nfe_print.jpg' },
      { type: 'image', url: '/nfe_rps.png' },
      
    ],
    liveUrl: '#' // Example live URL
  },
  {
    id: 19,
    title: 'Gerador de Rifas On Line',
    subtitle:'Gerador de Rifas On Line',
    description: 'Geração de rifas para sorteios e  apostas utilizando inteligência artificial. O sistema permite conexão e importação do número da loteria federal e através da IA dá palpites para apostas. ',
    category: 'ai',
    tags: ['Next Js','Firebase','Rest API'],
    previewImage: '/rifa1.png',
    media: [
      { type: 'image', url: '/rifa1.png' },
      { type: 'image', url: '/rifa2.png' },
            
    ],
    liveUrl: '#' // Example live URL
  },
  {
    id: 20,
    title: 'Empresa CMARTINS ADVOGADOS - Web Scraping Processos Judiciais TJ São Paulo',
    subtitle:'Empresa CMARTINS ADVOGADOS - Web Scraping Processos Judiciais TJ São Paulo',
    description: 'Sistema web scraping criado em Python para realizar Push de captura para processos de advocacia e extrair em planilha excel. Sistema conta com bot automatizado',
    category: 'automation',
    tags: ['Python','Mongo DB','Bot'],
    previewImage: '/tjsp0.png',
    media: [
      { type: 'image', url: '/tjsp0.png' },
      { type: 'image', url: '/tjsp1.png' },
      { type: 'image', url: '/tjsp2.png' },
      { type: 'image', url: '/tjsp3.png' },
    ],
    liveUrl: 'https://github.com/souzamarcelo9/JADS_tjsp_webscrapping' // Example live URL
  },
  {
    id: 21,
    title: 'CMartins Advogados',
    subtitle:'CMARTINS Advogados',
    description: 'Landing page institucional para o nicho de advocacia para a empresa CMARTINS Advogados. A landing page foi construída utilizando React Next JS no front end. O sistema inclui um blog de notícias',
    category: 'trading',
    tags: ['Next Js','React Js','Javascript'],
    previewImage: '/cmartins1.png',
    media: [
      { type: 'image', url: '/cmartins1.png' },
      { type: 'image', url: '/cmartins2.png' },      
      
    ],
    liveUrl: 'https://cmartins.com.br' // Example live URL
  },
  {
    id: 22,
    title: 'Psicóloga Márcia Varella',
    subtitle:'Psicóloga Márcia Varella',
    description: 'Landing page institucional para o nicho de psicologia. A landing page foi construída utilizando tecnologias como tailwind css, html5, javascript e PHP',
    category: 'trading',
    tags: ['Javascript','PHP','Tailwind Css'],
    previewImage: '/psicologiaMarciaVarella.png',
    media: [
      { type: 'image', url: '/psicologiaMarciaVarella.png' },
      { type: 'image', url: '/psicologiaMarciaVarella2.png' },   
      { type: 'video', url: '/psicologia.mp4' },   
      
    ],
    liveUrl: 'http://psicologamarciavarella.com.br' // Example live URL
  },
  {
    id: 23,
    title: 'Site Moderno para Advogados',
    subtitle:'Site Moderno para Advogados',
    description: 'Landing page institucional para o nicho de advocacia. A landing page foi construída utilizando tecnologias como tailwind css, html5, javascript e PHP. A solução inclui um blog para posts de procedimentos e notícias sobre Direito.',
    category: 'trading',
    tags: ['Javascript','PHP','Tailwind Css'],
    previewImage: '/advogado2.png',
    media: [
      { type: 'image', url: '/advogado1.png' },
      { type: 'image', url: '/advogado2.png' },
      { type: 'image', url: '/advogado3.png' },    
      { type: 'video', url: '/advogado.mp4' },   
      
    ],
    liveUrl: 'https://advocacy-theta.vercel.app' // Example live URL
  },
  {
    id: 24,
    title: 'Lopes Imóveis - Site para Imobiliária / Corretores',
    subtitle:'Lopes Imóveis - Site para Imobiliária / Corretores',
    description: 'Landing page institucional desenvolvida em JAVA para o nicho imobiliário Real State e corretores de imóveis. O site permite agendamento de visitas, busca por imóveis, CRM, blog para artigos e uma área administrativa para login do corretor',
    category: 'trading',
    tags: ['Javascript','Java','HTML5','CSS'],
    previewImage: '/lopes1.png',
    media: [
      { type: 'image', url: '/lopes1.png' },
      { type: 'image', url: '/lopes2.png' },
      { type: 'image', url: '/lopes3.png' },          
      
    ],
    liveUrl: 'https://www.lopes.com.br' // Example live URL
  },
  {
    id: 25,
    title: 'BRQ IT - Projeto Mastersaf DW - EFD, ECD, SPED,REINF-SAP R3',
    subtitle:'BRQ IT - Projeto Mastersaf DW - EFD, ECD, SPED,REINF-SAP R3',
    description: 'Criação e configuração dos blocos do SPED conforme layout governo: F,M,K,C,B etc.Integração com web services, criação de funções, validações de campos, regras novas e integração completa com SAP a partir das cargas.Configuração ECD,EFD,SPED Contábil,REINF.',
    category: 'government',
    tags: ['SAP','ABAP','Data Warehousing','Web Services'],
    previewImage: '/sped0.png',
    media: [
      { type: 'image', url: '/sped0.png' },
      { type: 'image', url: '/MSAFDW.png' },
      { type: 'image', url: '/enhancement_dw.png' }, 
      { type: 'image', url: '/j1bpis.PNG' },          
      
    ],
    liveUrl: 'https://www.lopes.com.br' // Example live URL
  },
  {
    id: 26,
    title: 'Mediconfort -TELEMEDICINA - CONSULTAS ON LINE ( MÉDICO)',
    subtitle:'Mediconfort - TELEMEDICINA - CONSULTAS ON LINE ( MÉDICO)',
    description: 'Sistema para agendamento e atendimento de chamadas on line na área de Telemedicina. A solução conta com vídeo chamada, prontuário eletrônico,agendamento de consultas, cadastro de médicos, cadastro de pacientes e cadastro de exames. Desenvolvido com React JS,Node Js e Firebase',
    category: 'business',
    tags: ['Firebase','Node JS','React JS','Vite'],
    previewImage: '/mediconfort1.png',
    media: [
      { type: 'image', url: '/mediconfort1.png' },
      { type: 'image', url: '/mediconfort2.png' },
      { type: 'image', url: '/mediconfort3.png' }, 
      { type: 'image', url: '/mediconfort4.png' },
      { type: 'image', url: '/mediconfort5.png' },                
    ],
    liveUrl: 'https://www.youtube.com/watch?v=38vxQoFwW9c&t=55s' // Example live URL
  },
  {
    id: 27,
    title: 'E-commerce MultiEmpresas Customizado',
    subtitle:'E-commerce MultiEmpresas Customizado',
    description: 'Loja virtual desenvolvida em .NET customizada para o cliente vender produtos, cadastrar fornecedores, contas de cliente, gerenciar preços,inspirada no Mercado Livre e Submarino. A plataforma comporta controle de acesso multiempresa.', 
    category: 'trading',
    tags: ['.NET Core','Javascript','SQL Server'],
    previewImage: '/multivr1.png',
    media: [
      { type: 'image', url: '/multivr1.png' },
      { type: 'image', url: '/multivr2.png' },
      { type: 'image', url: '/multivr3.png' }, 
      { type: 'image', url: '/multivr4.png' },
      { type: 'image', url: '/multivr5.png' },
      { type: 'image', url: '/multivr6.png' },                
    ],                    
    liveUrl: 'https://www.youtube.com/watch?v=R5UJYPsgPpc&t=56s' // Example live URL
  },
  {
    id: 28,
    title: 'Grupo Alpargatas - Loja Havaianas',
    subtitle:'Grupo Alpargatas - Loja Havaianas',
    description: 'Prestei serviço para a empresa Alpargatas atuando no time de desenvolvimento do e-commerce Havaianas. Além disso atuei na manutenção do sistema interno para realizar a contabilização separada das receitas de frete' 
     + ' de faturamento, oriundas do e-commerce Alpashop e Havaianas', 
    category: 'trading',
    tags: ['Shopify','Web Design','PHP','API Restful','SAP'],
    previewImage: '/alpargatas1.png',
    media: [
      { type: 'image', url: '/alpargatas1.png' },
      { type: 'image', url: '/alpargatas2.png' },
      { type: 'image', url: '/alpargatas3.png' }, 
      { type: 'image', url: '/alpargatas4.png' },
                   
    ],                    
    liveUrl: 'https://havaianas.com.br' // Example live URL
  },
  // Add more projects following the same structure
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => 
      (prev + 1) % selectedProject.media.length
    );
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => 
      (prev - 1 + selectedProject.media.length) % selectedProject.media.length
    );
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
function ChevronLeftIcon(props) {
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
}

