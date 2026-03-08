type BadgeColor = 'green' | 'red' | 'blue';

type SubItem = {
  title: string;
  badge?: string;
  badgeColor?: BadgeColor;
};

type Category = {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  items: SubItem[];
};

import ScrollReveal from '@/components/common/ScrollReveal';

const BADGE_CLASSES: Record<BadgeColor, string> = {
  green: 'bg-green-100 text-green-700',
  red: 'bg-red-100 text-red-600',
  blue: 'bg-blue-100 text-primary',
};

const categories: Category[] = [
  {
    icon: 'account_balance',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-primary',
    title: '기업 금융 컨설팅',
    description: '사업자와 법인을 위한 정책자금, 기업인증, 절세 구조를 전략적으로 설계합니다.',
    items: [
      { title: '정책자금 컨설팅', badge: '무상지원', badgeColor: 'green' },
      { title: '기업인증 자문', badge: 'NEW', badgeColor: 'red' },
      { title: '기업 절세 컨설팅' },
      { title: '창업 및 법인 설계' },
    ],
  },
  {
    icon: 'home',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600',
    title: '부동산 자금 컨설팅',
    description: '내 집 마련부터 수익형 투자, 건물·PF 구조까지 자금 전략을 함께 수립합니다.',
    items: [
      { title: '내 집 마련 전략 수립' },
      { title: '수익형 부동산 자금 설계' },
      { title: '건물·PF 투자 구조 자문', badge: 'NEW', badgeColor: 'red' },
    ],
  },
  {
    icon: 'person',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600',
    title: '개인 재무 컨설팅',
    description: '보험 리밸런싱부터 생애주기 포트폴리오까지 개인의 재무 목표를 체계적으로 설계합니다.',
    items: [
      { title: '금융 상품 활용 전략', badge: '추천', badgeColor: 'blue' },
      { title: '보험 점검 및 리밸런싱' },
      { title: '생애주기 재무 포트폴리오' },
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="py-20 md:py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14 md:mb-16">
          <span className="section-label">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
            하나의 창구에서<br />
            <span className="text-primary">모든 금융 고민</span>을 해결합니다
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {categories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 120} from="bottom">
            <div>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center shrink-0`}>
                  <span className={`material-icons ${cat.iconColor} text-xl`}>{cat.icon}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                  {cat.title}
                </h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {cat.description}
              </p>

              {/* Sub-items */}
              <div className="flex flex-col gap-3">
                {cat.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 border border-slate-100 dark:border-slate-700 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`material-icons ${cat.iconColor} text-base`}>{cat.icon}</span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {item.title}
                      </span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          BADGE_CLASSES[item.badgeColor ?? 'blue']
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
