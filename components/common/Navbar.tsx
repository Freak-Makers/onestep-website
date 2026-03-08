'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const navLinks: NavItem[] = [
  { href: '/', label: '원스텝컨설팅은?' },
  {
    href: '/services',
    label: '서비스 소개',
    children: [
      { href: '/services/personal-finance', label: '개인 금융' },
      { href: '/services/corporate-finance', label: '기업 금융' },
    ],
  },
  {
    href: '/portfolio',
    label: '포트폴리오',
    children: [
      { href: '/portfolio/real-estate', label: '부동산 금융' },
      { href: '/portfolio/personal-finance', label: '개인 재무' },
      { href: '/portfolio/business-fund', label: '사업 자금' },
      { href: '/portfolio/startup-fund', label: '창업 자금' },
      { href: '/portfolio/tax-saving', label: '기업 절세' },
    ],
  },
  { href: '/column', label: '칼럼' },
  { href: '/careers', label: '채용정보' },
  { href: '/contact', label: '문의하기' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileMenu(prev => (prev === label ? null : label));
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/70 shadow-sm' : 'bg-white/70 dark:bg-background-dark/70 backdrop-blur-sm border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/" className="text-2xl font-extrabold text-primary">OneStep Consulting</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6 font-light text-sm lg:text-base xl:text-lg text-slate-900 dark:text-slate-100">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative group">
                <button className="flex items-center gap-1 hover:text-primary transition-colors py-2 whitespace-nowrap">
                  {link.label}
                  <span className="material-symbols-outlined text-base transition-transform group-hover:rotate-180">
                    expand_more
                  </span>
                </button>
                {/* Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block">
                  <ul className="bg-white dark:bg-card-dark border border-slate-100 dark:border-slate-700 rounded-2xl shadow-xl py-2 min-w-[140px]">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2.5 text-base text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-slate-100 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800`}
      >
        <div className="px-6 py-4 flex flex-col gap-1 font-semibold text-base text-slate-900 dark:text-slate-100">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href}>
                <button
                  onClick={() => toggleMobileSubmenu(link.label)}
                  className="w-full flex items-center justify-between py-3 hover:text-primary transition-colors"
                >
                  <span>{link.label}</span>
                  <span className={`material-symbols-outlined text-base transition-transform ${openMobileMenu === link.label ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openMobileMenu === link.label ? 'max-h-64' : 'max-h-0'
                  }`}
                >
                  <ul className="pl-4 pb-2 flex flex-col gap-1 border-l-2 border-slate-100 dark:border-slate-800 ml-1">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-medium"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition-colors py-3"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
