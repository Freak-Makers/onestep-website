'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">404</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">준비중입니다</h1>
      <p className="text-gray-500 mb-10">
        요청하신 페이지를 찾을 수 없거나 아직 준비 중인 페이지입니다.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors"
      >
        <span className="material-symbols-outlined text-base leading-none">arrow_back</span>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
