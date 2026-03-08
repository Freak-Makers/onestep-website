import Link from 'next/link';

interface PortfolioCTAProps {
  title: string;
  description: string;
}

export default function PortfolioCTA({ title, description }: PortfolioCTAProps) {
  return (
    <section className="relative h-[280px] md:h-[340px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400" />
      <div className="absolute inset-0 bg-slate-900/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">{title}</h2>
          <p
            className="text-white/80 text-sm md:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="shrink-0">
          <Link
            href="/contact"
            className="bg-white text-primary font-bold px-10 py-3.5 rounded-full text-base hover:scale-105 transition-transform inline-block shadow-lg"
          >
            문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
