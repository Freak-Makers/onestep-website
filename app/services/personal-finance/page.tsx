'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const carouselItems = [
  {
    title: '블로그 대행 6개월 간\n120건 이상 문의전환 성공',
    company: '세무법인 다승',
    icon: 'groups',
    bgColor: 'bg-slate-100',
    iconColor: 'text-slate-500',
  },
  {
    title: '블로그 대행 이후\n월 24건 이상 문의발생',
    company: '세무법인시원',
    icon: 'business_center',
    bgColor: 'bg-slate-800',
    iconColor: 'text-white',
  },
  {
    title: '대행 두 달 만에\n1,740만 원 수입 성공',
    company: '세무회계 리저브',
    icon: 'account_balance',
    bgColor: 'bg-primary',
    iconColor: 'text-white',
  },
  {
    title: '두 달만에 34건\n누적 문의 전환 성공',
    company: '한국비자행정사사무소',
    icon: 'gavel',
    bgColor: 'bg-slate-700',
    iconColor: 'text-white',
  },
  {
    title: '대행 이후\n문의량 5배 증가',
    company: '노무법인 놀봄',
    icon: 'balance',
    bgColor: 'bg-green-700',
    iconColor: 'text-white',
  },
];

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-slate-200 dark:border-slate-700">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-sm md:text-base font-medium text-slate-900 dark:text-white">
          {question}
        </span>
        <span
          className={`material-symbols-outlined text-slate-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="pb-8 text-sm leading-relaxed">
          {answer}
          <div className="flex justify-end mt-8">
            <button className="text-slate-300 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">share</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const processSteps = [
  {
    id: 0,
    label: '상담 / 미팅',
    title: '맞춤 상담 진행',
    description:
      '고객의 재무 상황과 목표를 정확히 파악하기 위한 1:1 심층 상담을 진행합니다. 현재의 자산 구조와 개선이 필요한 영역을 함께 점검합니다.',
    details: ['현재 재무 상태 진단', '단기 / 장기 목표 설정', '맞춤 솔루션 방향 제안'],
  },
  {
    id: 1,
    label: '현황 분석',
    title: '정밀 재무 현황 분석',
    description:
      '수집된 데이터를 기반으로 수입, 지출, 자산, 부채 구조를 정밀 분석합니다. 리스크 요인과 성장 가능성을 동시에 파악합니다.',
    details: ['수입·지출 구조 분석', '자산·부채 현황 파악', '리스크 요인 진단'],
  },
  {
    id: 2,
    label: '전략 수립',
    title: '개인 맞춤 재무 전략',
    description:
      '분석 결과를 토대로 단계별 재무 개선 로드맵을 설계합니다. 절세, 투자, 보험 등 다양한 금융 영역을 통합한 전략을 제시합니다.',
    details: ['절세 전략 수립', '투자 포트폴리오 설계', '보험·연금 최적화'],
  },
  {
    id: 3,
    label: '실행 지원',
    title: '지속적인 실행 및 모니터링',
    description:
      '수립된 전략의 실행을 체계적으로 지원하고, 시장 변화에 맞춰 전략을 지속적으로 업데이트합니다. 결과를 데이터로 보고합니다.',
    details: ['단계별 실행 지원', '월별 성과 리포트', '전략 조정 및 업데이트'],
  },
];

const requirements = [
  { icon: 'account_balance', label: '자산 관리' },
  { icon: 'savings', label: '저축 플랜' },
  { icon: 'trending_up', label: '투자 전략' },
  { icon: 'receipt_long', label: '절세 컨설팅' },
  { icon: 'health_and_safety', label: '보험 최적화' },
  { icon: 'elderly', label: '은퇴 설계' },
];

const serviceCards = [
  { label: '카페 침투', icon: 'local_cafe', bg: 'bg-green-100 dark:bg-green-900/40', iconColor: 'text-green-600 dark:text-green-400' },
  { label: '로고 제작', icon: 'edit', bg: 'bg-blue-100 dark:bg-blue-900/40', iconColor: 'text-blue-600 dark:text-blue-400' },
  { label: '상세페이지 제작', icon: 'article', bg: 'bg-orange-100 dark:bg-orange-900/40', iconColor: 'text-orange-500 dark:text-orange-400' },
  { label: 'NB블로그', icon: 'rss_feed', bg: 'bg-green-100 dark:bg-green-900/40', iconColor: 'text-green-600 dark:text-green-400' },
  { label: '메타 광고', icon: 'ads_click', bg: 'bg-blue-100 dark:bg-blue-900/40', iconColor: 'text-blue-600 dark:text-blue-400' },
  { label: 'SEO 세팅', icon: 'search', bg: 'bg-pink-100 dark:bg-pink-900/40', iconColor: 'text-pink-500 dark:text-pink-400' },
  { label: '홈페이지 디자인', icon: 'web', bg: 'bg-sky-100 dark:bg-sky-900/40', iconColor: 'text-sky-600 dark:text-sky-400' },
  { label: '트래픽 서비스', icon: 'tune', bg: 'bg-violet-100 dark:bg-violet-900/40', iconColor: 'text-violet-600 dark:text-violet-400' },
  { label: '브랜드블로그', icon: 'menu_book', bg: 'bg-green-100 dark:bg-green-900/40', iconColor: 'text-green-600 dark:text-green-400' },
  { label: '인스타그램', icon: 'photo_camera', bg: 'bg-pink-100 dark:bg-pink-900/40', iconColor: 'text-pink-500 dark:text-pink-400' },
  { label: '스마트플레이스', icon: 'location_on', bg: 'bg-emerald-100 dark:bg-emerald-900/40', iconColor: 'text-emerald-600 dark:text-emerald-400' },
];

export default function PersonalFinancePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [carouselCurrent, setCarouselCurrent] = useState(0);
  const carouselTotal = carouselItems.length;
  const carouselNext = useCallback(() => setCarouselCurrent((c) => (c + 1) % carouselTotal), [carouselTotal]);
  const carouselPrev = () => setCarouselCurrent((c) => (c - 1 + carouselTotal) % carouselTotal);
  useEffect(() => {
    const timer = setInterval(carouselNext, 3000);
    return () => clearInterval(timer);
  }, [carouselNext]);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <header className="relative h-[320px] md:h-[420px] overflow-hidden">
          {/* 배경 이미지 placeholder (실제 이미지로 교체 가능) */}
          <div className="absolute inset-0 bg-slate-600">
            <div className="w-full h-full bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400" />
          </div>
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-slate-900/50" />
          {/* 텍스트 */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <p className="text-white/80 text-sm font-medium mb-3">개인 재무 컨설팅</p>
              <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
                개인의 재무 목표를<br />체계적으로 실현합니다
              </h1>
            </div>
          </div>
        </header>

        {/* ── Quote / Intro ── */}
        <section className="relative py-20 md:py-28 px-6 overflow-hidden">
          {/* 파란 그라데이션 배경 (위쪽 짙은 파랑 → 아래쪽 흰색) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] via-[#3b6fd4] to-white dark:to-background-dark" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="material-icons text-white/60 text-5xl mb-6 block">format_quote</span>
            <h2 className="text-xl md:text-3xl font-extrabold text-white leading-snug mb-6">
              재무는 숫자가 아닌<br />
              삶의 방향을 설계하는 일입니다.
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              보험 리밸런싱, 금융 상품 활용, 생애주기 포트폴리오 — 개인의 재무 고민은 다양합니다.<br className="hidden md:block" />
              원스텝은 고객의 상황과 목표에 맞는 맞춤 재무 전략을 함께 설계합니다.
            </p>
          </div>
        </section>

        {/* ── Why Us ── */}
        <section className="py-12 md:py-16 bg-white dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl px-10 md:px-16 py-12 md:py-14 flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* 좌측 텍스트 */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5 text-slate-900 dark:text-white leading-snug">
                  지금 내 재무 상태,<br />정확하게 알고 계신가요?
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  보험이 적절한지, 금융 상품이 나에게 맞는지,<br className="hidden md:block" />
                  은퇴 준비가 충분한지 — 막연하게 느껴지신다면<br className="hidden md:block" />
                  원스텝의 개인 재무 진단을 먼저 받아보세요.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-bold text-sm hover:shadow-xl hover:brightness-110 transition-all"
                >
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  개인 재무 진단 신청하기
                </Link>
              </div>
              {/* 우측 책 이미지 placeholder */}
              <div className="shrink-0 flex items-end justify-center gap-3">
                {/* 뒤 책 */}
                <div className="w-32 md:w-40 h-44 md:h-56 bg-gradient-to-br from-[#3b6fd4] to-[#1e3a8a] rounded-lg shadow-xl translate-y-3 -rotate-6 flex flex-col justify-between p-4 relative">
                  <div className="absolute top-3 right-3 w-6 h-6 rounded bg-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xs">menu_book</span>
                  </div>
                  <div />
                  <p className="text-white/30 text-[9px] font-bold tracking-widest text-right">OneStep</p>
                </div>
                {/* 앞 책 */}
                <div className="w-32 md:w-40 h-44 md:h-56 bg-gradient-to-br from-[#4a7fe8] to-[#1e3a8a] rounded-lg shadow-2xl flex flex-col justify-between p-4 relative z-10">
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-3/4 bg-white/30 rounded-full" />
                    <div className="h-10 w-full bg-white/10 rounded-md mt-2" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-extrabold leading-snug mb-3">
                      개업 초기 전문직이<br />마케팅 하나로<br />살아남는 법
                    </p>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[8px]">business_center</span>
                      </div>
                      <p className="text-white/50 text-[8px] font-bold tracking-wider">OneStep</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services (교차 레이아웃) ── */}
        <section className="py-20 md:py-24 bg-white dark:bg-background-dark">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* 서비스 1 */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20 md:mb-24">
              <div className="md:w-1/2">
                <p className="text-primary font-bold text-sm mb-2">01</p>
                <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-slate-900 dark:text-white">
                  금융 상품 활용 전략으로<br />자산을 체계적으로 설계합니다
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  복잡한 금융 상품 중 고객의 상황에 맞는 최적의 상품을 선별합니다. 단순 추천이 아닌, 전략적인 자산 배분을 설계합니다.
                </p>
                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                  금융 창업 지원부터 생애주기별 포트폴리오 구성까지 — 개인의 재무 목표를 구체적인 계획으로 만들어 드립니다.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-8xl opacity-40">support_agent</span>
                </div>
              </div>
            </div>

            {/* 서비스 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-20 md:mb-24">
              <div className="md:w-1/2">
                <p className="text-primary font-bold text-sm mb-2">02</p>
                <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-slate-900 dark:text-white">
                  보험 점검 및 리밸런싱으로<br />불필요한 지출을 줄입니다
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  현재 가입된 보험이 나에게 맞는지 정밀 점검합니다. 중복 보장을 정리하고 꼭 필요한 보장만 남기는 리밸런싱을 진행합니다.
                </p>
                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                  보험료 최적화로 절약된 금액을 투자와 저축으로 돌려 실질적인 자산 증가로 이어지도록 설계합니다.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl shadow-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-8xl opacity-40">analytics</span>
                </div>
              </div>
            </div>

            {/* 서비스 3 */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="md:w-1/2">
                <p className="text-primary font-bold text-sm mb-2">03</p>
                <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-slate-900 dark:text-white">
                  생애주기 재무 포트폴리오로<br />은퇴까지 함께 설계합니다
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  현재의 저축, 투자, 보험을 생애주기에 맞게 재배치합니다. 30대의 자산 형성부터 50대의 은퇴 준비까지 단계별로 설계합니다.
                </p>
                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                  막연했던 노후 계획이 구체적인 숫자와 실행 계획으로 바뀝니다. 원스텝이 끝까지 함께합니다.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-8xl opacity-40">description</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats / Performance ── */}
        <section className="gradient-bg py-20 md:py-28 px-6 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center text-white relative z-10">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">Performance</p>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
              고객의 재무 목표가<br />원스텝의 목표입니다
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-4">
              개인 재무 컨설팅의 결과는 숫자보다 삶의 변화로 나타납니다.
            </p>
            <p className="text-white/60 text-xs mb-12">
              자체 상담 데이터 기준
            </p>

            {/* 통계 */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12 mb-16">
              {[
                { value: '89%', label: '고객 만족도' },
                { value: '90%', label: '목표 달성률' },
                { value: '225%', label: '평균 자산 증가율' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card px-8 md:px-12 py-6 rounded-2xl flex-1 min-w-[140px]">
                  <p className="text-3xl md:text-4xl font-black mb-2">{stat.value}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* 고객 후기 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl">person</span>
              </div>
              <p className="text-white/90 text-sm md:text-base max-w-lg leading-relaxed">
                "보험이 중복된 줄도 몰랐는데, 정리하고 나니 월 보험료가 줄면서 그 금액을 저축으로 돌릴 수 있었습니다. 재무 구조가 정리되니 불안감이 많이 줄었어요."
              </p>
              <p className="text-white/60 text-xs">— 직장인 김○○ (40대) 고객 후기</p>
            </div>
          </div>
        </section>

        {/* ── Review Carousel ── */}
        <section className="py-20 md:py-24 bg-white dark:bg-background-dark relative">
          {/* 좌측 화살표 */}
          <button
            onClick={carouselPrev}
            className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>

          {/* 슬라이딩 트랙 */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${carouselCurrent * 100}%)` }}
            >
              {carouselItems.map((item, idx) => (
                <div key={idx} className="w-full shrink-0 px-16 text-center">
                  <div className={`w-20 h-20 rounded-full ${item.bgColor} mx-auto mb-6 flex items-center justify-center shadow-md`}>
                    <span className={`material-symbols-outlined text-3xl ${item.iconColor}`}>{item.icon}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug mb-4 whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 dark:text-slate-500 text-sm">{item.company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 인디케이터 */}
          <div className="flex justify-center gap-1.5 mt-8">
            {carouselItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselCurrent(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === carouselCurrent ? 'bg-primary w-4' : 'bg-slate-200 dark:bg-slate-700 w-1.5'}`}
              />
            ))}
          </div>

          {/* 우측 화살표 */}
          <button
            onClick={carouselNext}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </section>

        {/* ── Feature Cards ── */}
        <section className="py-16 md:py-20 bg-slate-100 dark:bg-background-dark/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            {/* 카드 1 */}
            <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm overflow-hidden flex flex-col sm:flex-row items-stretch">
              <div className="sm:w-[42%] bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 min-h-[200px] flex items-center justify-center relative overflow-hidden shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-amber-100 dark:from-slate-700 dark:to-slate-600 flex flex-col items-center justify-center gap-3 p-6">
                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-5xl opacity-60">edit_note</span>
                    <div className="w-16 h-2 bg-amber-200 dark:bg-amber-800 rounded-full" />
                    <div className="w-12 h-2 bg-amber-100 dark:bg-amber-900 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="flex-1 p-7 md:p-8 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white mb-4 leading-snug">
                  업종별 문의 로직 보유
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  저희는 실제 성과들을 기반으로 한<br />
                  전문직 업종별 문의로직을 보유하고 있습니다.<br />
                  이를 반영하여 문의가 오는 글 만을 작성합니다.
                </p>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm overflow-hidden flex flex-col sm:flex-row items-stretch">
              <div className="sm:w-[42%] bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 min-h-[200px] flex items-center justify-center relative overflow-hidden shrink-0">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-100 to-slate-200 dark:from-slate-700 dark:to-slate-600">
                  <span className="material-symbols-outlined text-blue-400 dark:text-blue-300 text-5xl opacity-60">draw</span>
                  <div className="w-16 h-2 bg-blue-200 dark:bg-blue-800 rounded-full" />
                  <div className="w-10 h-2 bg-blue-100 dark:bg-blue-900 rounded-full" />
                </div>
              </div>
              <div className="flex-1 p-7 md:p-8 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white mb-4 leading-snug">
                  문의가 한 건이라도 안오면<br />
                  <span className="text-primary">100% 전액 환불</span>
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  효과가 없으면 어떡하지 고민하지 마세요!<br />
                  문의가 한 건이라도 안오면<br />
                  100% 전액 환불해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Blog Service Process ── */}
        <section className="py-20 md:py-24 bg-white dark:bg-background-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 헤더 */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                개인 재무 컨설팅 진행 과정
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                원스텝의 개인 재무 컨설팅은 현재 상황 진단부터 실행 지원까지 전 과정을 함께합니다.<br className="hidden md:block" />
                복잡한 금융 언어를 쉽게 풀어드리고, 고객이 직접 이해하고 결정할 수 있도록 안내합니다.<br className="hidden md:block" />
                단계별로 명확한 방향을 제시하며, 재무 목표 달성까지 지속적으로 지원합니다.
              </p>
            </div>

            {/* 4단계 프로세스 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 items-end">
              {[
                {
                  step: '초기 상담',
                  icon: 'chat',
                  color: 'bg-blue-200 dark:bg-blue-700',
                  textColor: 'text-blue-800 dark:text-white',
                  iconColor: 'text-blue-500 dark:text-blue-200',
                  items: ['1:1 심층 상담', '재무 목표 파악', '현재 상태 점검'],
                  offset: 'md:mb-0',
                },
                {
                  step: '재무 현황 분석',
                  icon: 'manage_search',
                  color: 'bg-blue-400 dark:bg-blue-600',
                  textColor: 'text-white',
                  iconColor: 'text-blue-100',
                  items: ['보험 점검', '금융 상품 분석', '자산·부채 구조 파악'],
                  offset: 'md:mb-4',
                },
                {
                  step: '전략 수립',
                  icon: 'edit_document',
                  color: 'bg-blue-600 dark:bg-blue-700',
                  textColor: 'text-white',
                  iconColor: 'text-blue-200',
                  items: ['맞춤 재무 로드맵 설계', '생애주기 포트폴리오 구성'],
                  offset: 'md:mb-8',
                },
                {
                  step: '실행 지원',
                  icon: 'verified',
                  color: 'bg-primary dark:bg-primary',
                  textColor: 'text-white',
                  iconColor: 'text-blue-200',
                  items: ['단계별 실행 지원', '정기 리포트 제공', '전략 업데이트'],
                  offset: 'md:mb-12',
                },
              ].map((col, idx) => (
                <div key={idx} className={`flex flex-col items-center gap-3 ${col.offset}`}>
                  {/* 상단 아이콘 원 */}
                  <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm">
                    <span className={`material-symbols-outlined text-2xl ${col.iconColor}`}>{col.icon}</span>
                  </div>
                  {/* 컬러 헤더 카드 */}
                  <div className={`w-full py-4 px-3 rounded-xl ${col.color} text-center`}>
                    <p className={`text-sm font-extrabold ${col.textColor}`}>{col.step}</p>
                  </div>
                  {/* 하위 항목들 */}
                  <div className="w-full flex flex-col gap-2">
                    {col.items.map((item) => (
                      <div
                        key={item}
                        className="w-full py-3 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-card-dark text-center"
                      >
                        <p className="text-xs text-slate-600 dark:text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Marketing Services Marquee ── */}
        <section className="py-20 md:py-24 bg-white dark:bg-background-dark">
          <style>{`
            @keyframes services-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              animation: services-marquee 32s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl pt-16 pb-14 overflow-hidden">
              {/* 헤더 */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start px-10 md:px-16 mb-14">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight shrink-0">
                  개인 재무의 모든 영역
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  보험 리밸런싱, 금융 상품 활용, 부동산 매입 자금, 생애주기 포트폴리오까지<br className="hidden md:block" />
                  개인의 재무와 관련된 모든 고민을 하나의 창구에서 함께 해결합니다.<br className="hidden md:block" />
                  원스텝이 고객의 상황에 맞는 최적의 재무 전략을 제안해 드립니다.
                </p>
              </div>

              {/* 무한 마르퀴 캐러셀 */}
              <div className="overflow-hidden">
                <div className="flex gap-4 marquee-track" style={{ width: 'max-content' }}>
                  {[...serviceCards, ...serviceCards].map((card, idx) => (
                    <div
                      key={idx}
                      className="w-[160px] h-[140px] bg-white dark:bg-card-dark rounded-2xl shadow-sm p-4 flex flex-col justify-between shrink-0"
                    >
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">{card.label}</p>
                      <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center self-end`}>
                        <span className={`material-symbols-outlined text-2xl ${card.iconColor}`}>{card.icon}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12 px-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3b6fd4] to-[#7c3aed] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:shadow-xl hover:brightness-110 transition-all"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  개인 재무 상담 신청하기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Success Stories ── */}
        <section className="py-20 md:py-24 bg-slate-50 dark:bg-background-dark/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 헤더 */}
            <h2 className="text-xl md:text-2xl font-extrabold text-center text-slate-900 dark:text-white mb-10 leading-snug">
              개인 재무 컨설팅으로<br />
              실질적인 변화를 만든 사례입니다
            </h2>

            {/* 카드 리스트 */}
            <div className="space-y-4">
              {/* 스토리 1 */}
              <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm overflow-hidden flex flex-col sm:flex-row">
                <div className="flex-1 p-7 flex flex-col justify-center">
                  <h4 className="text-lg md:text-xl font-extrabold mb-3 text-slate-900 dark:text-white leading-snug">
                    보험 리밸런싱으로<br />월 보험료 절감 및 자산 재배분
                  </h4>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mb-1">40대 직장인 고객</p>
                  <p className="text-primary text-xs font-bold">보험 점검 · 리밸런싱</p>
                </div>
                <div className="sm:w-[46%] bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center min-h-[160px] relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <span className="material-symbols-outlined text-blue-400 text-4xl mb-2">health_and_safety</span>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold leading-snug">
                      중복 보장 정리 후<br />월 절감액을 저축으로 전환
                    </p>
                  </div>
                </div>
              </div>

              {/* 스토리 2 */}
              <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm overflow-hidden flex flex-col sm:flex-row">
                <div className="flex-1 p-7 flex flex-col justify-center">
                  <h4 className="text-lg md:text-xl font-extrabold mb-3 text-slate-900 dark:text-white leading-snug">
                    생애주기 포트폴리오 설계로<br />은퇴 목표 구체화
                  </h4>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mb-1">30대 맞벌이 부부</p>
                  <p className="text-primary text-xs font-bold">생애주기 재무 포트폴리오</p>
                </div>
                <div className="sm:w-[46%] bg-slate-100 dark:bg-slate-800 flex items-center justify-center min-h-[160px] relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <span className="material-symbols-outlined text-slate-400 text-4xl mb-2">elderly</span>
                    <p className="text-slate-600 dark:text-slate-300 text-[10px] font-bold leading-snug">
                      막연했던 노후 계획이<br />구체적인 로드맵으로 전환
                    </p>
                  </div>
                </div>
              </div>

              {/* 스토리 3 */}
              <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm overflow-hidden flex flex-col sm:flex-row">
                <div className="flex-1 p-7 flex flex-col justify-center">
                  <h4 className="text-lg md:text-xl font-extrabold mb-3 text-slate-900 dark:text-white leading-snug">
                    금융 상품 활용 전략으로<br />자산 증가 구조 설계
                  </h4>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mb-1">자영업자 고객</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded bg-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-[8px]">savings</span>
                    </div>
                    <p className="text-primary text-xs font-bold">개인 재무 컨설팅</p>
                  </div>
                </div>
                <div className="sm:w-[46%] bg-slate-900 flex items-center justify-center min-h-[160px] relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <span className="material-symbols-outlined text-slate-400 text-4xl mb-2">trending_up</span>
                    <p className="text-white text-[10px] font-bold leading-snug">
                      분산된 금융 자산을<br />통합 관리 구조로 재편
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 더 보러가기 버튼 */}
            <div className="text-center mt-10">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 px-7 py-3 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all"
              >
                <span>→ 더 보러가기</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 md:py-24 bg-white dark:bg-background-dark">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 헤더 */}
            <div className="relative mb-8">
              <span className="absolute -top-4 left-0 text-7xl md:text-8xl font-black text-slate-100 dark:text-slate-800 select-none leading-none">
                FAQ
              </span>
              <p className="relative z-10 text-primary font-bold text-sm tracking-widest pt-6">
                자주 묻는 질문
              </p>
            </div>

            {/* 아코디언 */}
            <div>
              {[
                {
                  q: '보험 점검은 어떻게 진행되나요?',
                  a: (
                    <>
                      <p className="font-bold text-slate-900 dark:text-white mb-6">
                        현재 가입된 보험 증권을 공유해주시면 전문적인 분석을 시작합니다.
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        중복 보장 여부, 보장 공백, 보험료 과다 납입 여부를 점검합니다.<br />
                        분석 결과를 바탕으로 리밸런싱 방향을 함께 논의하며, 강요 없이 고객이 직접 결정합니다.
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        보험 리밸런싱 후 절약된 금액을 어디에 활용할지도 함께 설계해 드립니다.
                      </p>
                    </>
                  ),
                },
                {
                  q: '금융 지식이 없어도 상담이 가능한가요?',
                  a: (
                    <p className="text-slate-600 dark:text-slate-400">
                      네, 금융 지식이 전혀 없으셔도 괜찮습니다. 원스텝은 복잡한 금융 언어를 쉽게 설명하고, 고객이 충분히 이해한 뒤 결정할 수 있도록 안내합니다.
                    </p>
                  ),
                },
                {
                  q: '부동산 매입 자금도 함께 상담받을 수 있나요?',
                  a: (
                    <p className="text-slate-600 dark:text-slate-400">
                      네, 원스텝은 개인 재무뿐만 아니라 부동산 매입 자금 컨설팅도 함께 제공합니다. 내 집 마련 전략부터 수익형 부동산 자금 구조까지 통합적으로 설계해 드립니다.
                    </p>
                  ),
                },
                {
                  q: '상담은 어디서 받을 수 있나요?',
                  a: (
                    <p className="text-slate-600 dark:text-slate-400">
                      온라인·오프라인 상담 모두 가능합니다. 문의 페이지에서 간단한 정보를 남겨주시면 담당 컨설턴트가 편한 방식으로 연락드립니다.
                    </p>
                  ),
                },
              ].map(({ q, a }, idx) => (
                <FaqItem key={idx} question={q} answer={a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="relative h-[280px] md:h-[340px] flex items-center overflow-hidden">
          {/* 배경 이미지 placeholder */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400" />
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-slate-900/50" />
          {/* 콘텐츠 */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
                개인 재무 상담 신청
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                보험, 투자, 은퇴, 부동산 — 어떤 고민이든 시작해보세요.<br className="hidden md:block" />
                원스텝이 고객의 재무 목표를 함께 설계하겠습니다.
              </p>
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
      </main>
      <Footer />
    </>
  );
}
