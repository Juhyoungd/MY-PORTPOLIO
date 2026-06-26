import React from 'react';

const VALUES = [
  '컴포넌트 중심 설계를 통한 고도화된 UI 유지보수',
  '반응형 레이아웃과 크로스 브라우징을 고려한 화면 구현',
  '백엔드 API 명세에 맞춘 안정적인 데이터 연동',
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold italic underline decoration-blue-500 decoration-4 underline-offset-8">
        About Me
      </h3>
      <p className="mt-4 text-xl font-bold text-slate-800">이주형 | Lee Juhyeong</p>
      <p className="mt-6 text-slate-600 leading-relaxed max-w-2xl">
        프론트엔드 개발자로서 협업의 가치를 중요하게 생각합니다.
        백엔드 팀원과 효율적으로 소통하며 최적의 UI를 설계하는 데 즐거움을 느끼며,
        컴퓨터공학 전공 지식을 바탕으로 탄탄한 코드를 작성합니다.
      </p>

      {/* 핵심 가치 */}
      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        {VALUES.map((value, index) => (
          <div key={value} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <span className="text-blue-500 font-bold text-sm">0{index + 1}</span>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
