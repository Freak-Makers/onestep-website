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
    slug: 'marketing-trends-for-professionals',
    title: '【뉴스레터】 전문직을 위한 마케팅 트렌드를 받아보세요 (매주 월요일 오전)',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp9prqmVLK6kWOTbSjNriQjdcsp9acRidiDASXnYThlCKW0TeLPYSn7q-0SB_AH1t6mXFKtnMbOTH0J56-8MwX-2haOGunHYRZg6xXqOzlhfeKkVU-S7g8Y_X78m2IlEI-SaBBQKgLoYqRwJfSSiQ7N4r9dNseyeluhthuKX02BudztEQ1Ivp3ntt1EeLXPFtlR3D0EWNc3MO5iWvP5WscQHRoiMxcYVi5chEwhAqRBTYbEwdB05TvLD0ODeC8oXRBUdr4CXETsHSw',
    category: '공지',
    badge: '공지',
    publishedAt: '2025-03-01',
    excerpt: '매주 월요일 전문직 마케팅 인사이트를 받아보세요.',
  },
  {
    id: 2,
    slug: 'interior-blog-marketing-case-study',
    title: '인테리어 블로그 마케팅, 비포 애프터 콘텐츠로 1달 만에 수입만 11건 받아드린 사례 🔥',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEj56HKlq0mmZ77lrPCk580yPxpothE-v3463dBxKf5Ehx_444BWPvNn_NFzU_iYjVbjJVu_5i-Wa129oT_erp38QAa-q4sTUqOI5tbUEh2h7GxvjxT7yDdarQPeR5WUQvKrdbxPUHdnXBxWBUEgDYMmtLILbVQUrAgUjdZKlfXLafc11NfjLO3JkNb9EZDB5PMD1Nq7A_yx8PeW79uGZ028sezOvFdNfjNR6vnXjpoffQXx7MIwLo6a17okTS8z7yE6qL0-1Z3-Hk',
    category: '사업 자금',
    publishedAt: '2025-02-25',
    excerpt: '비포 애프터 콘텐츠 하나로 월 11건 수임에 성공한 전략을 공개합니다.',
  },
  {
    id: 3,
    slug: 'food-shopping-essential-marketing',
    title: '식품 쇼핑몰 세팅 후 바로 해야 되는 필수 마케팅 3가지',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7mu6K5WYJMjsdXyF8m3SmjD-cF9oqxI_iqbWw2HaIFjKmaZ1U7p4Sv0EexnnbZuRtPhlG9cz6H2tbVC69WwCGzsNY6HdtkEo0LZ2hMpm_Y9Vpbdz8LCvuDjizMDWr6k5Q1GV_7Egr8eY75eRIvo0VLW0vIDneEuhFkbW4M4vekb31kpWRVtCAd5a4RoLxUAVZnWk1cIi6vE5XSjY917Pz8BMaiZmaXOmrpZTU234xT92RgE_IKSmAfHWhkjOiiWWMdCf76cV_-p2',
    category: '기업 절세',
    publishedAt: '2025-02-20',
    excerpt: '쇼핑몰 오픈 직후 반드시 실행해야 할 마케팅 3단계를 알려드립니다.',
  },
  {
    id: 4,
    slug: 'hotel-marketing-customer-acquisition',
    title: '호텔 마케팅, 고객을 유입하는 쉬운 방법 다 알려드릴게요',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUqyrlOf1Szy2rvwBAiA00HI0xvscnXG8NJEeFnxoGXaZYb3G7zizCbL0M61PGknN4rSi3IP9RWSwEeFNSmnHKuHo6TyL3TQ7ujvi6wdvqT8GW9X8FO49tAz7IKANv3uqt-jULufUcp1XyPF803-n1WOj40UgWGMyrMWqRDc9vdsO_jkMTc8mvJo4cjgNHolskbdQELi5oLhcwzFF2kHJ6GUoAsG1yuG0Joi60u_K02vV3bZ6hyWYnBNTfzeoxKxNSi355jn646yG1',
    category: '부동산 금융',
    publishedAt: '2025-02-15',
    excerpt: '호텔 업종 특성에 맞는 온라인 고객 유입 전략을 정리했습니다.',
  },
  {
    id: 5,
    slug: 'naver-blog-marketing-success-formula',
    title: '인테리어블로그마케팅, 필승 성공 공식 3가지 전부 알려드립니다.',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4XNHJIOKxxFm2zPnEvrhwxObEU89BKy0YklPOBwdtHSmot2f_SdRd09HMc1o1wlgBLu9gwLeunACGqlQ2qaJ2sbnSByHfqXD6ZhdzXx2ShahvRv7RQmAEl-1q8WlWlLxAYaY6te35u7NSRTccjgSvg9cAcrQhuvNG7LxHyEPmKU0sK4Rxq2vo61ezFvoDsfaIDm-_pocW94tqGtSpfg3rdZV2TTjVDkukgM64UvSwNII2mk4TDbcw2dI4fd7grxb36_YwTXn0938B',
    category: '개인 재무',
    publishedAt: '2025-02-10',
    excerpt: '수많은 인테리어 블로그 마케팅을 진행하며 도출한 성공 공식입니다.',
  },
  {
    id: 6,
    slug: 'english-academy-naver-marketing',
    title: '영어학원 홍보, 클라이언트만 80명 넘게 관리한 마케터가 알려드릴게요 (네이버 편)',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAehSQONhEsEa4ad5yiSDZTB16hwrzft9x2FjVAeeDSWfMS6Gk4AK8QATytIe9H904TmJ-lioDnUdUxfdorJnMEQNBnJiTCil0uYwqFv-1NNXPptYo_rM4ZEP8vGJyEz8hT-6xfwYGOeIHNwvuP629qkJowfZGbJXHo4DzakI4d9x7ToWRv73eW8QIkiNeRTg0WwIYv0I_coleOtbgrno1Y0hDvOb1QuaqOdxJl2YmSpxPor2sTOQh1EIR-OBEXZ_8t7t4ofS5yJ3FH',
    category: '창업 자금',
    publishedAt: '2025-02-05',
    excerpt: '80명 이상의 학원 클라이언트 경험에서 추출한 네이버 마케팅 핵심 전략.',
  },
  {
    id: 7,
    slug: 'it-company-revenue-220-percent',
    title: 'IT 업체 3달 만에 매출 220% 상승! 마케팅은 이렇게 하세요.',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1anjEHGcW1fN-yOZLfI9P72vPRxBY-kjcqDZmQSEY7qoAHsbHYZ0yRTUMDafFF119ijG3-0XqjqcA_ae409xxQo5kR9L3zEV822kOF-YZTLbGGN8WtUH0ksmlkUd_M5rZdpEAuN1TWf4lzlFwqKAlHBCCUE9_vfhOJ-yaD82B7o-q1S4WtAKt9rwa0ko_zP4Skxaf4Z8ZrzwpVYVHV0YXJBRN_r1FvxN1u262zwFrtB_FZMAuFwtjJfFhbwq0BmW4yfCjN-FacXoa',
    category: '사업 자금',
    publishedAt: '2025-01-30',
    excerpt: 'IT 솔루션 업체의 3개월 마케팅 성과 사례를 공개합니다.',
  },
  {
    id: 8,
    slug: 'instagram-content-not-enough',
    title: '인스타관리대행, 아무리 콘텐츠를 올려도 매출이 안 오르는 이유',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKsaVW9NTjQ9Soj6Q6z4vjaAg8D24B-eSMFa8HnU8Pz_7-mG-iV7zA9PHJCtrXQz_RWB52O67_eAvmj3jCus8dRvOprhgIXS0nT9KBfMHN_aKY6tj-fVpRmXJ9-ELPdrR44oV8teXxz9y8CZ5hBFfuSxOU8V3J2ck3p2_zX-r-W8idKXX7OQPkdL6AcirYPtGpQFZtWj46ofAgH8eFpR9YyvZIBF4zc5ZsT8GsPlHypHmMEHXq0S5dXjOLBwk6L99buTiOYKrZDN0c',
    category: '개인 재무',
    publishedAt: '2025-01-25',
    excerpt: '콘텐츠만으로는 부족한 이유와 매출 전환을 위한 핵심 요소를 설명합니다.',
  },
  {
    id: 9,
    slug: 'professional-marketing-customer-acquisition',
    title: '전문직마케팅, 고객이 제 발로 찾아오게 만드는 방법 1가지',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVFdSyguwK10H0wXjXSZzC73hCp6PEG6cEYjcHV2slbTGkdWgIQhYK-rrfkwjiozuqimVcZkFWyBbjgZep8lQZPv4uRZHTRnyizQbM0WhSLc6ExWWdkIqIJvRMU_QqgHtl497OJ7Gb7VBazC7gBwloyJacWN1duS5vs7zNcHLJRURP4WxnaWYGArF33lYxyfaptuR454erYKPW-cUoqDy1XbZRrcEVJM3W35SsAyONDHli_Rmeszt_fA6cEktR0KuvhUzYqRqwxSal',
    category: '부동산 금융',
    publishedAt: '2025-01-20',
    excerpt: '전문직 종사자를 위한 자연 유입 마케팅의 핵심 원리를 소개합니다.',
  },
  {
    id: 10,
    slug: 'startup-branding-strategy',
    title: '창업 초기 브랜딩, 이것만 지키면 실패하지 않습니다',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKrX5hbfFsbNDsFv3UWn9DaRzXQHdNRKtqN3PDO-YgHrkx8wZa9fqVKbvQfgw_4vEYU1AVO2-u5_kV7O6ZyKtY71WTNKC_xcgeqdJlT3_VoHJFe5z580BflUZDnvcbrDmMwHJYduFA5EDBjSjGTY7b6LSKYbLQ6kHVMUgZXo6fVBuiOpNV7gCViZ54L7DkBFQfw2FwDnUNlxS5oG8Q7iLJJ8hCGdyorDQUEhOqAFi2M1OIviwqI4J2Gz77_5IAv0w-flksFQm7tAu7',
    category: '창업 자금',
    publishedAt: '2025-01-15',
    excerpt: '브랜딩 없이 시작한 창업의 90%가 실패하는 이유와 해결책.',
  },
  {
    id: 11,
    slug: 'real-estate-digital-marketing',
    title: '부동산 중개 디지털 마케팅, 블로그로 월 30건 문의 만드는 법',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy5gRRAmNNJB_DR-8jTJmW41kJfHrCSP9pa7ap6eZjPlj73UCHm492Tvz9sq6sYqLYRL3LqdIXuguZgLyW0wAzOcuASY-25vAMDtrvoMKGiF8wRCzaDS7O7DcrQWEwUAZnaYb0cMDYbZrU2ZnB-zcDB0n9xaqocElpcijFkxKfvuN_W_d-MbyOe59gCc5wXW3ourT5n_E33vuCOLkpPydX5wujD2bWoD09eW5uu3Ap44n_GA4LKk3AG0_zb7bOUShjB7lKBdO4iguf',
    category: '부동산 금융',
    publishedAt: '2025-01-10',
    excerpt: '부동산 중개업소가 블로그만으로 월 30건 문의를 달성한 전략.',
  },
  {
    id: 12,
    slug: 'tax-saving-corporate-strategy',
    title: '법인 절세 전략 5가지, 대표님이 반드시 알아야 할 절세 노하우',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzXHp2PpOVASKNsBoBp-7N5k1-LUKIrg4OQZ0OHQZldwNdml6RCFeWrrP7VG9m4Lml9j8wS6vC7UK8rjgMRUUTNsmDEQhg-X423oAGUnHq47QENEJW5HWhSQVXBpoWnlrkNwOPZdAzouIBJhnvHU-LTcfEZwTcpgj1nk_QNsZW5Cnw8-vnzhaipzCPPSQpPWeVh-jtuBSzE1gyU68RPRV201hvmyQkHYcdyxXt_r8bue0QCYFRXtvMdi5lv40jviyw1IGH7tLkM2',
    category: '기업 절세',
    publishedAt: '2025-01-05',
    excerpt: '절세는 선택이 아닌 필수입니다. 법인 운영 시 놓치기 쉬운 절세 항목 5가지.',
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
