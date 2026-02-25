import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-extrabold text-primary">OneStep Consulting</Link>
        </div>
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-900 dark:text-slate-100">
          <Link href="/#why" className="hover:text-primary transition-colors">왜 원스텝인가?</Link>
          <Link href="/services" className="hover:text-primary transition-colors">서비스 소개</Link>
          <Link href="/portfolio" className="hover:text-primary transition-colors">성공 사례</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">비즈니스 문의</Link>
        </div>
      </div>
    </nav>
  );
}
