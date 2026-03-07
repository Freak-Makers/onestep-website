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
        <div className="max-w-[580px]">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight mb-6 text-white">
            브랜드 성장을 함께 이끄는<br />
            컨설팅 팀을 만나보세요
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed">
            &#39;진짜&#39; 중요한 것이 무엇인지 아는<br className="hidden md:block" />
            원스텝 컨설팅이 함께합니다.
          </p>
        </div>
      </div>
    </header>
  );
}
