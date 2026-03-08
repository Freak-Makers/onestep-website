// ──────────────────────────────────────────────
// 칼럼(블로그) 데이터 레이어
// TODO: DB 연동 시 getAllPosts / getPostBySlug 함수 내부만 교체하면 됩니다.
//       예) Prisma: return prisma.columnPost.findMany({ orderBy: { publishedAt: 'desc' } })
//           Supabase: const { data } = await supabase.from('column_posts').select('*')
// ──────────────────────────────────────────────

export type ColumnPost = {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
  category: string;        // 카테고리 (예: '부동산 금융', '개인 재무')
  badge?: string;          // 뱃지 텍스트 (예: '공지', '인기')
  publishedAt: string;     // ISO 날짜 문자열
  excerpt?: string;        // 미리보기 텍스트
};

// ── 목 데이터 (DB 연동 전 임시) ─────────────────
const MOCK_POSTS: ColumnPost[] = [
  {
    id: 1,
    slug: 'onestep-finance-newsletter',
    title: '【뉴스레터】 원스텝 금융 인사이트를 받아보세요 (매주 월요일 오전)',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    category: '공지',
    badge: '공지',
    publishedAt: '2025-03-01',
    excerpt: '부동산·정책자금·기업자문·세무·개인재무까지, 매주 월요일 금융 인사이트를 받아보세요.',
  },
  {
    id: 2,
    slug: 'home-purchase-fund-strategy',
    title: '내 집 마련 자금 설계, 처음부터 전략적으로 접근해야 하는 이유',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    category: '부동산 금융',
    publishedAt: '2025-02-25',
    excerpt: '대출 한도·금리·세금까지 한 번에 설계해야 손실 없는 내 집 마련이 가능합니다.',
  },
  {
    id: 3,
    slug: 'policy-fund-diagnosis-guide',
    title: '정책자금 신청 전 반드시 확인해야 할 진단 체크리스트 3가지',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    category: '사업 자금',
    publishedAt: '2025-02-20',
    excerpt: '준비 없이 신청하면 탈락입니다. 정책자금 심사에서 통과하는 사업자의 공통점을 정리했습니다.',
  },
  {
    id: 4,
    slug: 'real-estate-investment-fund-structure',
    title: '수익형 부동산 투자, 자금 구조 설계가 수익률을 결정합니다',
    thumbnail: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80',
    category: '부동산 금융',
    publishedAt: '2025-02-15',
    excerpt: '같은 물건도 자금 구조에 따라 실질 수익률이 달라집니다. 올바른 레버리지 설계법을 소개합니다.',
  },
  {
    id: 5,
    slug: 'insurance-rebalancing-guide',
    title: '보험 리밸런싱, 지금 당장 점검해야 하는 이유 3가지',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    category: '개인 재무',
    publishedAt: '2025-02-10',
    excerpt: '보험료는 내는데 정작 필요할 때 보장이 안 된다면? 생애주기에 맞는 보험 구조를 설명합니다.',
  },
  {
    id: 6,
    slug: 'startup-policy-fund-guide',
    title: '창업자가 반드시 알아야 할 정책자금 종류와 신청 전략',
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
    category: '창업 자금',
    publishedAt: '2025-02-05',
    excerpt: '무상지원금과 융자금의 차이, 어떤 창업자에게 무엇이 유리한지 구체적으로 알아봅니다.',
  },
  {
    id: 7,
    slug: 'venture-certification-benefits',
    title: '벤처기업 인증, 받으면 달라지는 세금과 자금 조달 혜택 총정리',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    category: '사업 자금',
    publishedAt: '2025-01-30',
    excerpt: '벤처 인증 하나로 세금 감면·정책자금 우대·투자 유치까지 유리해집니다. 조건과 절차를 정리했습니다.',
  },
  {
    id: 8,
    slug: 'retirement-portfolio-planning',
    title: '은퇴 준비, 40대부터 시작해야 하는 생애주기 재무 포트폴리오',
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    category: '개인 재무',
    publishedAt: '2025-01-25',
    excerpt: '국민연금만으로는 부족합니다. 연금·금융상품·부동산을 조합한 은퇴 전략 설계법을 소개합니다.',
  },
  {
    id: 9,
    slug: 'building-pf-investment-advisory',
    title: '건물·PF 투자 전, 반드시 거쳐야 할 자금 구조 자문 체크포인트',
    thumbnail: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    category: '부동산 금융',
    publishedAt: '2025-01-20',
    excerpt: '규모가 클수록 자금 구조 실수의 손실도 큽니다. 건물·PF 투자 전 반드시 확인할 항목을 정리했습니다.',
  },
  {
    id: 10,
    slug: 'corporation-founding-tax-design',
    title: '법인 설립 시 절세 구조 설계, 처음이 가장 중요합니다',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    category: '창업 자금',
    publishedAt: '2025-01-15',
    excerpt: '창업 초기 법인 구조를 잘못 잡으면 나중에 수정 비용이 더 큽니다. 올바른 설계 기준을 알아봅니다.',
  },
  {
    id: 11,
    slug: 'guarantee-institution-strategy',
    title: '신용보증기금 vs 기술보증기금, 우리 사업엔 어디가 유리할까요?',
    thumbnail: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80',
    category: '사업 자금',
    publishedAt: '2025-01-10',
    excerpt: '두 기관의 보증 조건·한도·심사 기준 차이를 실무 관점에서 비교 정리했습니다.',
  },
  {
    id: 12,
    slug: 'salary-dividend-tax-structure',
    title: '법인 대표의 급여·배당 구조, 절세 효과 극대화하는 설계 방법',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    category: '기업 절세',
    publishedAt: '2025-01-05',
    excerpt: '급여와 배당 비율을 어떻게 설정하느냐에 따라 연간 절세액이 수백만 원 차이 납니다.',
  },
];

// ── 데이터 접근 함수 ──────────────────────────
// DB 연동 시 이 함수들만 교체하세요.

export async function getAllPosts(): Promise<ColumnPost[]> {
  // TODO: DB 연동 예시
  // return prisma.columnPost.findMany({ orderBy: { publishedAt: 'desc' } })
  return MOCK_POSTS.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<ColumnPost | undefined> {
  // TODO: DB 연동 예시
  // return prisma.columnPost.findUnique({ where: { slug } })
  return MOCK_POSTS.find((p) => p.slug === slug);
}
