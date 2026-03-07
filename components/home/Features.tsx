export default function Features() {
  const cards = [
    {
      title: '고민의 본질을\n 파악하고',
      description: '기업이 직면한 문제의 본질을 \n 정확히 파악합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQXUf6JnDTQSL0g8xgSJSfOUT7SRnGmC0Va4PrcdfwES616dTgyS79IcadvI33tXOxJs0Imf_n-wwfkHeKYJknrMXxxQZ5sxzOAK-t18B_k_7d581LOyoerApOVUFLl7oTITq9JFSAf8X7rUj0riX0PEmsD7Q-yNplDjpx9IzT9arG0f-K4CxEbgLFEj9mu1bg7pldoGJMs8yLEOFbqZWu4zA_hwjpHCJZLXx5SHiMavlCsW5RtoEcNsCfl2EJaTA_COlDOtaXlHsr',
    },
    {
      title: '비즈니스 전체를\n 이해하고',
      description: '비즈니스 전체를 이해하고\n 기업의 전박적인 흐름과 니즈를 읽어냅니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCariLsw8PvqlKn3FKGngyUCoN7e6sdzvWiIyVU3Bp0aoR77NMqW-FIycRcmModYphZdmTBkYo_fwHCwxkUQZAofEjmY0lIsFU-tPk8xVTqWle9uOifHF9la8czCLDLLAh4M8SAx_qIbG20qPI2FDQqkbpFQC2jm4XaaRNR5Pnt1D3dnP9mP7u5ZuUKWi7PGrNsbOngE_i6Wl7M835aomBclmhNLvePMS5PCzoBdK8DNc3vy9sQhkTXMg5hipeijuSQbg3nLKOxalY2',
    },
    {
      title: '지금 대표님께\n 필요한 것만 뽑아',
      description: '대표님께 꼭 필요한 것만 뽑아\n 핵심을 놓치지 않는 맞춤형 전략을 도출합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp9prqmVLK6kWOTbSjNriQjdcsp9acRidiDASXnYThlCKW0TeLPYSn7q-0SB_AH1t6mXFKtnMbOTH0J56-8MwX-2haOGunHYRZg6xXqOzlhfeKkVU-S7g8Y_X78m2IlEI-SaBBQKgLoYqRwJfSSiQ7N4r9dNseyeluhthuKX02BudztEQ1Ivp3ntt1EeLXPFtlR3D0EWNc3MO5iWvP5WscQHRoiMxcYVi5chEwhAqRBTYbEwdB05TvLD0ODeC8oXRBUdr4CXETsHSw',
    },
    {
      title: '가장 효과적인 마케팅을\n제안합니다',
      description: '성과로 이어지는 실질적이고\n 가장 효과적인 컨설팅을 제안합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2ePtC3NsSOGXLlYlgExlQG41e-6F91zEJ5LUbRPIu5Qz5vULOBZgubut6vP9oWQgvkUv9z6FuZ7feyEOo91MAinbnEVgxBXAMDcP6YLvPj9JtIYgWmxKFfEH_kWjMkw7jLvW9Wj8hWTlxZGhMHc3s8CbCDfYllfi3mxGxviDLaIv3wozZqnLfV24kKPFSzghESuOxeJNNqKGyEh0O4B3IQxRKAFyEHS5NsEhk4I7erXfyxfVfQSZyFrxBBF3RLpZYUtbMb99Cl73H',
    },
  ];

  return (
    <section id="why" className="py-20 md:py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-slate-100">
            왜 원스텝 컨설팅입니까?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
            일의 감각이 살아있는 전문가들이 모여 목표를 달성합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
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
          ))}
        </div>
      </div>
    </section>
  );
}
