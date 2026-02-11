import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { AIChatbot } from './components/AIChatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-100">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <AIChatbot />
    </div>
  );
}
