import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import ProjectCard from './components/ProjectCard';
import { PROJECT_DATA } from './data/projects';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <h1 className="text-xl font-black tracking-tighter text-blue-600 cursor-pointer">JUHYEONG.DEV</h1>
        <div className="flex space-x-6 font-medium text-xs uppercase tracking-widest">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
        </div>
      </nav>

      <Hero />
      <About />

      {/* Project Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-16 text-center tracking-tight">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {PROJECT_DATA.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-slate-100 bg-slate-50/50">
        <p className="text-sm font-medium text-slate-400">© 2026 Lee Juhyeong. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
           <a href="https://github.com/Juhyoungd" className="hover:underline">GitHub</a>
           <span className="cursor-pointer hover:underline">Contact</span>
        </div>
      </footer>
    </div>
  );
};

export default App;