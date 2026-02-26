import Link from 'next/link';
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Experts from "@/components/home/Experts";
import FAQ from "@/components/common/FAQ";

export default function ServicesPage() {
  const performanceStats = [
    { label: '파트너사와 함께 만든 누적 경제 가치', value: '150억 원 +' },
    { label: '전략적으로 관리 중인 브랜드 자산 수', value: '3,200개 +' },
    { label: '컨설팅 솔루션 평균 고객 만족도', value: '98.5%' },
    { label: '지속 가능한 비즈니스 목표 달성률', value: '92% 상회' },
  ];

  const subServices = [
    { icon: 'rocket_launch', title: '신규 비즈니스 인큐베이팅' },
    { icon: 'lightbulb', title: '브랜드 포지셔닝 전략' },
    { icon: 'trending_up', title: '스케일업 및 매출 고도화' },
    { icon: 'school', title: '디지털 트랜스포메이션 교육' },
    { icon: 'business', title: '운영 효율화 컨설팅' },
    { icon: 'computer', title: '데이터 기반 의사결정' },
    { icon: 'campaign', title: '통합 브랜드 커뮤니케이션' },
    { icon: 'groups', title: '파트너십 네트워크 구축' },
  ];

  const processSteps = [
    {
      step: 'Step 01',
      title: '심층 인터뷰 및 진단',
      description: '비즈니스의 핵심 가치와 현재의 페인 포인트를 정확히 짚어냅니다. 브랜드의 본질을 이해하는 가장 중요한 시작점입니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQXUf6JnDTQSL0g8xgSJSfOUT7SRnGmC0Va4PrcdfwES616dTgyS79IcadvI33tXOxJs0Imf_n-wwfkHeKYJknrMXxxQZ5sxzOAK-t18B_k_7d581LOyoerApOVUFLl7oTITq9JFSAf8X7rUj0riX0PEmsD7Q-yNplDjpx9IzT9arG0f-K4CxEbgLFEj9mu1bg7pldoGJMs8yLEOFbqZWu4zA_hwjpHCJZLXx5SHiMavlCsW5RtoEcNsCfl2EJaTA_COlDOtaXlHsr',
      alt: 'Kickoff Meeting',
    },
    {
      step: 'Step 02',
      title: '시장 데이터 분석',
      description: '방대한 데이터 속에서 유의미한 시장 인사이트를 도출합니다. 객관적인 지표를 바탕으로 전략의 타당성을 검증합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCariLsw8PvqlKn3FKGngyUCoN7e6sdzvWiIyVU3Bp0aoR77NMqW-FIycRcmModYphZdmTBkYo_fwHCwxkUQZAofEjmY0lIsFU-tPk8xVTqWle9uOifHF9la8czCLDLLAh4M8SAx_qIbG20qPI2FDQqkbpFQC2jm4XaaRNR5Pnt1D3dnP9mP7u5ZuUKWi7PGrNsbOngE_i6Wl7M835aomBclmhNLvePMS5PCzoBdK8DNc3vy9sQhkTXMg5hipeijuSQbg3nLKOxalY2',
      alt: 'Preparation documents',
    },
    {
      step: 'Step 03',
      title: '전략 로드맵 구축',
      description: '단기적인 성과와 장기적인 비전을 아우르는 구체적인 로드맵을 설계합니다. 실행 가능한 액션 플랜이 포함됩니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkcGtbbGif9qGL-a67eOoDBNtiZHfWmW-3tHuSEam8KsvSARKfJCItt6X4OpYaKMeTLdJkeWqik8fbFcp9dU0fmbSiHOzmDZhIFYTnZ8eQFh5TF9uW_XwkCI6_heA8lgWv8q99TjFo9ihf7o4x0UZUHMJP-pFJ2xwaU7f6qQkUCtmM9fFOCQpLqv1dnp0uYvbk8WoFrNoJCqSMViO5JXSWfd8gbb2XRhDkN6SGM8jBwYOnSEvVJxN2UhjaT2j3Y3gGUWjdR5kkbu8d',
      alt: 'Document submission',
    },
    {
      step: 'Step 04',
      title: '통합 브랜딩 솔루션',
      description: '시각적 요소와 메시지가 하나로 통합된 고유의 브랜드 아이덴티티를 완성합니다. 고객에게 일관된 가치를 전달합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2ePtC3NsSOGXLlYlgExlQG41e-6F91zEJ5LUbRPIu5Qz5vULOBZgubut6vP9oWQgvkUv9z6FuZ7feyEOo91MAinbnEVgxBXAMDcP6YLvPj9JtIYgWmxKFfEH_kWjMkw7jLvW9Wj8hWTlxZGhMHc3s8CbCDfYllfi3mxGxviDLaIv3wozZqnLfV24kKPFSzghESuOxeJNNqKGyEh0O4B3IQxRKAFyEHS5NsEhk4I7erXfyxfVfQSZyFrxBBF3RLpZYUtbMb99Cl73H',
      alt: 'Marketing strategy',
    },
    {
      step: 'Step 05',
      title: '퍼포먼스 실행 및 운영',
      description: '설계된 전략을 바탕으로 정밀한 마케팅과 운영을 실행합니다. 실시간 피드백을 통해 효율을 극대화합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5XutlJNAMh2veUYdvQ2dxtI9kEUpzS1e6xnbAtURR2SKq1ePTjk-NdfgtqnUJf4MpyTqYgT-2eqegPiBUoDeme95LB6dbqzdLr041RjvTE8yzCXUnPsHC9XD67YDe5dY7jqLzYZPyU8k3g9SGoogbf_LIYjYP5oHFdLxC2ukGBrim8xLI-AYdKvlihk-v2kv709g5cYNaTbpmboKGXKXyTbjc4e813m8QIkAYCdEdC4ANcltkmWfjQYyOH1JgPWFxcot0GO0_tEhb',
      alt: 'Execution',
    },
    {
      step: 'Step 06',
      title: '성과 분석 및 확장',
      description: '프로젝트의 성과를 데이터로 입증하고 다음 단계로의 성장 기회를 제안합니다. 지속적인 파트너십의 기반이 됩니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcrn5IZHP1vRGNxHH1YElebbnbjbVpEMH9tKfVCAoLjHhHozWkFc6Dbuq3PUHNMx3W4pnnpXsajw9oNT4M2bfnY004SYi2qygJr6ogLZewIuks9xx1lzPeQHb3K6mnIyUe-Ivg2FQ3tuAtEkUvAFHgzh2LSMNE48SrPrOBTI5DTq_cG_1V5BjAlv_1hNffbQh9BMR_9aLdK9LPOn25p9lg0_8ywMDepnbdRQ9jFaVEwRvJe9oHEjapBpaqx8dNxbZvf1WJMV9UTKVb',
      alt: 'Final report',
    },
  ];

  const index2Faqs = [
    {
      question: '컨설팅 기간은 보통 어느 정도 소요되나요?',
      answer: '프로젝트의 범위에 따라 다르지만, 기본 진단과 전략 수립에는 약 2~4주가 소요됩니다. 이후 실행 및 모니터링은 장기 파트너십으로 진행되는 경우가 많습니다.',
    },
    {
      question: '소규모 스타트업도 컨설팅이 가능한가요?',
      answer: '물론입니다. 원스텝은 기업의 규모보다 \'성장 의지\'를 중요하게 생각합니다. 초기 스타트업을 위한 맞춤형 린(Lean) 컨설팅 패키지도 준비되어 있습니다.',
    },
    {
      question: '어떤 업종에 가장 강점이 있나요?',
      answer: 'IT 서비스, 커머스, 라이프스타일 브랜드 등 디지털 트랜스포메이션이 필요한 모든 분야에 전문성을 보유하고 있습니다.',
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
            <p className="text-lg md:text-2xl font-semibold mb-4 opacity-90">비즈니스의 가치를 높이는 최고의 파트너</p>
            <h1 className="text-3xl md:text-6xl font-black mb-8 leading-tight">
              지속 가능한 성장을 위한<br />핵심 전략을 설계합니다.
            </h1>
            <Link href="/contact" className="bg-white text-primary font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg hover:scale-105 transition-transform inline-block">
              무료 컨설팅 신청하기
            </Link>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 md:py-24 bg-white dark:bg-background-dark text-center px-6">
          <div className="max-w-4xl mx-auto">
            <span className="material-icons text-primary text-4xl md:text-5xl mb-6">format_quote</span>
            <h2 className="text-xl md:text-3xl font-bold text-primary dark:text-blue-300 leading-snug">
              단순한 아이디어가 아닌,<br />실현 가능한 비즈니스 모델을 만듭니다.
            </h2>
            <p className="mt-6 md:mt-8 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
              많은 기업들이 성장의 문턱에서 방향을 잃고 고민합니다.<br className="hidden md:block" />
              전문 인력이 없어서, 혹은 시장 분석이 부족해서 주저하고 계시지는 않나요?<br className="hidden md:block" />
              여러분의 소중한 가치가 실질적인 시장 성과로 이어지도록 원스텝이 함께하겠습니다.
            </p>
          </div>
        </section>

        {/* Experts Section (Reuse from index2.html/Experts.tsx) */}
        <Experts />

        {/* Performance Stats */}
        <section className="gradient-bg py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-2xl md:text-3xl font-extrabold text-center mb-10 md:mb-12">OneStep 핵심 성과 지표</h2>
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
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-slate-900 dark:text-slate-100 leading-tight">비즈니스 전 생애주기를 커버합니다.</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">대표님은 핵심 가치에 집중하세요. 나머지는 저희가 설계합니다.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12 md:mb-16 text-slate-900 dark:text-slate-100 leading-tight">성공적인 비즈니스 트랜스포메이션,<br /><span className="text-primary">원스텝</span>이 함께한 결과입니다.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all group">
              <div className="flex justify-between items-start mb-6 gap-4">
                <div>
                  <span className="bg-primary/10 text-primary text-[10px] md:text-xs font-bold px-3 py-1 rounded-full">스케일업 프로젝트</span>
                  <h5 className="text-lg md:text-xl font-bold mt-3 text-slate-900 dark:text-slate-100">글로벌 핀테크 브랜드</h5>
                  <p className="text-slate-500 text-xs md:text-sm mt-1">시장 확장 전략 컨설팅</p>
                </div>
                <img alt="Client 1" className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy5gRRAmNNJB_DR-8jTJmW41kJfHrCSP9pa7ap6eZjPlj73UCHm492Tvz9sq6sYqLYRL3LqdIXuguZgLyW0wAzOcuASY-25vAMDtrvoMKGiF8wRCzaDS7O7DcrQWEwUAZnaYb0cMDYbZrU2ZnB-zcDB0n9xaqocElpcijFkxKfvuN_W_d-MbyOe59gCc5wXW3ourT5n_E33vuCOLkpPydX5wujD2bWoD09eW5uu3Ap44n_GA4LKk3AG0_zb7bOUShjB7lKBdO4iguf" />
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-5 md:p-6 rounded-2xl">
                <p className="italic text-slate-600 dark:text-slate-400 text-sm md:text-base">"단순한 조언이 아닌 실행 가능한 액션 플랜이 인상적이었습니다. 덕분에 해외 시장 안착에 성공했습니다."</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all group">
              <div className="flex justify-between items-start mb-6 gap-4">
                <div>
                  <span className="bg-primary/10 text-primary text-[10px] md:text-xs font-bold px-3 py-1 rounded-full">리브랜딩 프로젝트</span>
                  <h5 className="text-lg md:text-xl font-bold mt-3 text-slate-900 dark:text-slate-100">프리미엄 라이프스타일 샵</h5>
                  <p className="text-slate-500 text-xs md:text-sm mt-1">BX 디자인 및 마케팅 고도화</p>
                </div>
                <img alt="Client 2" className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzXHp2PpOVASKNsBoBp-7N5k1-LUKIrg4OQZ0OHQZldwNdml6RCFeWrrP7VG9m4Lml9j8wjwS6vC7UK8rjgMRUUTNsmDEQhg-X423oAGUnHq47QENEJW5HWhSQVXBpoWnlrkNwOPZdAzouIBJhnvHU-LTcfEZwTcpgj1nk_QNsZW5Cnw8-vnzhaipzCPPSQpPWeVh-jtuBSzE1gyU68RPRV201hvmyQkHYcdyxXt_r8bue0QCYFRXtvMdi5lv40jviyw1IGH7tLkM2" />
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-5 md:p-6 rounded-2xl">
                <p className="italic text-slate-600 dark:text-slate-400 text-sm md:text-base">"브랜드의 숨겨진 가치를 발견해주셨습니다. 고객들의 반응이 확연히 달라진 것을 체감하고 있습니다."</p>
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
              성공적인 비즈니스의 도약,<br />지금 바로 시작하세요.
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 md:mb-12">현재 한정된 파트너십으로 1:1 맞춤형 진단을 진행하고 있습니다.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg hover:shadow-2xl transition-all">
                무료 상담 신청하기
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg hover:bg-white hover:text-primary transition-all">
                솔루션 자세히 보기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
