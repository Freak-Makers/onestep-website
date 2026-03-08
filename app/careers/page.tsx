import Link from "next/link";
import Navbar from "@/components/common/Navbar";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <header className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary text-sm font-bold mb-4">Careers</span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-slate-900 dark:text-white">
              원스텝과 함께<br />
              <span className="text-primary">성장할 인재</span>를 찾습니다.
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              금융 컨설팅 분야의 전문가로 성장하고 싶다면,<br className="hidden md:block" />
              원스텝 컨설팅의 문을 두드려 보세요.
            </p>
          </div>
        </div>
      </header>

      <main className="py-16 md:py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* 채용 중인 포지션 */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">채용 중인 포지션</h2>
            <div className="grid gap-6">
              {[
                {
                  title: '금융 컨설턴트',
                  type: '정규직',
                  team: '개인금융팀',
                  description: '개인 재무 설계 및 부동산 금융 솔루션을 제공하는 컨설턴트를 모집합니다.',
                },
                {
                  title: '기업금융 전문가',
                  type: '정규직',
                  team: '기업금융팀',
                  description: '정책자금, 기업 절세, 기업 자문 등 기업 금융 전반을 담당할 전문가를 모집합니다.',
                },
                {
                  title: '인턴 컨설턴트',
                  type: '인턴',
                  team: '전략팀',
                  description: '금융 컨설팅 업무를 배우며 성장하고 싶은 예비 전문가를 환영합니다.',
                },
              ].map((position) => (
                <div
                  key={position.title}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-card-dark hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{position.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-primary text-xs font-semibold">{position.type}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium">{position.team}</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{position.description}</p>
                  </div>
                  <Link
                    href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                    className="shrink-0 inline-flex items-center gap-1 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    지원하기
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* 복지 & 혜택 */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">복지 & 혜택</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'school', title: '전문 교육 지원', desc: '금융 자격증 취득 및 외부 교육 비용 지원' },
                { icon: 'schedule', title: '유연 근무제', desc: '자율 출퇴근으로 일과 삶의 균형 보장' },
                { icon: 'trending_up', title: '성과급 제도', desc: '개인 및 팀 성과에 따른 인센티브 지급' },
                { icon: 'health_and_safety', title: '건강검진 지원', desc: '연 1회 종합건강검진 비용 전액 지원' },
                { icon: 'workspace_premium', title: '멘토링 프로그램', desc: '업계 베테랑과 1:1 성장 멘토링 제공' },
                { icon: 'diversity_3', title: '수평적 문화', desc: '직급 없는 수평적 조직 문화와 자유로운 소통' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900">
                  <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                  <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-14 px-6 rounded-3xl bg-primary/5 dark:bg-primary/10 border border-primary/10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              원하는 포지션이 없으신가요?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              공고와 무관하게 지원서를 보내주세요. 적합한 포지션이 생기면 먼저 연락드립니다.
            </p>
            <Link
              href={`/careers/apply?position=${encodeURIComponent('인재풀')}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              이력서 보내기
              <span className="material-symbols-outlined text-base">send</span>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
