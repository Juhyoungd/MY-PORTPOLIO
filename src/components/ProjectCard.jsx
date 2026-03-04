import React from 'react';

const ProjectCard = ({ project }) => {
  const bgColor = project.color === 'blue' ? 'bg-blue-600/20' : 'bg-green-600/20';
  const textColor = project.color === 'blue' ? 'text-blue-300' : 'text-green-300';

  return (
    <div className="group border border-slate-100 rounded-3xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300">
      <div className="h-64 bg-slate-900 flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
        <div className={`absolute inset-0 ${bgColor} group-hover:opacity-50 transition-opacity`}></div>
        <p className="text-3xl font-black italic tracking-tighter z-10">{project.title}</p>
        <p className={`text-sm ${textColor} mt-2 z-10 font-medium`}>{project.subtitle}</p>
      </div>
      <div className="p-8">
        <h4 className="text-2xl font-bold mb-3">{project.title === 'Zzz...' ? '수면 패턴 분석 앱' : "도서 이커머스 'READ ME'"}</h4>
        <p className="text-slate-500 mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tech => (
            <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;