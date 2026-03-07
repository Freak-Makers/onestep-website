import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function HomePortfolio() {
  const stories = [
    {
      title: '스타트업 글로벌 확장 전략',
      category: '경영 전략 컨설팅',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD1anjEHGcW1fN-yOZLfI9P72vPRxBY-kjcqDZmQSEY7qoAHsbHYZ0yRTUMDafFF119ijG3-0XqjqcA_ae409xxQo5kR9L3zEV822kOF-YZTLbGGN8WtUH0ksmlkUd_M5rZdpEAuN1TWf4lzlFwqKAlHBCCUE9_vfhOJ-yaD82B7o-q1S4WtAKt9rwa0ko_zP4Skxaf4Z8ZrzwpVYVHV0YXJBRN_r1FvxN1u262zwFrtB_FZMAuFwtjJfFhbwq0BmW4yfCjN-FacXoa',
    },
    {
      title: '리테일 브랜드 운영 효율화',
      category: '브랜드 아이덴티티',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDKsaVW9NTjQ9Soj6Q6z4vjaAg8D24B-eSMFa8HnU8Pz_7-mG-iV7zA9PHJCtrXQz_RWB52O67_eAvmj3jCus8dRvOprhgIXS0nT9KBfMHN_aKY6tj-fVpRmXJ9-ELPdrR44oV8teXxz9y8CZ5hBFfuSxOU8V3J2ck3p2_zX-r-W8idKXX7OQPkdL6AcirYPtGpQFZtWj46ofAgH8eFpR9YyvZIBF4zc5ZsT8GsPlHypHmMEHXq0S5dXjOLBwk6L99buTiOYKrZDN0c',
    },
    {
      title: '핀테크 플랫폼 리포지셔닝',
      category: '퍼포먼스 마케팅',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAVFdSyguwK10H0wXjXSZzC73hCp6PEG6cEYjcHV2slbTGkdWgIQhYK-rrfkwjiozuqimVcZkFWyBbjgZep8lQZPv4uRZHTRnyizQbM0WhSLc6ExWWdkIqIJvRMU_QqgHtl497OJ7Gb7VBazC7gBwloyJacWN1duS5vs7zNcHLJRURP4WxnaWYGArF33lYxyfaptuR454erYKPW-cUoqDy1XbZRrcEVJM3W35SsAyONDHli_Rmeszt_fA6cEktR0KuvhUzYqRqwxSal',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-background-dark" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex justify-between items-end mb-12">
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-slate-100">Portfolio</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
              원스텝 컨설팅과 함께 성장한 프로젝트들을 소개합니다.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="hidden sm:inline-flex items-center gap-1 text-primary font-bold text-sm hover:gap-2 transition-all"
          >
            전체 보기
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <ScrollReveal key={index} delay={index * 100} from="bottom">
            <Link href="/portfolio" className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={story.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-semibold text-blue-300 mb-1 block">{story.category}</span>
                  <h4 className="text-white font-bold text-base leading-snug">{story.title}</h4>
                </div>
              </div>
            </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
