import Link from 'next/link';
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function PortfolioPage() {
  const reviews = [
    {
      name: '신원철 노무사',
      role: '신노무법인 노무사',
      text: '항상 친절하게 설명해주시고 잘 챙겨주셔서 감사드려요~ 매번 진정성 있는 글을 작성해주셔서 감사드립니다! 믿고 계속해서 부탁드리고 싶습니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyOrP0BK9uWqX7WgPnrHFfGlR8GxC0uSebrrFqWu-l5cVOz40rLsUf6NHBNVUdMlhl0AfGLjn3yWkJfy2mZlMbxYv4v5t7zItqNtpjynZvnctmDH66y4nd_l6WXk7yEmifHkKgZOiUL2uIU9cMZznvfZPUwXwIJxapyk0fvrRnDOeMmnDMoPXI3OIIYoAiCfhrCA1lHH8jzGVyHpOmweeDLMDIdNhKip-4w7A0XMw15WwGQXH7Yw5xakV2CJMn5Xr4l5VBQK2jsYJf',
      highlight: '1,110곳의 사업장이 선택한\n노동법률사무소'
    },
    {
      name: '김은호 대표님',
      role: '정리수납 나이스',
      text: '원래 저희 실장님 하고 자랑 다녔는데 원스텝이랑 한 뒤로 3월부터는 팀장님 한명 추가로 근무하게 되었어요. 블로그, 인스타, 지식인 전부 효과가 너무 좋은듯 해요 항상 감사합니다^^',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg1Gd7Rkr4X6p-A_osPhTpteihQU8y9WDggNGmDATbQh8n-7LDNT17k-e9BoyNWrDKi1ytm-hJbL9I1r7oN7UCdID89DUPtAOLcC_PZ8C25zvJi8Dw40y1mSZyJ5IVCSaespy-B_X4T4bK7ChgHIViVKvNbN5fIgso-iI2Lw6eXPnz8i0pvKvB1MhgWWkKxcmoQcxExvqewxvryLyF0iE-P3gurfFQbksWb2f0JXBToH43fH7vjd5jyhLPlxkK561aYOKm-2sY5MFM',
      highlight: '10년 간 2,200건 공간 컨설팅 진행한\n대한민국 1세대 공간 컨설턴트'
    },
  ];

  const clientLogos = [
    { name: '법무법인(유한) 강남', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-pFjsLAkbEV3xbwFfJiTesoDs1FILAfB74sO3NA0-Jn12GgCOVbOsGX7WhWgLpvQeIQzo35FiTDEa_aGktCPfuc2KCjo4R6tRCYaK4ue2HkklYpnmvwtWcgK1ebOe_JbaFwNvt8JROoFElM-mBFWvW6eNOTNijI2KYWLm9aiwjzQlJnV1YEowrc1YvUBzOMsuBL0gUxaHmCteDzKXojQ7zenmhBCKxhipoutCVUfj0uxLZWwc6is4Fy5cbJ3AKmNf92ZzuHgCqXMi' },
    { name: '세무법인 아성', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfgf01hzJWbnSGK9FpH-ObrDC8f-MJwXrcd3n8dTcV0RLILahxi5B1_gOGsAZleNG1qH0l9YU8mM0e5cJq9Mc7Ggofr3kGGl46WJMzTWX8CygaakDvkxuUM_SSACHTIlhWG2QK4aG-tIodAcXOrifLghhvzVYRA78HoKzNmqANxDk9t7SLy_4XeBw7wsnUM40eloDqVityS-5UTjCyCrjemqzhYw4NP2RKbYC_sSBLABhbeZG1jvAtH5_pcgBcFFvez-NbKO2Hq8Ii' },
    { name: '세무법인 다승', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiN5bi-q6mIt2o8TeRJ7lc1ovQ2l1zYXFGzer4ygOX-wd1PaQJEw_FLunEgWfA8VNIf5sS0yRPIpz0dlU9T9PwihL9D1RnYSl41ASEmtiFlQwAxYN8sIkafQRjGi41U-MBFWL2yxUSyaJpzWOTdYBuiM7qJay-nIzegXNmRGF-fSsukjaHCvUEkwayDfTCCLwCe8VwKMkq12AYSFc8IZEX96M_ZI6G9ip53t8-k4TD-BW2aWBiuRmGf7sSOWIlMe7BzduJJMtFiZ7F' },
    { name: '법무법인 새날', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcZKTLFnsg7wQ8Et3XjazWNr-0_HcjGSs0pcth12KbGh3_UKL_W1s50cIk65IY1yXkDz3sQvGX79I-J-p_gTLoZZlcqs_K_6PDtUJN683Jcmg9l0KB4Ps6GPuDm5GeWLoHm4tRPB1tqCSdenweJXINDEG7O4AeDJqG7fUDu6LMVHt2E-IFxqdHp6H5M0NImOurt1yGGQfdSEW52rmsTzFsId9MHUYB7bd5wB27g5wmI9T6kRCOrIq6pomAroYwjXgTtHFkmjsXCWRv' },
    { name: 'BF 노동법률사무소', text: '한국비지행정사무소' },
    { name: '노무법인 더함', text: '노무법인 더함' },
    { name: '나이스 정리 수납', text: 'NICE SPACE' },
    { name: '로움 디자인', text: 'Loum Design' },
  ];

  const testimonials = [
    { name: '김진수 대표님', rating: '★★★★★', text: '안녕하세요 팀장님! 블로그 너무 잘 써주셔서 감사합니다 너무 잘해주신덕분에 벌써 문의전화가 몇 건 왔네요. 항상 신경써주심에 감사합니다~!!!', initial: '김' },
    { name: 'edm에듀케이션', rating: '★★★★★', text: '급하게 요청드렸는데, 빠른 시간 안에 높은 퀄리티로 만들어주셔서 정말 좋았습니다! 커뮤니케이션도 깔끔하게 잘해주셔서 다음에 또 작업할 일 있으면 다시 맡기고 싶습니다!', initial: 'ed' },
    { name: '온화에스테틱', rating: '★★★★★', text: '안녕하세요 담당자님! 인스타그램 보고 신규 고객분들이 많이 방문해주셨어요! ㅎㅎ 새로운 고객분들 유입될 수 있도록 잘 세팅해주셔서 감사드립니다!', initial: '온' },
  ];

  return (
    <>
      <Navbar />
      <header className="py-16 md:py-20 text-center bg-white dark:bg-background-dark px-6">
        <p className="text-primary font-semibold mb-4">포트폴리오</p>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white leading-tight">원스텝의 진짜 후기를 확인해 보세요</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">원스텝의 실제 클라이언트분들이 말하는 100% 진짜 후기를 보여드립니다.</p>
      </header>
      <main className="bg-white dark:bg-background-dark">
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {reviews.map((review, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <p className="text-white text-base md:text-lg font-medium whitespace-pre-line">{review.highlight}</p>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg md:text-xl mb-2">{review.name} <span className="text-slate-400 font-normal text-xs md:text-sm ml-2">| {review.role}</span></h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">{review.text}</p>
                  </div>
                  <span className="material-icons text-slate-300 group-hover:text-primary transition-colors mt-1">trending_flat</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 dark:bg-background-dark/50 py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-slate-900 dark:text-white leading-tight">재계약률 99% 고객 후기가<br className="md:hidden" /> 증명하는 1위 마케팅 회사</h2>
            <div className="flex flex-row justify-center gap-8 md:gap-12 mb-16">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl"><span className="material-icons text-primary text-xl md:text-2xl">military_tech</span></div>
                <div className="text-left">
                  <p className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">5.0 <span className="text-slate-400 text-sm md:text-lg font-normal">/ 5.0</span></p>
                  <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400">크몽 후기</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl"><span className="material-icons text-primary text-xl md:text-2xl">handshake</span></div>
                <div className="text-left">
                  <p className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">99%</p>
                  <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400">재계약률</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 md:mb-24">
              {clientLogos.map((logo, i) => (
                <div key={i} className="bg-white dark:bg-card-dark p-4 md:p-6 rounded-2xl flex flex-col items-center justify-center border border-slate-100 dark:border-slate-800 h-32 md:h-40">
                  <p className="text-[10px] md:text-xs font-bold text-slate-400 mb-3 md:mb-4">{logo.name}</p>
                  {logo.image ? (
                    <img alt={logo.name} className="h-6 md:h-8 grayscale opacity-70" src={logo.image} />
                  ) : (
                    <p className="font-bold text-sm md:text-base text-slate-300 dark:text-slate-500">{logo.text}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mb-20 md:mb-24">
              <div className="max-w-4xl mx-auto text-center">
                <img alt="Client Avatar" className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto border-4 border-slate-100 dark:border-slate-800 mb-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKrX5hbfFsbNDsFv3UWn9DaRzXQHdNRKtqN3PDO-YgHrkx8wZa9fqVKbvQfgw_4vEYU1AVO2-u5_kV7O6ZyKtY71WTNKC_xcgeqdJlT3_VoHJFe5z580BflUZDnvcbrDmMwHJYduFA5EDBjSjGTY7b6LSKYbLQ6kHVMUgZXo6fVBuiOpNV7gCViZ54L7DkBFQfw2FwDnUNlxS5oG8Q7iLJJ8hCGdyorDQUEhOqAFi2M1OIviwqI4J2Gz77_5IAv0w-flksFQm7tAu7" />
                <h3 className="text-xl md:text-3xl font-bold leading-tight mb-4 text-slate-900 dark:text-white px-4">
                  "시간에 맞춰 작업해 주시는 것은 물론이고,<br className="hidden md:block" />
                  틈틈이 진행 상황 공유해 주셔서 정말 좋았습니다."
                </h3>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">서래글로벌빌딩센터</p>
                <div className="flex justify-center gap-2 mt-8">
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                  <div className="w-3 h-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                  <div className="w-3 h-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                  <div className="w-3 h-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12 md:mb-16 px-4">
              <p className="text-primary text-xs md:text-sm font-bold mb-2">크몽 리뷰 100%</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">결국 원스텝을 선택한<br />고객분들의 솔직한 이야기</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white dark:bg-card-dark p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 text-left">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold">{t.initial}</div>
                    <div><p className="font-bold text-sm text-slate-900 dark:text-white">{t.name} <span className="text-yellow-400">{t.rating}</span></p></div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 md:mt-24">
              <h2 className="text-xl md:text-2xl font-bold text-center mb-10 md:mb-12 text-slate-900 dark:text-white">서비스별 포트폴리오 상세히 살펴보기</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services" className="group block p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-card-dark hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all">
                  <p className="font-bold text-base md:text-lg mb-6 text-left text-slate-900 dark:text-white">전문직 마케팅</p>
                  <div className="flex items-end justify-between">
                    <div className="p-2 md:p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600">
                      <span className="material-icons text-xl md:text-2xl">architecture</span>
                    </div>
                    <span className="material-icons text-slate-300 group-hover:text-primary transition-colors">trending_flat</span>
                  </div>
                </Link>
                <Link href="/services" className="group block p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-card-dark hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all">
                  <p className="font-bold text-base md:text-lg mb-6 text-left text-slate-900 dark:text-white">사업자 마케팅</p>
                  <div className="flex items-end justify-between">
                    <div className="p-2 md:p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600">
                      <span className="material-icons text-xl md:text-2xl">storefront</span>
                    </div>
                    <span className="material-icons text-slate-300 group-hover:text-primary transition-colors">trending_flat</span>
                  </div>
                </Link>
                <Link href="/services" className="group block p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-card-dark hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all">
                  <p className="font-bold text-base md:text-lg mb-6 text-left text-slate-900 dark:text-white">홈페이지 디자인</p>
                  <div className="flex items-end justify-between">
                    <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
                      <span className="material-icons text-xl md:text-2xl">web</span>
                    </div>
                    <span className="material-icons text-slate-300 group-hover:text-primary transition-colors">trending_flat</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-[350px] md:h-[400px] flex items-center overflow-hidden">
          <img alt="CTA Background" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu3jYVexZJM4SZ36AtgVawx78fvn9ckZtBEPq_S55DUpdJDBot01L0lhDJ_XdbhO_DzL3VFHc5L57p-bRf-QWvg2bQVYA9dpScHc1NXMpB1hQW3sBtJkWGDD3luREOVRuqVD3exbrlFeyYOMyvJ39ZKGDAYBwer6aB5HL9-xP82zS7mSwm5CBPM1fFKizJcc-fCrpnZb3TPwRKHjSQfQK-V1PFyMHfl4-Xvquxq3dWJngpZbCo0CM5ZsaqFbCFsIuwuO3PFFgpzbkV" />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
          <div className="relative max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">저희의 목표는 단 하나,<br />대표님의 사업을 성공시키는 것</h2>
              <p className="text-sm md:text-base text-slate-300">원스텝 컨설팅은 오직 대표님만을 위해 밤낮없이 일합니다.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-colors shadow-lg">문의하기</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
