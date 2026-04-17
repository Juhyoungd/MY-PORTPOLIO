import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  // 색상 매핑 (확장성 고려)
  const colors = {
    blue: "bg-blue-600/20 text-blue-300",
    green: "bg-green-600/20 text-green-300",
    indigo: "bg-indigo-600/20 text-indigo-300",
  };

  const colorStyle = colors[project.color] || colors.blue;

  return (
    <Link
      to={`/projects/${project.id}`}
      aria-label={`${project.korTitle} 프로젝트 설명 열기`}
      className="group border border-slate-100 rounded-3xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 flex flex-col text-left w-full"
    >
      {/* 상단 비주얼 영역 */}
      <div className="h-64 bg-slate-900 flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
        <div className={`absolute inset-0 ${colorStyle.split(' ')[0]} group-hover:opacity-40 transition-opacity duration-500`}></div>
        <p className="text-4xl font-black italic tracking-tighter z-10 group-hover:scale-110 transition-transform duration-500">{project.title}</p>
        <p className={`text-sm ${colorStyle.split(' ')[1]} mt-2 z-10 font-bold uppercase tracking-widest`}>{project.subtitle}</p>
      </div>

      {/* 하단 설명 영역 */}
      <div className="p-8 flex-1 flex flex-col">
        <h4 className="text-2xl font-bold mb-3 text-slate-800">{project.korTitle}</h4>
        <p className="text-slate-500 mb-6 leading-relaxed text-sm flex-1">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tech => (
            <span 
              key={tech} 
              className="px-2.5 py-1 bg-slate-50 text-slate-500 border border-slate-100 rounded-lg text-[10px] font-bold uppercase tracking-wider group-hover:border-blue-200 group-hover:text-blue-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;