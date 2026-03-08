'use client';

import { useState } from 'react';
import PortfolioCard, { PortfolioItem } from './PortfolioCard';

interface PortfolioSectionProps {
  label?: string;
  title: string;
  description?: string;
  categories: string[];
  items: (PortfolioItem & { categoryKey: string })[];
}

export default function PortfolioSection({
  label = '포트폴리오',
  title,
  description,
  categories,
  items,
}: PortfolioSectionProps) {
  const [active, setActive] = useState(categories[0]);

  const filtered = items.filter((item) => item.categoryKey === active);

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <div className="text-center mb-10">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">{label}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <PortfolioCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
