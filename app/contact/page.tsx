import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
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
                전문적인 컨설팅으로<br />
                <span className="text-primary">비즈니스의 해답</span>을 찾으세요.
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                단순한 대행을 넘어 브랜드의 가치를 발견하고<br className="hidden md:block" />
                지속 가능한 성장을 위한 최적의 전략을 제안합니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400"></div>
                </div>
                <p className="text-sm text-slate-500 font-medium">1,367개 이상의 기업이<br className="sm:hidden" /> 선택한 마케팅 전문가 팀</p>
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
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ContactForm />
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
