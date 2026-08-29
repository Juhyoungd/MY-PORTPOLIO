import React from 'react';
import { Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Awards from './sections/Awards';
import ProjectCard from './components/ProjectCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PROJECT_DATA } from './data/projects';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-blue-100 bg-fixed text-slate-900 font-sans selection:bg-blue-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Awards />

      {/* Project Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-16 text-center tracking-tight">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {PROJECT_DATA.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const project = PROJECT_DATA.find((item) => item.id === projectId);
  const [imageIndex, setImageIndex] = React.useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <main className="max-w-4xl mx-auto px-6 py-20">
        <section className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 md:p-10">
          <Link to="/" className="text-xl font-semibold text-blue-600 hover:underline">
            ←
          </Link>

          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mt-6">{project.subtitle}</p>
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

            {project.teamInfo && (
              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-3">팀 소개</h2>
                <p className="text-slate-700 leading-relaxed">{project.teamInfo}</p>
              </section>
            )}

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">이미지</h2>
              {project.images?.length ? (
                <div>
                  <div className="relative rounded-xl border border-slate-200 overflow-hidden aspect-video">
                    <img
                      src={project.images[imageIndex].src}
                      alt={project.images[imageIndex].caption || `${project.korTitle} 화면 캡처`}
                      className="w-full h-full object-cover"
                    />

                    {project.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setImageIndex((i) => (i - 1 + project.images.length) % project.images.length)
                          }
                          aria-label="이전 이미지"
                          className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 text-white text-5xl leading-none [text-shadow:0_1px_6px_rgba(0,0,0,0.8)] hover:scale-110 transition-transform"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          onClick={() => setImageIndex((i) => (i + 1) % project.images.length)}
                          aria-label="다음 이미지"
                          className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 text-white text-5xl leading-none [text-shadow:0_1px_6px_rgba(0,0,0,0.8)] hover:scale-110 transition-transform"
                        >
                          ›
                        </button>
                        <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-full bg-black/60 text-white text-xs font-semibold">
                          {imageIndex + 1} / {project.images.length}
                        </span>
                      </>
                    )}

                    <button
                      type="button"
                      onClick={() => setIsLightboxOpen(true)}
                      aria-label="이미지 크게 보기"
                      className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 20.25v-4.5m0 4.5h-4.5m4.5 0L15 15"
                        />
                      </svg>
                    </button>
                  </div>

                  {project.images[imageIndex].caption && (
                    <p className="mt-2 text-xs text-slate-500 text-center">
                      {project.images[imageIndex].caption}
                    </p>
                  )}

                  {isLightboxOpen && (
                    <div
                      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6"
                      onClick={() => setIsLightboxOpen(false)}
                    >
                      <div
                        className="relative bg-white rounded-2xl shadow-2xl p-3 w-full max-w-6xl"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          onClick={() => setIsLightboxOpen(false)}
                          aria-label="닫기"
                          className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md text-slate-700 text-xl leading-none hover:bg-slate-100 transition-colors"
                        >
                          ×
                        </button>

                        <img
                          src={project.images[imageIndex].src}
                          alt={project.images[imageIndex].caption || `${project.korTitle} 화면 캡처`}
                          className="w-full max-h-[88vh] object-contain rounded-lg"
                        />

                        {project.images[imageIndex].caption && (
                          <p className="mt-2 text-xs text-slate-500 text-center">
                            {project.images[imageIndex].caption}
                          </p>
                        )}

                        {project.images.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                setImageIndex((i) => (i - 1 + project.images.length) % project.images.length)
                              }
                              aria-label="이전 이미지"
                              className="absolute left-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 text-slate-700 text-5xl leading-none [text-shadow:0_1px_6px_rgba(255,255,255,0.8)] hover:scale-110 transition-transform"
                            >
                              ‹
                            </button>
                            <button
                              type="button"
                              onClick={() => setImageIndex((i) => (i + 1) % project.images.length)}
                              aria-label="다음 이미지"
                              className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 text-slate-700 text-5xl leading-none [text-shadow:0_1px_6px_rgba(255,255,255,0.8)] hover:scale-110 transition-transform"
                            >
                              ›
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className={`rounded-xl overflow-hidden h-56 flex flex-col items-center justify-center text-white ${
                    { blue: "bg-blue-600", green: "bg-green-600", indigo: "bg-indigo-600" }[project.color] || "bg-slate-800"
                  }`}
                >
                  <p className="text-2xl font-black italic tracking-tighter">{project.title}</p>
                  <p className="text-xs mt-2 font-bold uppercase tracking-widest opacity-80">
                    {project.imageCaption || project.subtitle}
                  </p>
                </div>
              )}
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

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">기술 스택</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-50 text-slate-600 border border-slate-200 rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.tools?.length ? (
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">사용 도구</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-slate-50 text-slate-600 border border-slate-200 rounded-lg text-xs font-bold uppercase tracking-wider"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3 mt-10">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
              >
                프로젝트 보기 ↗
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              GitHub 보기
            </a>
          </div>
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