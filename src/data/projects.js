// data/projects.js
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
    korTitle: "개발자 학습 로드맵 시각화·관리·공유 플랫폼",
    subtitle: "AI 기반 기술 추천 & 트렌드 분석 플랫폼",
    description: "개인 워크스페이스에서 기술 로드맵을 구성하고 공유/피드백까지 연결하는 Next.js 기반 플랫폼입니다.",
    period: "2024.07 ~ 2024.09",
    repositoryLabel: "GitHub Repository",
    paperTitle: "Project README",
    introduction: "개발자의 학습 로드맵을 시각화·관리·공유할 수 있도록 설계된 실전 아키텍처 프로젝트",
    details: [
      "사용자별 워크스페이스를 생성하고 기술(Tech) 기반 로드맵을 트리 구조로 구성",
      "로드맵 진행 상태를 관리하고 완료 여부를 체크할 수 있음",
      "워크스페이스 공유 게시글, 좋아요, 댓글/대댓글로 커뮤니티 피드백 흐름 제공"
    ],
    teamInfo: "구성 : 프론트엔드/백엔드/DB 4인 협업",
    imageCaption: "Next Step 메인 화면 스크린샷",
    background: [
      "개발자 학습은 기록에서 끝나지 않고 공유/피드백 기반 성장으로 확장될 필요가 있음",
      "학습 과정을 시각적으로 구조화하고 지속 관리할 수 있는 개인 워크스페이스 도구가 필요했음"
    ],
    implementation: [
      "Next.js(App Router) + TypeScript 기반 구조에서 Feature-Sliced Design(FSD) 도메인 분리 적용",
      "React Query, Zustand를 활용해 비동기 데이터와 클라이언트 상태를 분리 관리",
      "Supabase(PostgreSQL) + RLS로 사용자/워크스페이스/로드맵/게시글/댓글 데이터 모델 설계",
      "프로필 장식 아이템, 주문 시스템 등 커스터마이징 요소와 커뮤니티 기능을 함께 제공",
      "Gemini, Claude를 활용한 AI 기능과 트렌드 분석 흐름을 서비스에 통합"
    ],
    outcomes: [
      "NEXTSTEP 서비스 구현 및 배포 완료",
      "개인 학습 관리 + 커뮤니티 공유를 결합한 학습 플랫폼 구조 검증",
      "실전 아키텍처(FSD, RLS, App Router) 기반 협업 개발 경험 확보"
    ],
    contributions: [
      {
        title: "로드맵/워크스페이스 기능 구현",
        items: [
          "기술 로드맵 트리 구조 관리 및 진행 상태 UI/로직 구현",
          "워크스페이스 화면 구성과 데이터 흐름 정리",
          "상태 관리 및 API 연동 패턴을 기능 단위로 분리"
        ]
      },
      {
        title: "커뮤니티 및 서비스 안정화",
        items: [
          "게시글/댓글/대댓글 기반 공유 기능 및 상호작용 흐름 구현",
          "배포 및 QA 과정에서 사용자 시나리오 기반 버그 수정/개선"
        ]
      }
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "RLS", "React Query", "Zustand", "FSD", "Tailwind CSS"],
    color: "green",
    link: "https://github.com/Juhyoungd/NEXTSTEP_KT_2025"
  },
];