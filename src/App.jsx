import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <h1 className="text-xl font-black tracking-tighter text-blue-600">JUHYEONG.DEV</h1>
        <div className="hidden md:flex space-x-8 font-medium text-sm">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-6 max-w-5xl mx-auto">
        <div className="space-y-4">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-wider uppercase">Frontend Developer</span>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            사용자의 일상을 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">데이터로 연결하는</span> <br/>
            이주형입니다.
          </h2>
          <p className="text-slate-500 text-xl max-w-2xl leading-relaxed">
            React와 React Native를 활용해 웹과 모바일의 경계를 허무는 개발을 지향합니다. 
            단순한 구현을 넘어 사용자 중심의 매끄러운 경험을 고민합니다.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold italic underline decoration-blue-500 decoration-4 underline-offset-8">About Me</h3>
            <p className="text-slate-600 leading-relaxed">
              프론트엔드 개발자로서 협업의 가치를 중요하게 생각합니다. 
              백엔드 팀원과 효율적으로 소통하며 최적의 UI를 설계하는 데 즐거움을 느낍니다. 
            </p>
            <div id="skills" className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <p className="font-bold text-blue-600 mb-1">Web</p>
                <p className="text-xs text-slate-500 font-medium italic">React, Tailwind CSS, Vite</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <p className="font-bold text-green-600 mb-1">Mobile</p>
                <p className="text-xs text-slate-500 font-medium italic">React Native, Expo</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Core Values
            </h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li>• 재사용 가능한 컴포넌트 설계 지향</li>
              <li>• 하드웨어 제어를 통한 새로운 유저 경험 제공</li>
              <li>• 백엔드와의 매끄러운 API 연동 및 데이터 처리</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-16 text-center">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="group border border-slate-100 rounded-3xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300">
            <div className="h-64 bg-slate-900 flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/10 transition-colors"></div>
               <p className="text-3xl font-black italic tracking-tighter z-10">READ ME</p>
               <p className="text-sm text-blue-300 mt-2 z-10">E-Commerce Platform</p>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold mb-3">도서 전자상거래 사이트 'READ ME'</h4>
              <p className="text-slate-500 mb-6 leading-relaxed">
                4명의 프론트엔드 팀원과 협업하여 구축한 도서 판매 플랫폼입니다. 
                공통 UI 컴포넌트 설계와 상태 관리를 담당하며 유지보수성을 극대화했습니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'State Management', 'Vite'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold uppercase tracking-wider">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group border border-slate-100 rounded-3xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300">
            <div className="h-64 bg-slate-900 flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-green-600/20 group-hover:bg-green-600/10 transition-colors"></div>
               <p className="text-3xl font-black italic tracking-tighter z-10">Zzz...</p>
               <p className="text-sm text-green-300 mt-2 z-10">Sleep Analysis App</p>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold mb-3">수면 패턴 분석 모바일 앱</h4>
              <p className="text-slate-500 mb-6 leading-relaxed">
                React Native를 활용해 스마트폰의 녹음 기능을 제어하고 수면 중 코골이 데이터를 분석하여 사용자에게 피드백을 제공합니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React Native', 'Audio API', 'Mobile Dev'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold uppercase tracking-wider">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-slate-100 bg-slate-50/50">
        <p className="text-sm font-medium text-slate-400">© 2026 Lee Juhyeong. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4 text-xs font-bold text-blue-600 uppercase tracking-widest">
           <span className="cursor-pointer hover:underline">GitHub</span>
           <span className="cursor-pointer hover:underline">LinkedIn</span>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;