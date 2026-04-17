import React from 'react';
import { Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import ProjectCard from './components/ProjectCard';
import { PROJECT_DATA } from './data/projects';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <Link to="/" className="text-xl font-black tracking-tighter text-blue-600">JUHYEONG.DEV</Link>
        <div className="flex space-x-6 font-medium text-xs uppercase tracking-widest">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
        </div>
      </nav>

      <Hero />
      <About />

      {/* Project Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-16 text-center tracking-tight">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {PROJECT_DATA.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-slate-100 bg-slate-50/50">
        <p className="text-sm font-medium text-slate-400">© 2026 Lee Juhyeong. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
           <a href="https://github.com/Juhyoungd" className="hover:underline">GitHub</a>
           <span className="cursor-pointer hover:underline">Contact</span>
        </div>
      </footer>
    </div>
  );
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const project = PROJECT_DATA.find((item) => item.id === projectId);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <main className="max-w-4xl mx-auto px-6 py-20">
        <Link to="/" className="text-xl font-semibold text-blue-600 hover:underline">
          ←
        </Link>

        <section className="mt-8 bg-white border border-slate-100 rounded-2xl shadow-sm p-8 md:p-10">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{project.subtitle}</p>
          <h1 className="text-4xl font-black tracking-tight mt-2">{project.korTitle}</h1>
          <p className="text-slate-500 mt-2">{project.title}</p>

          <div className="mt-6 text-sm text-slate-500 space-y-1">
            {project.period && <p>{project.period}</p>}
            {project.repositoryLabel && <p>{project.repositoryLabel}</p>}
            {project.paperTitle && <p>{project.paperTitle}</p>}
          </div>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">소개</h2>
              <p className="text-slate-700 leading-relaxed">
                {project.introduction || project.description}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">팀 소개</h2>
              <p className="text-slate-700 leading-relaxed">
                {project.teamInfo || "팀 소개 내용을 추가해 주세요."}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">이미지</h2>
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-500">
                {project.imageCaption || "프로젝트 이미지를 추가해 주세요."}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">프로젝트 설명</h2>
              {project.details?.length ? (
                <ul className="space-y-2">
                  {project.details.map((item) => (
                    <li key={item} className="text-slate-700 leading-relaxed flex gap-2">
                      <span className="text-blue-500 mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-700 leading-relaxed">{project.description}</p>
              )}
            </section>

            {project.background?.length ? (
              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-3">1. 프로젝트 배경</h2>
                <ul className="space-y-2">
                  {project.background.map((item) => (
                    <li key={item} className="text-slate-700 leading-relaxed flex gap-2">
                      <span className="text-blue-500 mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.implementation?.length ? (
              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-3">2. 기능 구현 및 기대효과</h2>
                <ul className="space-y-2">
                  {project.implementation.map((item) => (
                    <li key={item} className="text-slate-700 leading-relaxed flex gap-2">
                      <span className="text-blue-500 mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.outcomes?.length ? (
              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-3">3. 산출물 및 성과</h2>
                <ul className="space-y-2">
                  {project.outcomes.map((item) => (
                    <li key={item} className="text-slate-700 leading-relaxed flex gap-2">
                      <span className="text-blue-500 mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.contributions?.length ? (
              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-3">기여한 부분</h2>
                <div className="space-y-5">
                  {project.contributions.map((part, index) => (
                    <div key={part.title}>
                      <h3 className="font-semibold text-slate-900 mb-2">{index + 1}. {part.title}</h3>
                      <ul className="space-y-2">
                        {part.items.map((item) => (
                          <li key={item} className="text-slate-700 leading-relaxed flex gap-2">
                            <span className="text-blue-500 mt-[2px]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-50 text-slate-600 border border-slate-200 rounded-lg text-xs font-bold uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-10 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            GitHub 보기
          </a>
        </section>
      </main>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname.startsWith('/projects/')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-enter">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return <AnimatedRoutes />;
};

export default App;