import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  useSmoothScroll();

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
