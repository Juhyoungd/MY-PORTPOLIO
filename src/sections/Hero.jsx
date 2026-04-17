// sections/Hero.jsx 수정 제안
import React from 'react';

const Hero = () => {
  return (
    <header className="relative py-32 px-6 max-w-5xl mx-auto overflow-hidden">
      {/* 배경 장식 요소: 프론트엔드 감성 추가 */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
      
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-xs font-bold tracking-wider uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Frontend Developer
        </div>

        <h2 className="text-5xl md:text-8xl font-extrabold leading-[1.05] tracking-tighter">
          사용자의 경험을 <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
            코드로 설계하는
          </span> <br/>
          이주형입니다.
        </h2>

        <p className="text-slate-500 text-xl md:text-2xl max-w-2xl leading-relaxed font-light">
          React와 React Native를 활용해 <br className="hidden md:block"/> 
          <strong className="font-semibold text-slate-800">웹의 범용성</strong>과 <strong className="font-semibold text-slate-800">모바일의 네이티브 경험</strong>을 연결합니다.
        </p>

        <div className="flex gap-4 pt-6">
          <a href="#projects" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
            View Projects
          </a>
          <a href="https://github.com/Juhyoungd" className="px-8 py-4 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;