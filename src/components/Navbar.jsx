import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <Link to="/" className="text-xl font-black tracking-tighter text-blue-600">LEE JU HYEONG</Link>
      <div className="flex space-x-6 font-medium text-xs uppercase tracking-widest">
        <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
        <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
