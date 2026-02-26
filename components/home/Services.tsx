export default function Services() {
  const services = [
    {
      title: '경영 전략 컨설팅',
      description: '기업의 현재 상태를 정밀 분석하여 중장기 로드맵과 실행 전략을 수립합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEj56HKlq0mmZ77lrPCk580yPxpothE-v3463dBxKf5Ehx_444BWPvNn_NFzU_iYjVbjJVu_5i-Wa129oT_erp38QAa-q4sTUqOI5tbUEh2h7GxvjxT7yDdarQPeR5WUQvKrdbxPUHdnXBxWBUEgDYMmtLILbVQUrAgUjdZKlfXLafc11NfjLO3JkNb9EZDB5PMD1Nq7A_yx8PeW79uGZ028sezOvFdNfjNR6vnXjpoffQXx7MIwLo6a17okTS8z7yE6qL0-1Z3-Hk',
      alt: 'Legal book',
    },
    {
      title: '퍼포먼스 마케팅',
      description: '타겟 고객의 유입부터 전환까지 전 과정을 최적화하여 매출 극대화를 돕습니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7mu6K5WYJMjsdXyF8m3SmjD-cF9oqxI_iqbWw2HaIFjKmaZ1U7p4Sv0EexnnbZuRtPhlG9cz6H2tbVC69WwCGzsNY6HdtkEo0LZ2hMpm_Y9Vpbdz8LCvuDjizMDWr6k5Q1GV_7Egr8eY75eRIvo0VLW0vIDneEuhFkbW4M4vekb31kpWRVtCAd5a4RoLxUAVZnWk1cIi6vE5XSjY917Pz8BMaiZmaXOmrpZTU234xT92RgE_IKSmAfHWhkjOiiWWMdCf76cV_-p2',
      alt: 'Blog writing',
    },
    {
      title: '브랜드 아이덴티티',
      description: '시장에서 독보적인 위치를 점할 수 있는 브랜드 스토리와 비주얼을 구축합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUqyrlOf1Szy2rvwBAiA00HI0xvscnXG8NJEeFnxoGXaZYb3G7zizCbL0M61PGknN4rSi3IP9RWSwEeFNSmnHKuHo6TyL3TQ7ujvi6wdvqT8GW9X8FO49tAz7IKANv3uqt-jULufUcp1XyPF803-n1WOj40UgWGMyrMWqRDc9vdsO_jkMTc8mvJo4cjgNHolskbdQELi5oLhcwzFF2kHJ6GUoAsG1yuG0Joi60u_K02vV3bZ6hyWYnBNTfzeoxKxNSi355jn646yG1',
      alt: 'Business data',
    },
    {
      title: '디지털 트랜스포메이션',
      description: 'IT 기술을 접목하여 비즈니스 효율성을 높이고 새로운 기회를 창출합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4XNHJIOKxxFm2zPnEvrhwxObEU89BKy0YklPOBwdtHSmot2f_SdRd09HMc1o1wlgBLu9gwLeunACGqlQ2qaJ2sbnSByHfqXD6ZhdzXx2ShahvRv7RQmAEl-1q8WlWlLxAYaY6te35u7NSRTccjgSvg9cAcrQhuvNG7LxHyEPmKU0sK4Rxq2vo61ezFvoDsfaIDm-_pocW94tqGtSpfg3rdZV2TTjVDkukgM64UvSwNII2mk4TDbcw2dI4fd7grxb36_YwTXn0938B',
      alt: 'Social media',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-background-dark" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-24">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 leading-tight text-slate-900 dark:text-slate-100">성장을 가속화하는 핵심 솔루션</h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">복잡한 비즈니스 환경에서도 흔들리지 않는 명확한 성공 방정식을 제시합니다.</p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group p-6 bg-card-light dark:bg-card-dark rounded-2xl border border-transparent hover:border-primary transition-all">
                <img
                  alt={service.alt}
                  className="w-full h-40 object-cover rounded-xl mb-6 grayscale group-hover:grayscale-0 transition-all"
                  src={service.image}
                />
                <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">{service.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
