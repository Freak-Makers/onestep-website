'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { ColumnPost } from '@/lib/column';

const POSTS_PER_PAGE = 9;

const BADGE_STYLES: Record<string, string> = {
  공지: 'bg-primary text-white',
  인기: 'bg-red-500 text-white',
  NEW: 'bg-accent text-white',
};

function PostCard({ post }: { post: ColumnPost }) {
  const badgeClass = post.badge ? (BADGE_STYLES[post.badge] ?? 'bg-slate-500 text-white') : '';

  return (
    <Link href={`/column/${post.slug}`} className="group block">
      {/* 썸네일 */}
      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-slate-100 dark:bg-slate-800">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {post.badge && (
          <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${badgeClass}`}>
            {post.badge}
          </span>
        )}
      </div>

      {/* 메타 정보 */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold text-primary">{post.category}</span>
        <span className="text-xs text-slate-400">·</span>
        <span className="text-xs text-slate-400">{post.publishedAt}</span>
      </div>

      {/* 제목 */}
      <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>
    </Link>
  );
}

export default function ColumnClient({ posts }: { posts: ColumnPost[] }) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  // 검색 필터링
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.excerpt?.toLowerCase().includes(q)
    );
  }, [posts, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPage(1);
  };

  // 페이지네이션 번호 범위 계산
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      {/* ── 히어로 ───────────────────────────── */}
      <header className="py-16 md:py-20 text-center bg-white dark:bg-background-dark px-6">
        <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">OneStep 칼럼</p>
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 dark:text-white">
          비즈니스 성장을 위한<br />
          원스텝만의 독보적인 노하우를 공유합니다.
        </h1>
      </header>

      {/* ── 아티클 그리드 ──────────────────────── */}
      <section className="bg-white dark:bg-background-dark pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-slate-400">
              <span className="material-symbols-outlined text-5xl mb-4 block">search_off</span>
              <p className="text-base">검색 결과가 없습니다.</p>
            </div>
          )}

          {/* ── 검색 바 ── */}
          <form onSubmit={handleSearch} className="mt-14 flex justify-center">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                value={query}
                onChange={handleQueryChange}
                placeholder="Search"
                className="w-full px-5 py-3 pr-12 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-primary outline-none transition-all"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                aria-label="검색"
              >
                <span className="material-symbols-outlined text-xl">search</span>
              </button>
            </div>
          </form>

          {/* ── 페이지네이션 ── */}
          {totalPages > 1 && (
            <nav className="mt-8 flex items-center justify-center gap-1" aria-label="페이지 네비게이션">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 hover:border-primary hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="이전 페이지"
              >
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </button>

              {pageNumbers.map((num) => (
                <button
                  key={num}
                  onClick={() => setPage(num)}
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    num === currentPage
                      ? 'bg-primary text-white'
                      : 'text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {num}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 hover:border-primary hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="다음 페이지"
              >
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* ── CTA 배너 ──────────────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="CTA background"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp9prqmVLK6kWOTbSjNriQjdcsp9acRidiDASXnYThlCKW0TeLPYSn7q-0SB_AH1t6mXFKtnMbOTH0J56-8MwX-2haOGunHYRZg6xXqOzlhfeKkVU-S7g8Y_X78m2IlEI-SaBBQKgLoYqRwJfSSiQ7N4r9dNseyeluhthuKX02BudztEQ1Ivp3ntt1EeLXPFtlR3D0EWNc3MO5iWvP5WscQHRoiMxcYVi5chEwhAqRBTYbEwdB05TvLD0ODeC8oXRBUdr4CXETsHSw"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight">
              저희의 목표는 단 하나,<br />
              대표님의 사업을 성공시키는 것
            </h2>
            <p className="text-blue-200 text-sm md:text-base">
              원스텝 컨설팅은 오직 대표님만을 위해 밤낮없이 일합니다.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center px-10 py-4 bg-white text-primary font-bold rounded-full text-base hover:shadow-2xl hover:scale-105 transition-all"
          >
            문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
