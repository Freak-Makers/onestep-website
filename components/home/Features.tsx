export default function Features() {
  const features = [
    {
      icon: 'psychology',
      title: '본질적인 문제 해결',
      description: '표면적인 현상보다 비즈니스의 근본적인 문제를 진단하고 해결책을 제시합니다.',
    },
    {
      icon: 'business_center',
      title: '통합 비즈니스 설계',
      description: '단편적인 접근이 아닌 경영 전반을 고려한 효율적인 프로세스를 구축합니다.',
    },
    {
      icon: 'ads_click',
      title: '핵심 가치 최적화',
      description: '기업이 가진 고유의 강점을 극대화할 수 있는 커스터마이징 전략을 수립합니다.',
    },
    {
      icon: 'rocket_launch',
      title: '데이터 기반 성과 도출',
      description: '추측이 아닌 객관적인 지표를 바탕으로 실질적인 성장을 증명합니다.',
    },
  ];

  return (
    <section id="why" className="py-24 bg-card-light dark:bg-background-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">왜 원스텝 컨설팅일까요?</h2>
        <p className="text-slate-500 dark:text-slate-400">각 분야의 실전 전문가들이 모여 최적의 비즈니스 솔루션을 제공합니다.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-card-dark p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">{feature.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
