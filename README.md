# 이주형 | Frontend Developer Portfolio

React 기반으로 제작한 개인 포트폴리오 웹사이트입니다. About, Skills, Awards, Projects, Contact 섹션과 프로젝트 상세 페이지 라우팅으로 구성되어 있습니다.

## 기술 스택

- **Core**: React 19, React Router 7
- **Styling**: Tailwind CSS 4
- **Build/Tooling**: Vite 7, ESLint

## 주요 기능

- 반응형 원페이지 레이아웃 (Hero / About / Skills / Awards / Projects / Contact)
- 프로젝트 카드 클릭 시 `/projects/:id` 상세 페이지로 라우팅
- 프로젝트 데이터(`src/data/projects.js`)를 기반으로 소개, 배경, 구현 내용, 성과, 기여 항목을 구조화하여 렌더링
- 페이지 전환 시 스크롤 및 fade-in 애니메이션 처리

## 실행 방법

```bash
npm install     # 의존성 설치
npm run dev     # 개발 서버 실행 (http://localhost:5173)
npm run build   # 프로덕션 빌드
npm run preview # 빌드 결과 미리보기
```

## 폴더 구조

```
src/
├── components/    # Navbar, Footer, ProjectCard 등 재사용 컴포넌트
├── sections/      # Hero, About, Skills, Awards 등 홈 화면 섹션
├── data/          # 프로젝트 콘텐츠 데이터
├── App.jsx        # 라우팅 및 페이지 구성
└── main.jsx       # 엔트리 포인트
```

## 프로젝트 콘텐츠 수정하기

프로젝트 카드/상세 페이지 내용은 전부 `src/data/projects.js`의 배열을 수정하면 반영됩니다. 스크린샷을 추가하려면 `public/projects/`에 이미지를 넣고 해당 프로젝트 객체에 `image: "/projects/파일명.png"` 필드를 추가하세요.

## Contact

- GitHub: [github.com/Juhyoungd](https://github.com/Juhyoungd)
