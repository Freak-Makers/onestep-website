import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function Services() {
  const services = [
    {
      title: '전문직 마케팅',
      description: '전문직 분야에 특화된 디지털 마케팅 전략',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDEj56HKlq0mmZ77lrPCk580yPxpothE-v3463dBxKf5Ehx_444BWPvNn_NFzU_iYjVbjJVu_5i-Wa129oT_erp38QAa-q4sTUqOI5tbUEh2h7GxvjxT7yDdarQPeR5WUQvKrdbxPUHdnXBxWBUEgDYMmtLILbVQUrAgUjdZKlfXLafc11NfjLO3JkNb9EZDB5PMD1Nq7A_yx8PeW79uGZ028sezOvFdNfjNR6vnXjpoffQXx7MIwLo6a17okTS8z7yE6qL0-1Z3-Hk',
    },
    {
      title: '블로그 마케팅',
      description: '네이버 블로그 상위 노출 최적화',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7mu6K5WYJMjsdXyF8m3SmjD-cF9oqxI_iqbWw2HaIFjKmaZ1U7p4Sv0EexnnbZuRtPhlG9cz6H2tbVC69WwCGzsNY6HdtkEo0LZ2hMpm_Y9Vpbdz8LCvuDjizMDWr6k5Q1GV_7Egr8eY75eRIvo0VLW0vIDneEuhFkbW4M4vekb31kpWRVtCAd5a4RoLxUAVZnWk1cIi6vE5XSjY917Pz8BMaiZmaXOmrpZTU234xT92RgE_IKSmAfHWhkjOiiWWMdCf76cV_-p2',
    },
    {
      title: '사업자 마케팅',
      description: '소상공인·자영업자 맞춤 마케팅 전략',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUqyrlOf1Szy2rvwBAiA00HI0xvscnXG8NJEeFnxoGXaZYb3G7zizCbL0M61PGknN4rSi3IP9RWSwEeFNSmnHKuHo6TyL3TQ7ujvi6wdvqT8GW9X8FO49tAz7IKANv3uqt-jULufUcp1XyPF803-n1WOj40UgWGMyrMWqRDc9vdsO_jkMTc8mvJo4cjgNHolskbdQELi5oLhcwzFF2kHJ6GUoAsG1yuG0Joi60u_K02vV3bZ6hyWYnBNTfzeoxKxNSi355jn646yG1',
    },
    {
      title: '인스타 마케팅',
      description: '인스타그램 콘텐츠 제작 및 관리 대행',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB4XNHJIOKxxFm2zPnEvrhwxObEU89BKy0YklPOBwdtHSmot2f_SdRd09HMc1o1wlgBLu9gwLeunACGqlQ2qaJ2sbnSByHfqXD6ZhdzXx2ShahvRv7RQmAEl-1q8WlWlLxAYaY6te35u7NSRTccjgSvg9cAcrQhuvNG7LxHyEPmKU0sK4Rxq2vo61ezFvoDsfaIDm-_pocW94tqGtSpfg3rdZV2TTjVDkukgM64UvSwNII2mk4TDbcw2dI4fd7grxb36_YwTXn0938B',
    },
    {
      title: '홈 · 쇼핑몰 기획/제작',
      description: '맞춤형 쇼핑몰 기획 및 구축 솔루션',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA5XutlJNAMh2veUYdvQ2dxtI9kEUpzS1e6xnbAtURR2SKq1ePTjk-NdfgtqnUJf4MpyTqYgT-2eqegPiBUoDeme95LB6dbqzdLr041RjvTE8yzCXUnPsHC9XD67YDe5dY7jqLzYZPyU8k3g9SGoogbf_LIYjYP5oHFdLxC2ukGBrim8xLI-AYdKvlihk-v2kv709g5cYNaTbpmboKGXKXyTbjc4e813m8QIkAYCdEdC4ANcltkmWfjQYyOH1JgPWFxcot0GO0_tEhb',
    },
    {
      title: '홈페이지 제작',
      description: '브랜드 가치를 담은 전문 홈페이지 제작',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA8c4PtJjB2OjD_O1FIx3wTqjRTFNpbcv2DzNTRUWBTPifu8HA4asYm6xc2vhS4HqucOxdhcH3lxzmEBNq_cRJa_7wQLcKK-_HXr7OMceK_6nmdfJqQ6BY7BPuHXsgM8AI4lVQcm5QMAv_xEk_pjP1639_hf12AjwCTBHVMxwsWptLUDMeNR1O3G5WgAysFU1GJxYPKBV2ZcceNtO7I3_HdsCFLETGWa0hwAT6hz96oJX8Rd6Qqbaw4RrSB',
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
              비즈니스를<br />세상과 연결하다
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
              복잡한 비즈니스 환경에서도 흔들리지 않는 명확한 성공 방정식을 제시합니다.
              대표님의 비즈니스에 딱 맞는 솔루션을 설계합니다.
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
