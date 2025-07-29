import Layout from '@/app/components/Layout';
import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';
import Testimonials from '@/app/components/Testimonials';
import Contact from '@/app/components/Contact';
import { SiteHeader } from './components/site-header';
import { ThemeProvider } from './components/theme-provider';

export default function Home() {
  return (
    <>
      
        <title>Marcelo Souza | Engenheiro de Software</title>
        <meta name="description" content="Professional portfolio showcasing my work as a software engineer" />
        <link rel="icon" href="/favicon.ico" />
          
        <Hero />
        <Projects />
        <Testimonials />
        <Contact />        
        
    </>
  );
}