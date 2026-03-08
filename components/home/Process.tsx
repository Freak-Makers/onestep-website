import ScrollReveal from '@/components/common/ScrollReveal';

export default function Process() {
  const steps = [
    {
      icon: 'chat',
      title: '초기 상담',
      description: '재무 현황과 목표를 파악하는 1:1 심층 상담',
      circleBg: 'bg-blue-100 dark:bg-blue-900/40',
      iconColor: 'text-primary',
    },
    {
      icon: 'manage_search',
      title: '정밀 진단',
      description: '자산·부채·리스크 구조 분석 및 가능성 도출',
      circleBg: 'bg-blue-200 dark:bg-blue-800/40',
      iconColor: 'text-primary',
    },
    {
      icon: 'edit_document',
      title: '전략 설계',
      description: '맞춤 재무 로드맵 수립 및 실행 계획 제안',
      circleBg: 'bg-blue-300 dark:bg-blue-700/40',
      iconColor: 'text-primary',
    },
    {
      icon: 'verified',
      title: '실행 및 관리',
      description: '전문 파트너 협업으로 지속적인 성과 달성',
      circleBg: 'bg-primary',
      iconColor: 'text-white',
      ring: 'ring-8 ring-blue-50 dark:ring-blue-900/20',
      shadow: 'shadow-xl',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-background-dark/50" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="section-label">Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-slate-100">컨설팅 프로세스</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-16 max-w-xl mx-auto">
            상담부터 실행까지 체계적인 4단계로 최적의 금융 전략을 만들어 드립니다.
          </p>
        </ScrollReveal>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-4 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 -z-0" />

          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 130} from="bottom" className="relative flex flex-col items-center max-w-[200px] z-10">
              <div
                className={`w-20 md:w-24 h-20 md:h-24 rounded-full ${step.circleBg} flex items-center justify-center ${step.iconColor} mb-4 shadow-lg ${step.ring ?? ''} ${step.shadow ?? ''} ${index === steps.length - 1 ? 'animate-pulse-ring' : ''}`}
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
