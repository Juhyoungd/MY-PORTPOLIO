import React from 'react';

const CONTACT_INFO = [
  {
    label: 'EMAIL',
    value: 'jhapoy106@naver.com',
    href: 'mailto:jhapoy106@naver.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
      </svg>
    ),
  },
  {
    label: 'PHONE',
    value: '010-2666-4511',
    href: 'tel:010-2666-4511',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .98.78l1 4.49a1 1 0 0 1-.27.95L7.5 10.5a11 11 0 0 0 6 6l1.28-1.49a1 1 0 0 1 .95-.27l4.49 1a1 1 0 0 1 .78.98V19a2 2 0 0 1-2 2h-1C9.61 21 3 14.39 3 6V5Z" />
      </svg>
    ),
  },
  {
    label: 'GITHUB',
    value: 'github.com/Juhyoungd',
    href: 'https://github.com/Juhyoungd',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.83-.26.83-.58v-2.17c-3.34.73-4.04-1.4-4.04-1.4-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.72.09-.72 1.2.08 1.84 1.24 1.84 1.24 1.07 1.82 2.81 1.3 3.5.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.23.69.84.58A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-between"
    >
      <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto px-6 py-24 w-full">
        <h3 className="text-3xl font-bold italic underline decoration-blue-500 decoration-4 underline-offset-8">
          Contact
        </h3>
        <p className="mt-3 text-sm text-slate-500">연락처</p>

        <p className="mt-8 text-slate-600 leading-relaxed">
          협업이나 채용에 관한 연락은 아래를 통해 연락주세요.
        </p>

        <div className="mt-10 space-y-4">
          {CONTACT_INFO.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center justify-between gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">{item.icon}</span>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                  <p className="font-semibold text-slate-800">{item.value}</p>
                </div>
              </div>
              <span className="text-slate-400 group-hover:text-blue-600 transition-colors">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 px-6 py-6">
        <div className="max-w-6xl mx-auto text-xs text-slate-400">
          <p>© 2026 Lee Juhyeong. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
