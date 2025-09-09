import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import UpdatedSkills from '@/react-app/components/UpdatedSkills';
import UpdatedProjects from '@/react-app/components/UpdatedProjects';
import Pricing from '@/react-app/components/Pricing';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navigation />
      <Hero />
      <About />
      <Pricing />
      <UpdatedSkills />
      <UpdatedProjects />
      <Contact />
      <Footer />
    </div>
  );
}
