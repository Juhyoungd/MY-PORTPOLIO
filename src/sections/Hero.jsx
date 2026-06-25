// sections/Hero.jsx 수정 제안
import React from 'react';

const Hero = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto overflow-hidden">
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

        <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tighter">
          화면에 생명을 불어넣는 <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
            프론트엔드 개발자,
          </span> <br/>
          이주형입니다.
        </h2>

        <p className="text-slate-500 text-xl md:text-2xl max-w-2xl leading-relaxed font-light">
          React를 활용해 <br className="hidden md:block"/>
          <strong className="font-semibold text-slate-800">사용자 경험</strong>과 <strong className="font-semibold text-slate-800">코드 품질</strong>을 함께 고민합니다.
        </p>

        <div className="flex gap-4 pt-6">
          <a href="#projects" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
            프로젝트 보기
          </a>
          <a href="#contact" className="px-8 py-4 border-2 border-slate-300 rounded-2xl font-bold hover:bg-white hover:border-slate-400 transition-all">
            연락하기
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;