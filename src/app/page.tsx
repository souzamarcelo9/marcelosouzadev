import Layout from '@/app/components/Layout';
import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';
import Testimonials from '@/app/components/Testimonials';
import Contact from '@/app/components/Contact';

export default function Home() {
  return (
    <>
      
        <title>Your Name | Software Engineer Portfolio</title>
        <meta name="description" content="Professional portfolio showcasing my work as a software engineer" />
        <link rel="icon" href="/favicon.ico" />

      
      <Layout>
        <Hero />
        <Projects />
        <Testimonials />
        <Contact />
      </Layout>
    </>
  );
}