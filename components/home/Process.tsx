export default function Process() {
  const steps = [
    {
      icon: 'lightbulb',
      title: 'Brand Concept',
      description: '핵심 가치 발굴 및 방향성 수립',
      circleBg: 'bg-blue-100 dark:bg-blue-900/40',
      iconColor: 'text-primary',
    },
    {
      icon: 'edit_document',
      title: 'Project Execution',
      description: '전략 기반의 정밀한 솔루션 구축',
      circleBg: 'bg-blue-200 dark:bg-blue-800/40',
      iconColor: 'text-primary',
    },
    {
      icon: 'trending_up',
      title: 'Business Growth',
      description: '실시간 모니터링 및 고도화',
      circleBg: 'bg-blue-300 dark:bg-blue-700/40',
      iconColor: 'text-primary',
    },
    {
      icon: 'verified',
      title: 'Business Success',
      description: '지속 가능한 비즈니스 성장 달성',
      circleBg: 'bg-primary',
      iconColor: 'text-white',
      ring: 'ring-8 ring-blue-50 dark:ring-blue-900/20',
      shadow: 'shadow-xl',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-background-dark/50" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-slate-100">How We Work</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-16 max-w-xl mx-auto">
          체계적인 4단계 프로세스로 대표님의 비즈니스 성공을 만들어 냅니다.
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-4 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 -z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center max-w-[200px] z-10">
              <div
                className={`w-20 md:w-24 h-20 md:h-24 rounded-full ${step.circleBg} flex items-center justify-center ${step.iconColor} mb-4 shadow-lg ${step.ring ?? ''} ${step.shadow ?? ''}`}
              >
                <span className="material-symbols-outlined text-3xl md:text-4xl">{step.icon}</span>
              </div>
              <h4 className="font-bold mb-2 text-slate-900 dark:text-slate-100 text-sm md:text-base">
                {step.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center leading-relaxed">
                {step.description}
              </p>

              {/* Connector arrow (mobile) */}
              {index !== steps.length - 1 && (
                <div className="lg:hidden mt-4 text-slate-300">
                  <span className="material-symbols-outlined">south</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
