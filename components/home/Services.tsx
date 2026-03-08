import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function Services() {
  const services = [
    {
      title: '부동산 매입 자금 컨설팅',
      description: '내 집 마련부터 수익형 투자까지 자금 구조를 설계합니다',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAQXUf6JnDTQSL0g8xgSJSfOUT7SRnGmC0Va4PrcdfwES616dTgyS79IcadvI33tXOxJs0Imf_n-wwfkHeKYJknrMXxxQZ5sxzOAK-t18B_k_7d581LOyoerApOVUFLl7oTITq9JFSAf8X7rUj0riX0PEmsD7Q-yNplDjpx9IzT9arG0f-K4CxEbgLFEj9mu1bg7pldoGJMs8yLEOFbqZWu4zA_hwjpHCJZLXx5SHiMavlCsW5RtoEcNsCfl2EJaTA_COlDOtaXlHsr',
    },
    {
      title: '정책자금 컨설팅',
      description: '창업자·사업자를 위한 무상지원금 및 융자금 전략 수립',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCariLsw8PvqlKn3FKGngyUCoN7e6sdzvWiIyVU3Bp0aoR77NMqW-FIycRcmModYphZdmTBkYo_fwHCwxkUQZAofEjmY0lIsFU-tPk8xVTqWle9uOifHF9la8czCLDLLAh4M8SAx_qIbG20qPI2FDQqkbpFQC2jm4XaaRNR5Pnt1D3dnP9mP7u5ZuUKWi7PGrNsbOngE_i6Wl7M835aomBclmhNLvePMS5PCzoBdK8DNc3vy9sQhkTXMg5hipeijuSQbg3nLKOxalY2',
    },
    {
      title: '기업인증 자문',
      description: '벤처·메인비즈·이노비즈·ISO 인증으로 기업 가치를 높입니다',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUqyrlOf1Szy2rvwBAiA00HI0xvscnXG8NJEeFnxoGXaZYb3G7zizCbL0M61PGknN4rSi3IP9RWSwEeFNSmnHKuHo6TyL3TQ7ujvi6wdvqT8GW9X8FO49tAz7IKANv3uqt-jULufUcp1XyPF803-n1WOj40UgWGMyrMWqRDc9vdsO_jkMTc8mvJo4cjgNHolskbdQELi5oLhcwzFF2kHJ6GUoAsG1yuG0Joi60u_K02vV3bZ6hyWYnBNTfzeoxKxNSi355jn646yG1',
    },
    {
      title: '기업 절세 컨설팅',
      description: '급여·배당·상속·증여 구조로 세무 부담을 최적화합니다',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA5XutlJNAMh2veUYdvQ2dxtI9kEUpzS1e6xnbAtURR2SKq1ePTjk-NdfgtqnUJf4MpyTqYgT-2eqegPiBUoDeme95LB6dbqzdLr041RjvTE8yzCXUnPsHC9XD67YDe5dY7jqLzYZPyU8k3g9SGoogbf_LIYjYP5oHFdLxC2ukGBrim8xLI-AYdKvlihk-v2kv709g5cYNaTbpmboKGXKXyTbjc4e813m8QIkAYCdEdC4ANcltkmWfjQYyOH1JgPWFxcot0GO0_tEhb',
    },
    {
      title: '개인 재무 컨설팅',
      description: '보험 점검부터 생애주기 포트폴리오까지 재무를 설계합니다',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB4XNHJIOKxxFm2zPnEvrhwxObEU89BKy0YklPOBwdtHSmot2f_SdRd09HMc1o1wlgBLu9gwLeunACGqlQ2qaJ2sbnSByHfqXD6ZhdzXx2ShahvRv7RQmAEl-1q8WlWlLxAYaY6te35u7NSRTccjgSvg9cAcrQhuvNG7LxHyEPmKU0sK4Rxq2vo61ezFvoDsfaIDm-_pocW94tqGtSpfg3rdZV2TTjVDkukgM64UvSwNII2mk4TDbcw2dI4fd7grxb36_YwTXn0938B',
    },
    {
      title: '네트워크 자문',
      description: '세무사·법무사·노무사 등 전문 파트너를 연결합니다',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-blue-50 dark:bg-background-dark/50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left sticky sidebar */}
          <ScrollReveal from="left" className="lg:w-1/3 lg:sticky lg:top-24">
            <span className="section-label">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900 dark:text-slate-100">
              금융의 복잡함을<br />명확하게 풀어드립니다
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
              원스텝은 5개 분야의 전문 컨설팅을 하나의 창구에서 제공합니다.
              고객의 상황에 맞는 최적의 전략을 함께 설계합니다.
            </p>
          </ScrollReveal>

          {/* Right 3x2 grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 80} from="bottom">
              <div
                className="group bg-white dark:bg-card-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm md:text-base leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
