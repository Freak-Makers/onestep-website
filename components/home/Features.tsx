import ScrollReveal from '@/components/common/ScrollReveal';

export default function Features() {
  const cards = [
    {
      title: '고객의 상황을\n먼저 이해하고',
      description: '재무 현황과 목표를 정밀 진단합니다.\n단순 수치가 아닌, 삶의 맥락을 함께 읽습니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQXUf6JnDTQSL0g8xgSJSfOUT7SRnGmC0Va4PrcdfwES616dTgyS79IcadvI33tXOxJs0Imf_n-wwfkHeKYJknrMXxxQZ5sxzOAK-t18B_k_7d581LOyoerApOVUFLl7oTITq9JFSAf8X7rUj0riX0PEmsD7Q-yNplDjpx9IzT9arG0f-K4CxEbgLFEj9mu1bg7pldoGJMs8yLEOFbqZWu4zA_hwjpHCJZLXx5SHiMavlCsW5RtoEcNsCfl2EJaTA_COlDOtaXlHsr',
    },
    {
      title: '5개 분야를\n하나로 연결하고',
      description: '부동산 · 정책자금 · 세무 · 기업자문 · 개인재무.\n분산된 금융 고민을 통합 설계합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCariLsw8PvqlKn3FKGngyUCoN7e6sdzvWiIyVU3Bp0aoR77NMqW-FIycRcmModYphZdmTBkYo_fwHCwxkUQZAofEjmY0lIsFU-tPk8xVTqWle9uOifHF9la8czCLDLLAh4M8SAx_qIbG20qPI2FDQqkbpFQC2jm4XaaRNR5Pnt1D3dnP9mP7u5ZuUKWi7PGrNsbOngE_i6Wl7M835aomBclmhNLvePMS5PCzoBdK8DNc3vy9sQhkTXMg5hipeijuSQbg3nLKOxalY2',
    },
    {
      title: '전문 파트너와\n협업하여',
      description: '세무사 · 은행 지점장 · 금융 상담사 네트워크로\n최적의 솔루션을 제시합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp9prqmVLK6kWOTbSjNriQjdcsp9acRidiDASXnYThlCKW0TeLPYSn7q-0SB_AH1t6mXFKtnMbOTH0J56-8MwX-2haOGunHYRZg6xXqOzlhfeKkVU-S7g8Y_X78m2IlEI-SaBBQKgLoYqRwJfSSiQ7N4r9dNseyeluhthuKX02BudztEQ1Ivp3ntt1EeLXPFtlR3D0EWNc3MO5iWvP5WscQHRoiMxcYVi5chEwhAqRBTYbEwdB05TvLD0ODeC8oXRBUdr4CXETsHSw',
    },
    {
      title: '합리적인 결과로\n이어지도록 만듭니다',
      description: '단순 조언이 아닌, 실행 가능한 전략을 설계합니다.\n금융 선택이 인생의 전환점이 됩니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2ePtC3NsSOGXLlYlgExlQG41e-6F91zEJ5LUbRPIu5Qz5vULOBZgubut6vP9oWQgvkUv9z6FuZ7feyEOo91MAinbnEVgxBXAMDcP6YLvPj9JtIYgWmxKFfEH_kWjMkw7jLvW9Wj8hWTlxZGhMHc3s8CbCDfYllfi3mxGxviDLaIv3wozZqnLfV24kKPFSzghESuOxeJNNqKGyEh0O4B3IQxRKAFyEHS5NsEhk4I7erXfyxfVfQSZyFrxBBF3RLpZYUtbMb99Cl73H',
    },
  ];

  return (
    <section id="why" className="py-20 md:py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="section-label">Why OneStep</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-slate-100">
            왜 원스텝 컨설팅입니까?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
            금융의 선택이 곧 삶의 방향이 됩니다. 원스텝은 그 선택을 함께 고민합니다.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 100} from="bottom">
            <div
              className="group relative rounded-2xl overflow-hidden aspect-[1.618/1] cursor-pointer"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-8 md:p-12">
                <h3 className="text-white text-2xl md:text-4xl font-semibold mb-2 leading-snug">
                  {card.title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {card.description.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                  ))}
                </p>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
