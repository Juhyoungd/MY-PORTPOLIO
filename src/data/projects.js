// data/projects.js
// 각 프로젝트에 실제 스크린샷이 있다면 아래처럼 images 배열을 추가하세요. (여러 장 가능)
// images: [
//   { src: "/projects/nextstep-main.png", caption: "메인 워크스페이스 화면" },
//   { src: "/projects/nextstep-community.png", caption: "커뮤니티 페이지" },
// ]
// (이미지 파일은 public/projects/ 폴더에 넣으면 됩니다. images가 없으면 그라데이션 배너로 대체됩니다.)
export const PROJECT_DATA = [
  {
    id: 1,
    title: "READ ME",
    korTitle: "TripleCore 온라인 서점 플랫폼",
    subtitle: "Next.js 기반 도서 쇼핑몰 서비스",
    description: "빠르고 편한 구매 경험을 목표로 설계한 온라인 서점 웹 서비스입니다.",
    period: "2024.05 ~ 2024.07",
    repositoryLabel: "GitHub Repository",
    paperTitle: "Project README",
    introduction: "단순 쇼핑몰이 아닌, 검색-장바구니-결제-배송까지 이어지는 전체 구매 경험 중심의 Next.js 기반 온라인 서점 플랫폼",
    details: [
      "원하는 책을 빠르게 찾기 어렵고 구매 과정이 복잡한 기존 문제를 개선하는 것을 목표로 설계",
      "회원/상품/관리자 기능을 분리해 요구사항을 정의하고 서비스 전체 흐름을 구현",
      "검색 정확도, 관리자 업무 효율, 확장 가능한 구조를 중심으로 프로젝트를 진행"
    ],
    teamInfo: "구성 : 프론트엔드/백엔드/DB 4인 협업",
    imageCaption: "README 메인 페이지 스크린샷",
    background: [
      "기존 온라인 서점은 원하는 도서를 빠르게 찾기 어렵고 구매 동선이 복잡하다는 문제가 있었음",
      "관리자/직원 업무가 분산되어 운영 효율이 떨어지는 구조를 개선할 필요가 있었음"
    ],
    implementation: [
      "Next.js + Tailwind CSS + JavaScript 기반으로 메인/상품/장바구니/결제/마이페이지 플로우 구현",
      "Firebase 인증과 Supabase DB를 연동해 로그인, 회원관리, 주문/리뷰/위시리스트 데이터 처리",
      "관리자 페이지에서 도서/리뷰/배송 상태를 통합 관리하고 Soft Delete 등 운영 기능 적용",
      "Git Flow, 데일리 스크럼, 코드리뷰 중심 협업으로 기능 품질과 개발 속도 개선",
      "Vercel 자동 배포로 개발-검수-배포 사이클을 빠르게 운영"
    ],
    outcomes: [
      "실서비스 수준의 온라인 서점 플랫폼 구현 및 배포 완료",
      "인증 → 검색 → 구매 → 결제 → 배송까지 전체 서비스 흐름 통합 경험 확보",
      "트러블슈팅(Optimistic UI, Rebase 충돌 해결)을 통해 협업 안정성과 UX 개선 역량 강화"
    ],
    contributions: [
      {
        title: "핵심 사용자 기능 구현",
        items: [
          "메인 페이지(베스트셀러/추천도서)와 상품 탐색 흐름 UI 구현",
          "장바구니, 위시리스트, 리뷰, 결제 화면 등 구매 전환 기능 연결",
          "재고 기반 수량/구매 활성화 조건 반영 및 사용자 피드백 강화"
        ]
      },
      {
        title: "협업 프로세스 및 운영 기능",
        items: [
          "Git Flow 기반 브랜치 전략, PR 리뷰, 데일리 스크럼 운영",
          "관리자 페이지(도서/리뷰/배송 관리) 구현 및 운영 시나리오 점검",
          "배포/QA 과정에서 발견된 이슈를 반복 개선해 서비스 안정화"
        ]
      }
    ],
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Firebase", "Supabase", "Vercel"],
    color: "blue",
    link: "https://github.com/Juhyoungd/README_KT_2025" // 프로젝트 관련 링크
  },
  {
    id: 2,
    title: "NEXTSTEP_KT",
    korTitle: "IT 직군을 위한 로드맵 기반 학습·프로젝트 관리 플랫폼",
    subtitle: "AI 기반 기술 추천 & 커뮤니티 플랫폼",
    description: "학습 로드맵 설계부터 커뮤니티 공유, AI 기술 추천까지 하나의 흐름으로 연결하는 Next.js 기반 플랫폼입니다.",
    images: [
      { src: "/projects/nextstep-main.png", caption: "메인 워크스페이스 - 로드맵 노드 편집" },
      { src: "/projects/nextstep-community-list.png", caption: "커뮤니티 - 8개 분야별 게시판" },
      { src: "/projects/nextstep-community-board.png", caption: "분야별 커뮤니티 게시글 목록" },
      { src: "/projects/nextstep-admin-stats.png", caption: "관리자 - 게시판별 통계 대시보드" },
      { src: "/projects/nextstep-admin-approval.png", caption: "관리자 - 기술 스택 요청 승인/거절" },
      { src: "/projects/nextstep-admin-stacks.png", caption: "관리자 - 기술 스택 관리" },
      { src: "/projects/nextstep-quest.png", caption: "퀘스트 - 데일리 미션으로 포인트 획득" },
      { src: "/projects/nextstep-store.png", caption: "상점 - 포인트로 프로필 아이템 구매" },
      { src: "/projects/nextstep-profile.png", caption: "마이페이지 - 프로필 커스터마이징" },
    ],
    period: "2024.07 ~ 2024.09",
    repositoryLabel: "GitHub Repository",
    paperTitle: "Project README",
    introduction: "IT 직군은 학습 범위가 넓고 변화가 빨라 방향을 잡기 어렵다는 문제에서 출발해, 로드맵 생성·진행 관리·개인 워크스페이스를 하나로 묶어 학습과 프로젝트를 함께 관리할 수 있도록 설계한 실전 아키텍처 프로젝트",
    details: [
      "사용자별 워크스페이스에서 기술(Tech) 노드를 연결해 로드맵을 설계하고 진행 상태를 관리",
      "노드를 선택하면 AI가 후속 학습 노드를 추천하고, 검색어 기반으로도 연관 기술을 추천",
      "완성한 워크스페이스를 프론트엔드·백엔드·AI 등 분야별 커뮤니티에 게시해 공유·좋아요·댓글·가져오기(포크)까지 지원",
      "퀘스트로 모은 포인트를 상점에서 프로필 커스터마이징 아이템으로 교환하는 등 지속 참여를 유도하는 요소 포함"
    ],
    teamInfo: "구성 : 프론트엔드/백엔드/DB 4인 협업 (AI·뉴스 / 메인 워크스페이스 / 회원·상점 / 커뮤니티·관리자 영역을 각자 전담)",
    imageCaption: "Next Step 메인 화면 스크린샷",
    background: [
      "IT 직군은 학습 범위가 넓고 트렌드 변화가 빨라, 무엇을 어떤 순서로 학습해야 할지 방향을 잡기 어려운 문제가 있음",
      "개인의 학습 과정과 프로젝트 진행 상황을 체계적으로 관리할 도구가 부족해 학습 흐름과 이력이 파편화되는 문제가 있었음"
    ],
    implementation: [
      "Next.js(App Router) + TypeScript 기반 구조에서 Feature-Sliced Design(FSD)으로 app/widgets/features/shared 계층을 분리해 협업 시 폴더 컨벤션 충돌을 최소화",
      "React Query, Zustand를 활용해 비동기 데이터와 클라이언트 상태를 분리 관리",
      "Supabase(PostgreSQL) + RLS로 사용자/워크스페이스/로드맵/게시글/댓글 등 핵심 데이터 모델 설계",
      "로드맵을 단순 트리가 아닌 DAG(방향성 비순환 그래프) 구조로 설계해, 여러 선행 지식이 하나의 개념으로 수렴하는 학습 구조까지 표현 가능하도록 구현",
      "OpenAI API 기반 AI 기술 추천과 분야별 뉴스 큐레이션 기능을 서비스에 통합",
      "퀘스트(행동 기반 포인트)와 상점(악세서리·테두리·칭호·닉네임) 시스템으로 재방문을 유도하는 게이미피케이션 요소 도입"
    ],
    outcomes: [
      "학습과 프로젝트 관리를 하나의 흐름으로 연결한 NEXTSTEP 서비스 구현 및 배포 완료",
      "로드맵 공유 기반 커뮤니티 상호작용과 게이미피케이션 요소로 사용자 재방문을 유도하는 서비스 구조 검증",
      "트리 구조의 한계를 DAG로 해결하는 등 실전 아키텍처(FSD, RLS, App Router) 기반 협업 개발 경험 확보"
    ],
    contributions: [
      {
        title: "커뮤니티 페이지 설계 및 성능 최적화",
        items: [
          "프론트엔드·백엔드·AI·인프라·클라우드·보안·PM·디자인 8개 분야별 커뮤니티 게시판 구조를 설계해 워크스페이스 공개 게시·탐색 흐름 구현",
          "게시글·댓글·대댓글 상호작용을 트리 구조로 설계하고, 다른 사용자의 워크스페이스를 '내 워크스페이스로 가져오기'(포크) 기능까지 구현해 로드맵 재사용 흐름 완성",
          "React Query 캐싱 전략과 낙관적 업데이트(Optimistic Update)를 적용해 좋아요·댓글 액션의 체감 반응 속도 개선",
          "불필요한 리렌더링을 최소화한 리스트 렌더링 구조로 게시글이 많아져도 끊김 없는 스크롤 경험 확보"
        ]
      },
      {
        title: "관리자 페이지 단독 설계 및 구현",
        items: [
          "회원·계정 상태 관리, 게시글/댓글 통합 모니터링, 신고 처리까지 아우르는 관리자 콘솔을 전체 설계",
          "게시판별 게시글·댓글·좋아요 현황을 한눈에 파악할 수 있는 통계 대시보드 화면 구현",
          "사용자가 요청한 기술 스택을 관리자가 검토해 승인·거절·수정할 수 있는 워크플로우를 설계해 커뮤니티 데이터 품질 관리 체계 구축",
          "Supabase service role key가 기능 구분 없이 무분별하게 쓰이며 과도한 권한이 노출될 수 있는 문제를 직접 진단하고, users 관련 로직에 한해서만 service role key를 쓰도록 범위를 재설계해 최소 권한 원칙 기반 보안 정책을 주도적으로 수립",
          "Supabase RLS(Row Level Security) 기반으로 관리자/일반 사용자 역할별 데이터 접근 권한을 세분화해 안전한 권한 체계 구축"
        ]
      }
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Query", "Axios", "Zustand", "Firebase (회원)", "Supabase (DB)"],
    tools: ["OpenAI API", "Figma", "GitHub"],
    color: "green",
    link: "https://github.com/Juhyoungd/NEXTSTEP_KT_2025",
    demoLink: "https://nextstep-kt-2025.vercel.app/"
  },
];