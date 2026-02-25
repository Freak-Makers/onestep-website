import Link from 'next/link';

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-slate-900 dark:text-white">
            비즈니스의 가치를 높이는<br />
            <span className="text-primary">전략적 파트너</span>를 만나보세요.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            시장의 흐름을 읽고 본질에 집중하는 전문가 그룹이 함께합니다.<br />
            지속 가능한 성장을 설계하는 원스텝 컨설팅입니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              무료 컨설팅 시작하기
            </Link>
            <Link href="/portfolio" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all">
              포트폴리오 보기
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <img
          alt="Team collaborating in a bright office"
          className="w-full h-full object-cover rounded-l-3xl shadow-2xl"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp9prqmVLK6kWOTbSjNriQjdcsp9acRidiDASXnYThlCKW0TeLPYSn7q-0SB_AH1t6mXFKtnMbOTH0J56-8MwX-2haOGunHYRZg6xXqOzlhfeKkVU-S7g8Y_X78m2IlEI-SaBBQKgLoYqRwJfSSiQ7N4r9dNseyeluhthuKX02BudztEQ1Ivp3ntt1EeLXPFtlR3D0EWNc3MO5iWvP5WscQHRoiMxcYVi5chEwhAqRBTYbEwdB05TvLD0ODeC8oXRBUdr4CXETsHSw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-light dark:from-background-dark via-transparent to-transparent"></div>
      </div>
    </header>
  );
}
