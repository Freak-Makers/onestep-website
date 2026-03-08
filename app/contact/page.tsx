import Navbar from "@/components/common/Navbar";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/common/FAQ";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <header className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary text-sm font-bold mb-4">Consulting Inquiry</span>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-slate-900 dark:text-white">
                금융 고민의 시작점,<br />
                <span className="text-primary">원스텝과 함께</span> 풀어보세요.
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                부동산, 정책자금, 절세, 개인재무 — 어떤 고민이든 좋습니다.<br className="hidden md:block" />
                원스텝이 가장 합리적인 방향을 함께 설계하겠습니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400"></div>
                </div>
                <p className="text-sm text-slate-500 font-medium">부동산 · 정책자금 · 기업자문 · 세무 · 개인재무<br className="sm:hidden" /> 5개 분야 종합 금융 컨설팅</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <img
                  alt="Consultant professional looking at screen"
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp9prqmVLK6kWOTbSjNriQjdcsp9acRidiDASXnYThlCKW0TeLPYSn7q-0SB_AH1t6mXFKtnMbOTH0J56-8MwX-2haOGunHYRZg6xXqOzlhfeKkVU-S7g8Y_X78m2IlEI-SaBBQKgLoYqRwJfSSiQ7N4r9dNseyeluhthuKX02BudztEQ1Ivp3ntt1EeLXPFtlR3D0EWNc3MO5iWvP5WscQHRoiMxcYVi5chEwhAqRBTYbEwdB05TvLD0ODeC8oXRBUdr4CXETsHSw"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="py-16 md:py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ContactForm />
          <FAQ />
        </div>
      </main>
    </>
  );
}
