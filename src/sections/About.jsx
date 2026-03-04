import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold italic underline decoration-blue-500 decoration-4 underline-offset-8">About Me</h3>
            
            {/* 학력 및 기본 정보 */}
            <div className="space-y-2">
              <p className="text-xl font-bold text-slate-800">이주형 | Lee Juhyeong</p>
              <div className="text-slate-600 leading-relaxed font-medium">
                <p>목원대학교 컴퓨터공학과 학사</p>
                <p className="text-sm text-slate-500 font-normal">(2022.03 ~ 2026.02 졸업 예정)</p>
              </div>
            </div>

            {/* 수상 내역 (Awards) 섹션 추가 */}
            <div className="space-y-3">
              <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">Awards</p>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-bold text-slate-800 text-sm">교내 캡스톤 디자인 경진대회 은상</p>
                    <p className="text-xs text-slate-500">2025.11 | 수면 패턴 분석 앱 프로젝트</p>
                  </div>
                </div>
                {/* 다른 수상 내역이 있다면 아래에 추가하세요 */}
                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-bold text-slate-800 text-sm">프론트엔드 부트캠프 우수 프로젝트상</p>
                    <p className="text-xs text-slate-500">2025.12 | 도서 이커머스 'READ ME'</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm">
              프론트엔드 개발자로서 협업의 가치를 중요하게 생각합니다. 
              백엔드 팀원과 효율적으로 소통하며 최적의 UI를 설계하는 데 즐거움을 느끼며, 
              컴퓨터공학 전공 지식을 바탕으로 탄탄한 코드를 작성합니다.
            </p>
          </div>

          {/* 기술 스택 */}
          <div id="skills" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
              <p className="font-bold text-blue-600 mb-2 text-xs uppercase tracking-tight">Frontend</p>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'JS', 'Tailwind', 'Vite'].map(skill => (
                  <span key={skill} className="text-[9px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold">{skill}</span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
              <p className="font-bold text-green-600 mb-2 text-xs uppercase tracking-tight">Mobile</p>
              <div className="flex flex-wrap gap-1.5">
                {['React Native', 'Expo'].map(skill => (
                  <span key={skill} className="text-[9px] bg-green-50 text-green-700 px-2 py-0.5 rounded font-bold">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽 핵심 가치 카드 */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group h-full">
          <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-800 border-b pb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Professional Values
          </h4>
          <ul className="space-y-6 text-slate-600 text-sm font-medium">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">01</span>
              <span>컴포넌트 중심 설계를 통한 고도화된 UI 유지보수</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">02</span>
              <span>모바일 네이티브 기능(Audio, Camera) 최적화 구현</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">03</span>
              <span>백엔드 API 명세에 맞춘 안정적인 데이터 연동</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;