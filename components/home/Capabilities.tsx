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
    icon: 'business_center',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-primary',
    title: '전문직 마케팅',
    description: '전문직 종사자를 위한 최적화된 디지털 마케팅으로 신규 고객을 유치합니다.',
    items: [
      { title: '블로그 마케팅', badge: 'NAVER', badgeColor: 'green' },
      { title: '병원 SNS 마케팅' },
      { title: '영어학원 마케팅' },
      { title: '법무 / 노무 마케팅' },
    ],
  },
  {
    icon: 'storefront',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600',
    title: '사업자 마케팅',
    description: '소상공인 및 자영업자를 위한 맞춤형 마케팅 전략으로 매출을 극대화합니다.',
    items: [
      { title: '블로그 마케팅', badge: 'NAVER', badgeColor: 'green' },
      { title: '병원 SNS 마케팅', badge: 'NEW', badgeColor: 'red' },
      { title: '인스타그램 관리 대행' },
    ],
  },
  {
    icon: 'palette',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600',
    title: '브랜딩 디자인 팀',
    description: '브랜드 가치를 높이는 전문 디자인 솔루션으로 차별화된 인상을 만듭니다.',
    items: [
      { title: '홈페이지 제작', badge: 'NEW', badgeColor: 'red' },
      { title: '로고 제작' },
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
            비즈니스 성공을 위한 기능성,<br />
            <span className="text-primary">원스텝</span>에서 시작합니다
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
