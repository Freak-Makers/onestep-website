'use client';

import React, {useState, useEffect, useCallback} from 'react';
import Link from 'next/link';
import Navbar from '@/components/common/Navbar';

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


export default function CorporateFinancePage() {
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
            <Navbar/>
            <main>
                {/* ── Hero ── */}
                <header className="relative h-[320px] md:h-[420px] overflow-hidden">
                    {/* 배경 이미지 placeholder (실제 이미지로 교체 가능) */}
                    <div className="absolute inset-0 bg-slate-600">
                        <div className="w-full h-full bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400"/>
                    </div>
                    {/* 어두운 오버레이 */}
                    <div className="absolute inset-0 bg-slate-900/50"/>
                    {/* 텍스트 */}
                    <div className="relative z-10 h-full flex items-center">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                            <p className="text-white/80 text-sm font-medium mb-3">기업 금융 컨설팅</p>
                            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
                                기업의 자금 구조를<br />전략적으로 설계합니다
                            </h1>
                        </div>
                    </div>
                </header>

                {/* ── Quote / Intro ── */}
                <section className="relative py-20 md:py-28 px-6 overflow-hidden">
                    {/* 파란 그라데이션 배경 (위쪽 짙은 파랑 → 아래쪽 흰색) */}
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] via-[#3b6fd4] to-white dark:to-background-dark"/>
                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <span className="material-icons text-white/60 text-5xl mb-6 block">format_quote</span>
                        <h2 className="text-xl md:text-3xl font-extrabold text-white leading-snug mb-6">
                            사업자에게 가장 중요한 것은<br/>
                            자금 구조를 제대로 이해하는 것입니다.
                        </h2>
                        <p className="text-white/70 text-sm md:text-base leading-relaxed">
                            정책자금, 기업인증, 절세 구조 — 세 가지가 맞물릴 때 기업의 재무 체력이 만들어집니다.<br className="hidden md:block"/>
                            원스텝컨설팅은 창업 초기부터 성장 단계까지 기업 금융의 전 과정을 함께 설계합니다.
                        </p>
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
                                    정책자금 진단 및<br />자금 구조 설계
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    창업자와 사업자를 위한 무상지원금·융자금을 진단하고, 금융기관과 보증기관 전략을 수립합니다.
                                </p>
                                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                                    정책자금 컨설팅 파트너 및 은행 지점장 네트워크를 통해 최적의 자금 조달 경로를 찾아드립니다.
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
                                    기업인증으로<br />경쟁력과 신뢰를 높입니다
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    벤처기업 인증, 메인비즈, 이노비즈, ISO 인증 — 기업 가치를 높이는 인증 전략을 함께 수립합니다.
                                </p>
                                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                                    인증 취득은 단순한 타이틀이 아닙니다. 정책자금 접근성 향상, 입찰 경쟁력 강화 등 실질적인 사업 효과로 이어집니다.
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
                                    절세 구조 설계로<br />세무 부담을 최적화합니다
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    창업 및 법인 설계, 급여·배당·상속·증여 구조를 설계합니다. 세무사·회계사와 협업하여 합법적이고 효과적인 절세 방안을 제시합니다.
                                </p>
                                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                                    단순한 세금 줄이기가 아닌, 기업의 장기적인 재무 구조를 고려한 체계적인 절세 설계를 제공합니다.
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



                {/* ── Performance Section ── */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    {/* 그라데이션 배경: 위 짙은 네이비 → 아래 연한 블루/흰색 */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e5a] via-[#2a4a8a] to-[#c8d8f0]"/>
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* 헤더 */}
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                                원스텝 기업 금융 컨설팅 성과
                            </h2>
                            <p className="text-white/70 text-sm md:text-base">
                                전략적인 자금 설계와 인증 취득으로 실질적인 기업 경쟁력을 만들어 드립니다.
                            </p>
                        </div>

                        {/* 카드 3열 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
                            {[
                                {
                                    company: '초기 창업 사업자',
                                    lines: ['정책자금 컨설팅으로', '무상지원금 확보 성공'],
                                    bold: '무상지원금 확보 성공',
                                },
                                {
                                    company: '중소 법인 대표',
                                    lines: ['급여·배당 구조 설계로', '절세 효과 극대화'],
                                    bold: '절세 효과 극대화',
                                },
                                {
                                    company: '성장기 스타트업',
                                    lines: ['벤처기업 인증 취득으로', '투자 유치 경쟁력 확보'],
                                    bold: '투자 유치 경쟁력 확보',
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-7 hover:bg-white/30 transition-all cursor-pointer"
                                >
                                    <p className="text-white font-extrabold text-base mb-3">{item.company}</p>
                                    <div className="text-white/90 text-sm leading-relaxed mb-10">
                                        {item.lines.map((line, li) => (
                                            <p key={li}>
                                                {line === item.bold
                                                    ? <span className="font-extrabold text-white">{line}</span>
                                                    : line
                                                }
                                            </p>
                                        ))}
                                    </div>
                                    <div className="absolute bottom-6 right-6 text-white/60 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 더 보기 버튼 */}
                        <div className="flex justify-center">
                            <Link
                                href="/portfolio"
                                className="flex items-center gap-2 border border-white/50 text-white/90 text-sm font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all"
                            >
                                <span className="material-symbols-outlined text-base">arrow_forward</span>
                                더 보러가기
                            </Link>
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

                {/* ── Why Renewal Section ── */}
                <section className="py-20 md:py-28 bg-slate-50 dark:bg-background-dark/50">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* 헤더 */}
                        <div className="text-center mb-12">
                            <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm tracking-widest mb-4">기업 금융 컨설팅</p>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-snug">
                                원스텝이 기업 금융 컨설팅에서<br/>
                                신뢰받는 이유는 무엇일까요?
                            </h2>
                        </div>

                        {/* 카드 목록 */}
                        <div className="flex flex-col gap-5">
                            {[
                                {
                                    title: '자금 조달부터 구조 설계까지\n원스텝에서 해결합니다.',
                                    description: '정책자금 진단, 금융기관 전략, 보증기관 활용까지 — 기업의 자금 조달 전 과정을 체계적으로 설계합니다.',
                                    icon: 'account_balance',
                                },
                                {
                                    title: '전문 파트너 네트워크로\n실행력을 높입니다.',
                                    description: '세무사·회계사·법인 절세 컨설팅 파트너·은행 지점장 네트워크를 통해 복합적인 기업 금융 문제를 해결합니다.',
                                    icon: 'groups',
                                },
                                {
                                    title: '인증 취득으로\n기업 가치를 실질적으로 높입니다.',
                                    description: '벤처·이노비즈·메인비즈·ISO 인증은 단순한 타이틀이 아닙니다. 정책자금 접근성, 입찰 경쟁력, 투자 유치로 연결됩니다.',
                                    icon: 'verified',
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-card-dark rounded-2xl shadow-sm overflow-hidden flex flex-col sm:flex-row items-stretch"
                                >
                                    {/* 이미지 영역 */}
                                    <div className="sm:w-[240px] shrink-0 aspect-[4/3] sm:aspect-auto bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-6xl">{item.icon}</span>
                                    </div>
                                    {/* 텍스트 영역 */}
                                    <div className="flex-1 p-7 flex flex-col justify-center">
                                        <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white leading-snug mb-3 whitespace-pre-line">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Service Detail Section ── */}
                <section className="py-20 md:py-28 bg-white dark:bg-background-dark">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* 제목 */}
                        <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white text-center mb-10">
                            기업 금융 컨설팅 서비스는 이렇게 진행됩니다
                        </h2>

                        {/* 서비스 네비게이션 카드 */}
                        <div className="flex flex-wrap justify-center gap-3 mb-16">
                            {[
                                {label: '정책자금 컨설팅', icon: 'account_balance', iconBg: 'bg-blue-500', targetId: 'service-policy-fund'},
                                {label: '기업인증 자문', icon: 'verified', iconBg: 'bg-emerald-500', targetId: 'service-certification'},
                                {label: '기업 절세 컨설팅', icon: 'receipt_long', iconBg: 'bg-purple-500', targetId: 'service-tax'},
                                {label: '창업·법인 설계', icon: 'business_center', iconBg: 'bg-rose-500', targetId: 'service-corp-setup'},
                                {label: '네트워크 자문', icon: 'groups', iconBg: 'bg-amber-500', targetId: 'service-network'},
                            ].map((nav) => (
                                <button
                                    key={nav.targetId}
                                    onClick={() => {
                                        document.getElementById(nav.targetId)?.scrollIntoView({behavior: 'smooth'});
                                    }}
                                    className="group w-[180px] bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-left hover:border-primary hover:shadow-md transition-all"
                                >
                                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-4 leading-snug">{nav.label}</p>
                                    <div className="flex items-end justify-between">
                                        <div className={`w-9 h-9 rounded-xl ${nav.iconBg} flex items-center justify-center`}>
                                            <span className="material-symbols-outlined text-white text-lg">{nav.icon}</span>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-base">arrow_forward</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* 상세 서비스 섹션 */}
                        <div className="flex flex-col">
                            {[
                                {
                                    id: 'service-policy-fund',
                                    num: '기업 금융 컨설팅 서비스 1',
                                    title: '정책자금 컨설팅',
                                    description: '창업자·사업자 대상 정책자금을 진단하고\n무상지원금 / 융자금 구조를 설계합니다.\n금융기관 및 보증기관 전략을 함께 수립합니다.',
                                    cardBg: 'from-blue-400 to-blue-600',
                                    icon: 'account_balance',
                                },
                                {
                                    id: 'service-certification',
                                    num: '기업 금융 컨설팅 서비스 2',
                                    title: '기업인증 자문',
                                    description: '벤처기업 인증, 메인비즈, 이노비즈,\nISO 인증 취득 전략을 함께 수립합니다.\n인증 취득으로 기업의 신뢰도와 경쟁력을 높입니다.',
                                    cardBg: 'from-emerald-400 to-green-600',
                                    icon: 'verified',
                                },
                                {
                                    id: 'service-tax',
                                    num: '기업 금융 컨설팅 서비스 3',
                                    title: '기업 절세 컨설팅',
                                    description: '급여·배당·상속·증여 구조를 분석하고\n합법적인 절세 방안을 설계합니다.\n세무사·회계사와 협업하여 최적의 구조를 제안합니다.',
                                    cardBg: 'from-purple-400 to-violet-600',
                                    icon: 'receipt_long',
                                },
                                {
                                    id: 'service-corp-setup',
                                    num: '기업 금융 컨설팅 서비스 4',
                                    title: '창업·법인 설계',
                                    description: '창업 초기 법인 설계부터 사업 구조 최적화까지\n장기적인 재무 체력을 갖출 수 있도록 함께 설계합니다.',
                                    cardBg: 'from-rose-400 to-pink-600',
                                    icon: 'business_center',
                                },
                                {
                                    id: 'service-network',
                                    num: '기업 금융 컨설팅 서비스 5',
                                    title: '네트워크 자문',
                                    description: '세무사·은행 지점장·법무사·노무사 등\n분야별 전문가 네트워크를 연결해 드립니다.\n복합적인 기업 금융 문제를 종합적으로 해결합니다.',
                                    cardBg: 'from-amber-400 to-orange-500',
                                    icon: 'groups',
                                },
                            ].map((service, idx) => (
                                <div key={service.id}>
                                    <div className="border-t border-slate-100 dark:border-slate-800"/>
                                    <div
                                        id={service.id}
                                        className="flex flex-col sm:flex-row items-start sm:items-center gap-8 py-10"
                                    >
                                        {/* 텍스트 */}
                                        <div className="flex-1">
                                            <p className="text-slate-400 dark:text-slate-500 text-xs font-medium mb-2">{service.num}</p>
                                            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                                                {service.description}
                                            </p>
                                        </div>
                                        {/* 이미지 카드 */}
                                        <div className={`shrink-0 w-full sm:w-[220px] h-[130px] rounded-2xl bg-gradient-to-br ${service.cardBg} shadow-md flex items-center justify-center`}>
                                            <span className="material-symbols-outlined text-white text-6xl opacity-70">{service.icon}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="border-t border-slate-100 dark:border-slate-800"/>
                        </div>

                        {/* 하단 CTA */}
                        <div className="flex justify-center mt-12">
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors shadow-md"
                            >
                                <span className="material-symbols-outlined text-base">chat</span>
                                기업 금융 컨설팅 상담 신청하기
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── Client Cases Section ── */}
                <section className="py-20 md:py-28 bg-slate-50 dark:bg-background-dark/50">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* 제목 */}
                        <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white text-center leading-snug mb-12">
                            기업 금융 컨설팅으로<br/>
                            실질적인 변화를 만든 사례입니다
                        </h2>

                        {/* 카드 목록 */}
                        <div className="flex flex-col gap-5">
                            {[
                                {
                                    result: '정책자금 진단으로\n무상지원금 수혜 성공',
                                    category: '제조업 초기 창업자',
                                    brand: '정책자금 컨설팅',
                                    brandIcon: 'account_balance',
                                    cardBg: 'from-blue-100 to-blue-200 dark:from-slate-700 dark:to-slate-600',
                                    icon: 'account_balance',
                                    iconColor: 'text-blue-400',
                                },
                                {
                                    result: '벤처기업 인증 취득으로\n투자 유치 경쟁력 확보',
                                    category: 'IT 스타트업',
                                    brand: '기업인증 자문',
                                    brandIcon: 'verified',
                                    cardBg: 'from-emerald-100 to-emerald-200 dark:from-slate-700 dark:to-slate-600',
                                    icon: 'verified',
                                    iconColor: 'text-emerald-500',
                                },
                                {
                                    result: '급여·배당 구조 최적화로\n세무 부담 실질 절감',
                                    category: '중소 법인 대표',
                                    brand: '기업 절세 컨설팅',
                                    brandIcon: 'receipt_long',
                                    cardBg: 'from-purple-100 to-purple-200 dark:from-slate-700 dark:to-slate-800',
                                    icon: 'receipt_long',
                                    iconColor: 'text-purple-500',
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 flex flex-col sm:flex-row items-stretch gap-5"
                                >
                                    {/* 텍스트 */}
                                    <div className="flex-1 flex flex-col justify-between min-h-[130px]">
                                        <div>
                                            <p className="text-base font-extrabold text-slate-900 dark:text-white leading-snug whitespace-pre-line mb-4">
                                                {item.result}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 dark:text-slate-500 mb-1.5">{item.category}</p>
                                            <div className="flex items-center gap-1.5">
                                                <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-base">{item.brandIcon}</span>
                                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{item.brand}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 이미지 카드 */}
                                    <div className={`shrink-0 w-full sm:w-[220px] h-[130px] sm:h-auto rounded-xl bg-gradient-to-br ${item.cardBg} flex items-center justify-center`}>
                                        <span className={`material-symbols-outlined text-6xl ${item.iconColor} opacity-60`}>{item.icon}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 더 보기 버튼 */}
                        <div className="flex justify-center mt-12">
                            <Link
                                href="/portfolio"
                                className="flex items-center gap-2 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 text-sm font-semibold px-8 py-3 rounded-full hover:border-primary hover:text-primary dark:hover:text-primary transition-all"
                            >
                                <span className="material-symbols-outlined text-base">arrow_forward</span>
                                더 보러가기
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-20 md:py-24 bg-white dark:bg-background-dark">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* 헤더 */}
                        <div className="relative mb-8">
              <span
                  className="absolute -top-4 left-0 text-7xl md:text-8xl font-black text-slate-100 dark:text-slate-800 select-none leading-none">
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
                                    q: '창업 전에도 정책자금 컨설팅을 받을 수 있나요?',
                                    a: (
                                        <>
                                            <p className="font-bold text-slate-900 dark:text-white mb-6">
                                                네, 창업 전 단계부터 상담을 시작하는 것이 오히려 유리합니다.
                                            </p>
                                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                                창업 초기에 활용할 수 있는 무상지원금과 융자금 프로그램이 다양하게 존재합니다.<br/>
                                                사업 형태와 업종에 따라 적합한 정책자금이 달라지므로, 사전에 진단을 받으시는 것을 권장드립니다.
                                            </p>
                                            <p className="text-slate-600 dark:text-slate-400">
                                                원스텝은 창업 준비 단계부터 법인 설계, 정책자금 신청까지 전 과정을 함께 설계해 드립니다.
                                            </p>
                                        </>
                                    ),
                                },
                                {
                                    q: '기업인증 취득까지 시간이 얼마나 걸리나요?',
                                    a: (
                                        <p className="text-slate-600 dark:text-slate-400">
                                            인증 종류에 따라 다르지만 일반적으로 벤처기업 인증은 1~2개월, 이노비즈·메인비즈는 2~4개월 내외입니다. 사전 준비 상태에 따라 달라질 수 있으며, 원스텝이 전 과정을 함께 진행합니다.
                                        </p>
                                    ),
                                },
                                {
                                    q: '세무사·회계사와 직접 연결도 가능한가요?',
                                    a: (
                                        <p className="text-slate-600 dark:text-slate-400">
                                            네, 원스텝은 세무사·회계사 파트너 네트워크를 보유하고 있습니다. 고객의 상황에 맞는 전문가를 선별하여 연결해 드리며, 컨설팅 과정에서 협업을 통해 통합적인 절세 구조를 설계합니다.
                                        </p>
                                    ),
                                },
                                {
                                    q: '상담은 어떻게 시작하면 되나요?',
                                    a: (
                                        <p className="text-slate-600 dark:text-slate-400">
                                            문의 페이지에서 간단한 정보를 남겨주시면 담당 컨설턴트가 연락드립니다. 온라인·오프라인 상담 모두 가능하며, 첫 상담은 부담 없이 시작하실 수 있습니다.
                                        </p>
                                    ),
                                },
                            ].map(({q, a}, idx) => (
                                <FaqItem key={idx} question={q} answer={a}/>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Final CTA ── */}
                <section className="relative h-[280px] md:h-[340px] flex items-center overflow-hidden">
                    {/* 배경 이미지 placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400"/>
                    {/* 어두운 오버레이 */}
                    <div className="absolute inset-0 bg-slate-900/50"/>
                    {/* 콘텐츠 */}
                    <div
                        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col sm:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
                                기업 금융 상담 신청
                            </h2>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed">
                                정책자금, 기업인증, 절세 구조 — 어떤 고민이든 좋습니다.<br className="hidden md:block"/>
                                원스텝이 대표님의 기업 금융 전략을 함께 설계하겠습니다.
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
        </>
    );
}
