import React from 'react';

const Hero = () => {
  return (
    <header className="py-24 px-6 max-w-5xl mx-auto">
      <div className="space-y-4">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-wider uppercase text-center">
          Frontend Developer
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
          사용자의 일상을 <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            데이터로 연결하는
          </span> <br/>
          이주형입니다.
        </h2>
        <p className="text-slate-500 text-xl max-w-2xl leading-relaxed">
          React와 React Native를 활용해 웹과 모바일의 경계를 허무는 개발을 지향합니다.
        </p>
      </div>
    </header>
  );
};

export default Hero;