import React from 'react';

const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['JavaScript','HTML', 'TypeScript', 'CSS'],
    dot: 'bg-blue-500',
    label_color: 'text-blue-600',
    tag: 'bg-blue-50 text-blue-700',
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Tailwind CSS'],
    dot: 'bg-cyan-500',
    label_color: 'text-cyan-600',
    tag: 'bg-cyan-50 text-cyan-700',
  },
  {
    label: 'Tools & Infrastructure',
    items: ['Git/GitHub', 'Figma', null, 'Linear'],
    dot: 'bg-indigo-500',
    label_color: 'text-indigo-600',
    tag: 'bg-indigo-50 text-indigo-700',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold italic underline decoration-blue-500 decoration-4 underline-offset-8">
        Skills
      </h3>
      <p className="mt-3 text-sm text-slate-500">기술 스택</p>

      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-1.5 h-1.5 rounded-full ${group.dot}`}></span>
              <p className={`text-xs font-bold ${group.label_color}`}>{group.label}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, index) =>
                skill === null ? (
                  <span key={`break-${index}`} className="basis-full w-full h-0" />
                ) : (
                  <span key={skill} className={`text-sm font-semibold px-3.5 py-1.5 rounded-full ${group.tag}`}>
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
