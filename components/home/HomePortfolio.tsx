export default function HomePortfolio() {
  const stories = [
    {
      title: '스타트업 글로벌 확장 전략',
      description: '시장 조사, 로컬라이징, 통합 브랜딩',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1anjEHGcW1fN-yOZLfI9P72vPRxBY-kjcqDZmQSEY7qoAHsbHYZ0yRTUMDafFF119ijG3-0XqjqcA_ae409xxQo5kR9L3zEV822kOF-YZTLbGGN8WtUH0ksmlkUd_M5rZdpEAuN1TWf4lzlFwqKAlHBCCUE9_vfhOJ-yaD82B7o-q1S4WtAKt9rwa0ko_zP4Skxaf4Z8ZrzwpVYVHV0YXJBRN_r1FvxN1u262zwFrtB_FZMAuFwtjJfFhbwq0BmW4yfCjN-FacXoa',
    },
    {
      title: '리테일 브랜드 운영 효율화',
      description: '물류 최적화, 재고 관리 시스템 도입',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKsaVW9NTjQ9Soj6Q6z4vjaAg8D24B-eSMFa8HnU8Pz_7-mG-iV7zA9PHJCtrXQz_RWB52O67_eAvmj3jCus8dRvOprhgIXS0nT9KBfMHN_aKY6tj-fVpRmXJ9-ELPdrR44oV8teXxz9y8CZ5hBFfuSxOU8V3J2ck3p2_zX-r-W8idKXX7OQPkdL6AcirYPtGpQFZtWj46ofAgH8eFpR9YyvZIBF4zc5ZsT8GsPlHypHmMEHXq0S5dXjOLBwk6L99buTiOYKrZDN0c',
    },
    {
      title: '핀테크 플랫폼 리포지셔닝',
      description: 'UX/UI 개선, 타겟팅 마케팅 전략',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVFdSyguwK10H0wXjXSZzC73hCp6PEG6cEYjcHV2slbTGkdWgIQhYK-rrfkwjiozuqimVcZkFWyBbjgZep8lQZPv4uRZHTRnyizQbM0WhSLc6ExWWdkIqIJvRMU_QqgHtl497OJ7Gb7VBazC7gBwloyJacWN1duS5vs7zNcHLJRURP4WxnaWYGArF33lYxyfaptuR454erYKPW-cUoqDy1XbZRrcEVJM3W35SsAyONDHli_Rmeszt_fA6cEktR0KuvhUzYqRqwxSal',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-background-dark" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6 sm:gap-0">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-slate-100">Success Stories</h2>
            <p className="text-slate-500 dark:text-slate-400">원스텝 컨설팅과 함께 혁신적인 성장을 이룬 프로젝트들을 소개합니다.</p>
          </div>
          <div className="flex gap-2 self-end sm:self-auto">
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <img
                  alt={`Portfolio item ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={story.image}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold border border-white px-6 py-2 rounded-full">자세히 보기</span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">{story.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
