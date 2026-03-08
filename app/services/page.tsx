import Link from 'next/link';
import Navbar from "@/components/common/Navbar";
import Experts from "@/components/home/Experts";
import FAQ from "@/components/common/FAQ";

export default function ServicesPage() {
  const performanceStats = [
    { label: '제휴 완료 전문 파트너 분야', value: '5개 분야 +' },
    { label: '컨설팅 서비스 고객 만족도', value: '90%+' },
    { label: '고객 재상담률', value: '90%' },
    { label: '컨설팅 목표 달성률', value: '90% 이상' },
  ];

  const subServices = [
    { icon: 'home', title: '내 집 마련 전략 수립' },
    { icon: 'apartment', title: '수익형 부동산 자금 설계' },
    { icon: 'account_balance', title: '정책자금·무상지원금 진단' },
    { icon: 'verified', title: '벤처·이노비즈·메인비즈 인증' },
    { icon: 'receipt_long', title: '기업 절세 구조 설계' },
    { icon: 'savings', title: '개인 금융 상품 활용 전략' },
    { icon: 'health_and_safety', title: '보험 점검 및 리밸런싱' },
    { icon: 'groups', title: '전문 파트너 네트워크 연결' },
  ];

  const processSteps = [
    {
      step: 'Step 01',
      title: '초기 상담 및 재무 진단',
      description: '고객의 현재 재무 상황과 목표를 파악하기 위한 1:1 심층 상담을 진행합니다. 자산, 부채, 리스크 요인을 함께 점검합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQXUf6JnDTQSL0g8xgSJSfOUT7SRnGmC0Va4PrcdfwES616dTgyS79IcadvI33tXOxJs0Imf_n-wwfkHeKYJknrMXxxQZ5sxzOAK-t18B_k_7d581LOyoerApOVUFLl7oTITq9JFSAf8X7rUj0riX0PEmsD7Q-yNplDjpx9IzT9arG0f-K4CxEbgLFEj9mu1bg7pldoGJMs8yLEOFbqZWu4zA_hwjpHCJZLXx5SHiMavlCsW5RtoEcNsCfl2EJaTA_COlDOtaXlHsr',
      alt: '초기 상담',
    },
    {
      step: 'Step 02',
      title: '맞춤 서비스 분야 매칭',
      description: '부동산·정책자금·절세·개인재무 중 고객에게 가장 필요한 분야를 정확히 선별합니다. 불필요한 영역은 배제합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCariLsw8PvqlKn3FKGngyUCoN7e6sdzvWiIyVU3Bp0aoR77NMqW-FIycRcmModYphZdmTBkYo_fwHCwxkUQZAofEjmY0lIsFU-tPk8xVTqWle9uOifHF9la8czCLDLLAh4M8SAx_qIbG20qPI2FDQqkbpFQC2jm4XaaRNR5Pnt1D3dnP9mP7u5ZuUKWi7PGrNsbOngE_i6Wl7M835aomBclmhNLvePMS5PCzoBdK8DNc3vy9sQhkTXMg5hipeijuSQbg3nLKOxalY2',
      alt: '서비스 매칭',
    },
    {
      step: 'Step 03',
      title: '전략 로드맵 수립',
      description: '단기 목표와 장기 비전을 아우르는 실행 가능한 재무 로드맵을 설계합니다. 구체적인 단계와 타임라인이 포함됩니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkcGtbbGif9qGL-a67eOoDBNtiZHfWmW-3tHuSEam8KsvSARKfJCItt6X4OpYaKMeTLdJkeWqik8fbFcp9dU0fmbSiHOzmDZhIFYTnZ8eQFh5TF9uW_XwkCI6_heA8lgWv8q99TjFo9ihf7o4x0UZUHMJP-pFJ2xwaU7f6qQkUCtmM9fFOCQpLqv1dnp0uYvbk8WoFrNoJCqSMViO5JXSWfd8gbb2XRhDkN6SGM8jBwYOnSEvVJxN2UhjaT2j3Y3gGUWjdR5kkbu8d',
      alt: '전략 수립',
    },
    {
      step: 'Step 04',
      title: '전문 파트너 협업 연결',
      description: '세무사·은행 지점장·금융 상담사 등 해당 분야 파트너를 연결하여 전략의 실행력을 높입니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2ePtC3NsSOGXLlYlgExlQG41e-6F91zEJ5LUbRPIu5Qz5vULOBZgubut6vP9oWQgvkUv9z6FuZ7feyEOo91MAinbnEVgxBXAMDcP6YLvPj9JtIYgWmxKFfEH_kWjMkw7jLvW9Wj8hWTlxZGhMHc3s8CbCDfYllfi3mxGxviDLaIv3wozZqnLfV24kKPFSzghESuOxeJNNqKGyEh0O4B3IQxRKAFyEHS5NsEhk4I7erXfyxfVfQSZyFrxBBF3RLpZYUtbMb99Cl73H',
      alt: '파트너 연결',
    },
    {
      step: 'Step 05',
      title: '전략 실행 지원',
      description: '수립된 전략의 실행 과정을 밀착 지원합니다. 시장 변화와 고객 상황 변화에 맞춰 전략을 유연하게 조정합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5XutlJNAMh2veUYdvQ2dxtI9kEUpzS1e6xnbAtURR2SKq1ePTjk-NdfgtqnUJf4MpyTqYgT-2eqegPiBUoDeme95LB6dbqzdLr041RjvTE8yzCXUnPsHC9XD67YDe5dY7jqLzYZPyU8k3g9SGoogbf_LIYjYP5oHFdLxC2ukGBrim8xLI-AYdKvlihk-v2kv709g5cYNaTbpmboKGXKXyTbjc4e813m8QIkAYCdEdC4ANcltkmWfjQYyOH1JgPWFxcot0GO0_tEhb',
      alt: '전략 실행',
    },
    {
      step: 'Step 06',
      title: '성과 확인 및 지속 관리',
      description: '컨설팅 결과를 함께 점검하고 다음 단계 목표를 제안합니다. 고객의 재무 상황이 개선될수록 더 깊은 파트너십이 됩니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcrn5IZHP1vRGNxHH1YElebbnbjbVpEMH9tKfVCAoLjHhHozWkFc6Dbuq3PUHNMx3W4pnnpXsajw9oNT4M2bfnY004SYi2qygJr6ogLZewIuks9xx1lzPeQHb3K6mnIyUe-Ivg2FQ3tuAtEkUvAFHgzh2LSMNE48SrPrOBTI5DTq_cG_1V5BjAlv_1hNffbQh9BMR_9aLdK9LPOn25p9lg0_8ywMDepnbdRQ9jFaVEwRvJe9oHEjapBpaqx8dNxbZvf1WJMV9UTKVb',
      alt: '성과 확인',
    },
  ];

  const index2Faqs = [
    {
      question: '어떤 경우에 원스텝 컨설팅을 이용하면 좋나요?',
      answer: '부동산 매입, 정책자금 신청, 법인 절세, 보험 리밸런싱 등 금융과 관련된 중요한 결정을 앞두고 있을 때 상담을 권장드립니다. 하나의 이슈가 아니라 여러 분야가 복합적으로 얽혀 있는 경우에 특히 도움이 됩니다.',
    },
    {
      question: '창업 초기 사업자도 정책자금 컨설팅을 받을 수 있나요?',
      answer: '네, 창업자·초기 사업자가 이용 가능한 무상지원금 및 융자금 프로그램이 다양하게 있습니다. 원스텝은 사업 상황에 맞는 정책자금을 진단하고 신청 전략을 함께 수립해 드립니다.',
    },
    {
      question: '세무·법무 관련 이슈도 도움받을 수 있나요?',
      answer: '네. 원스텝은 세무사, 회계사, 법무사 등 각 분야 전문 파트너와의 협업 네트워크를 보유하고 있습니다. 단순 연결을 넘어, 고객 상황에 맞는 전문가를 선별해 드립니다.',
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section from index2.html */}
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-white dark:bg-background-dark">
          <div className="absolute inset-0 z-0">
            <img
              alt="Office meeting background"
              className="w-full h-full object-cover opacity-20 dark:opacity-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8c4PtJjB2OjD_O1FIx3wTqjRTFNpbcv2DzNTRUWBTPifu8HA4asYm6xc2vhS4HqucOxdhcH3lxzmEBNq_cRJa_7wQLcKK-_HXr7OMceK_6nmdfJqQ6BY7BPuHXsgM8AI4lVQcm5QMAv_xEk_pjP1639_hf12AjwCTBHVMxwsWptLUDMeNR1O3G5WgAysFU1GJxYPKBV2ZcceNtO7I3_HdsCFLUqYrV2tcztox5QcTtBfLETGWa0hwAT6hz96oJX8Rd6Qqbaw4RrSB"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90"></div>
          </div>
          <div className="relative z-10 text-center text-white px-6">
            <p className="text-lg md:text-2xl font-semibold mb-4 opacity-90">금융 선택을 컨설팅으로, 컨설팅을 인생의 전환점으로</p>
            <h1 className="text-3xl md:text-6xl font-black mb-8 leading-tight">
              합리적인 금융 전략을<br />함께 설계합니다.
            </h1>
            <Link href="/contact" className="bg-white text-primary font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg hover:scale-105 transition-transform inline-block">
              상담 신청하기
            </Link>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 md:py-24 bg-white dark:bg-background-dark text-center px-6">
          <div className="max-w-4xl mx-auto">
            <span className="material-icons text-primary text-4xl md:text-5xl mb-6">format_quote</span>
            <h2 className="text-xl md:text-3xl font-bold text-primary dark:text-blue-300 leading-snug">
              당신의 금융 선택이<br />가장 합리적인 결과로 이어지도록.
            </h2>
            <p className="mt-6 md:mt-8 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
              부동산, 정책자금, 절세, 개인재무 — 금융의 여러 고민이 동시에 얽혀 있는 경우가 많습니다.<br className="hidden md:block" />
              원스텝은 분산된 금융 문제를 하나의 시각으로 통합하여 전략적으로 설계합니다.<br className="hidden md:block" />
              단순한 조언이 아닌, 실행 가능한 로드맵을 함께 만들어 드립니다.
            </p>
          </div>
        </section>

        {/* Experts Section (Reuse from index2.html/Experts.tsx) */}
        <Experts />

        {/* Performance Stats */}
        <section className="gradient-bg py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-2xl md:text-3xl font-extrabold text-center mb-10 md:mb-12">원스텝 컨설팅 핵심 지표</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {performanceStats.map((stat, index) => (
                <div key={index} className="glass-card p-6 md:p-8 rounded-2xl text-white text-center">
                  <p className="text-xs md:text-sm opacity-80 mb-2 whitespace-pre-line">{stat.label}</p>
                  <p className="text-2xl md:text-3xl font-black">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lifecycle Services */}
        <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 bg-white dark:bg-background-dark">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-slate-900 dark:text-slate-100 leading-tight">금융의 전 영역을 커버합니다.</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">고객의 상황에 집중하세요. 전략은 저희가 설계합니다.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subServices.map((service, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 p-5 md:p-6 rounded-xl flex items-center gap-4 border border-slate-100 dark:border-slate-700">
                <span className="material-icons text-primary">{service.icon}</span>
                <span className="font-bold text-sm md:text-base text-slate-900 dark:text-slate-100">{service.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6 Step Process */}
        <section className="py-20 md:py-24 bg-slate-50 dark:bg-background-dark/50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-slate-900 dark:text-slate-100">성공을 부르는 6단계 프로세스</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">기획부터 결과 보고서까지 완벽하게 서포트합니다.</p>
            </div>
            <div className="space-y-20 md:space-y-24">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className={`flex-1 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}>
                    <span className="text-primary font-bold text-sm md:text-base">{step.step}</span>
                    <h4 className="text-xl md:text-2xl font-extrabold mt-2 mb-4 text-slate-900 dark:text-slate-100">{step.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">{step.description}</p>
                  </div>
                  <div className={`flex-1 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'} w-full`}>
                    <img alt={step.alt} className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" src={step.image} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Cards */}
        <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 bg-white dark:bg-background-dark">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12 md:mb-16 text-slate-900 dark:text-slate-100 leading-tight">고객의 금융 고민을<br /><span className="text-primary">원스텝</span>이 함께 해결한 사례입니다.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all group">
              <div className="flex justify-between items-start mb-6 gap-4">
                <div>
                  <span className="bg-primary/10 text-primary text-[10px] md:text-xs font-bold px-3 py-1 rounded-full">정책자금 컨설팅</span>
                  <h5 className="text-lg md:text-xl font-bold mt-3 text-slate-900 dark:text-slate-100">초기 창업 사업자</h5>
                  <p className="text-slate-500 text-xs md:text-sm mt-1">무상지원금 · 융자금 전략 수립</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-5 md:p-6 rounded-2xl">
                <p className="italic text-slate-600 dark:text-slate-400 text-sm md:text-base">"어디서 어떤 지원을 받을 수 있는지 전혀 몰랐는데, 원스텝 덕분에 필요한 자금을 제때 확보할 수 있었습니다."</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all group">
              <div className="flex justify-between items-start mb-6 gap-4">
                <div>
                  <span className="bg-primary/10 text-primary text-[10px] md:text-xs font-bold px-3 py-1 rounded-full">기업 절세 컨설팅</span>
                  <h5 className="text-lg md:text-xl font-bold mt-3 text-slate-900 dark:text-slate-100">중소 법인 대표</h5>
                  <p className="text-slate-500 text-xs md:text-sm mt-1">급여·배당 구조 최적화</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-5 md:p-6 rounded-2xl">
                <p className="italic text-slate-600 dark:text-slate-400 text-sm md:text-base">"세무사와 직접 연결해주셔서 구체적인 절세 구조를 빠르게 잡을 수 있었습니다. 막연했던 문제가 명확해졌습니다."</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-24 bg-slate-50 dark:bg-background-dark/50">
          <div className="max-w-3xl mx-auto px-6">
            <FAQ items={index2Faqs} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Office desk"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Wiu-mfTaVa8G2LSnwQIYZhLktzmXCSFA1mQR5FABYryYGwxwFI8gfc68WzKCaxQ2Y7wKJ7uQ1GkJ3wRbP28FkvraloTsHUFR-3EIbUecfr8twSIZStXAcGkHe9MQAJR6l-htfP17WTF9XdycflV2vv4SkfBvlKBNWJUo9n7CLkkG3yHB-K7HDWyvly8B7XtSacfpUkF3iR46svpCrVFSvChxr_Hc6gCLyMQm7DrVZ_iYLy_DLGUkRi0DoqhYKWUdDlycukC1vpQM"
            />
            <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-2xl md:text-5xl font-extrabold mb-6 md:mb-8 leading-tight">
              금융 고민의 시작점,<br />원스텝과 함께 풀어보세요.
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 md:mb-12">복잡한 금융 문제일수록, 전략적인 첫 상담이 중요합니다.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg hover:shadow-2xl transition-all">
                상담 신청하기
              </Link>
              <Link href="/services/corporate-finance" className="bg-transparent border-2 border-white text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg hover:bg-white hover:text-primary transition-all">
                기업 금융 컨설팅 보기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
