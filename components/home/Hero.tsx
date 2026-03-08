import Link from 'next/link';

export default function Hero() {
  return (
    <header className="relative h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Full-screen background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20">
        <div className="max-w-[620px]">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight mb-6 text-white">
            금융의 모든 선택,<br />
            원스텝에서 함께 설계합니다
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed">
            부동산 · 정책자금 · 기업자문 · 세무 · 개인재무를<br className="hidden md:block" />
            하나로 연결하는 종합 금융 컨설팅 팀
          </p>
        </div>
      </div>
    </header>
  );
}
