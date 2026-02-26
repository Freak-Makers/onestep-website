'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/#why', label: '왜 원스텝인가?' },
    { href: '/services', label: '서비스 소개' },
    { href: '/portfolio', label: '성공 사례' },
    { href: '/contact', label: '비즈니스 문의' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-extrabold text-primary">OneStep Consulting</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-900 dark:text-slate-100">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
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
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 font-semibold text-sm text-slate-900 dark:text-slate-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
