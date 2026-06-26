import React from 'react';

const AWARDS = [
  {
    title: '교내 캡스톤 디자인 경진대회 은상',
    period: '2025.11',
    description: '수면 패턴 분석 앱 프로젝트',
  },
  {
    title: '프론트엔드 부트캠프 우수 프로젝트상',
    period: '2025.12',
    description: "도서 이커머스 'READ ME'",
  },
  {
    title: '프론트엔드 부트캠프 우수 프로젝트상',
    period: '2025.12',
    description: "도서 이커머스 'READ ME'",
  },
  {
    title: '프론트엔드 부트캠프 우수 프로젝트상',
    period: '2025.12',
    description: "도서 이커머스 'READ ME'",
  },
  {
    title: '프론트엔드 부트캠프 우수 프로젝트상',
    period: '2025.12',
    description: "도서 이커머스 'READ ME'",
  }
];

const Awards = () => {
  return (
    <section id="awards" className="py-24 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold italic underline decoration-blue-500 decoration-4 underline-offset-8">
        Awards
      </h3>
      <p className="mt-3 text-sm text-slate-500">수상 내역</p>

      <div className="mt-10 divide-y divide-slate-100 border-t border-slate-100">
        {AWARDS.map((award) => (
          <div
            key={award.title}
            className="flex flex-wrap items-baseline justify-between gap-2 py-4"
          >
            <p className="font-bold text-slate-800">
              {award.title}
              <span className="ml-2 text-sm font-normal text-slate-500">{award.description}</span>
            </p>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider whitespace-nowrap">{award.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
