export default function Process() {
  const steps = [
    {
      icon: 'lightbulb',
      title: 'Core Concept',
      description: '핵심 가치 발굴 및 방향성 수립',
      bgColor: 'bg-blue-100',
    },
    {
      icon: 'edit_document',
      title: 'Strategic Build',
      description: '전략 기반의 정밀한 솔루션 구축',
      bgColor: 'bg-blue-200',
    },
    {
      icon: 'trending_up',
      title: 'Data Insight',
      description: '실시간 모니터링 및 고도화',
      bgColor: 'bg-blue-300',
    },
    {
      icon: 'verified',
      title: 'Scale-Up',
      description: '지속 가능한 비즈니스 성장 달성',
      bgColor: 'bg-primary',
      textColor: 'text-white',
      ring: 'ring-8 ring-blue-50 dark:ring-blue-900/20',
      shadow: 'shadow-xl',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-16 text-slate-900 dark:text-slate-100">How We Work</h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center max-w-[200px] step-circle">
              <div className={`w-24 h-24 rounded-full ${step.bgColor} ${index !== 3 ? 'dark:bg-blue-900/40' : ''} flex items-center justify-center ${step.textColor || 'text-primary'} mb-4 z-10 shadow-lg ${step.ring || ''} ${step.shadow || ''}`}>
                <span className="material-symbols-outlined text-4xl">{step.icon}</span>
              </div>
              <h4 className="font-bold mb-2 text-slate-900 dark:text-slate-100">{step.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
