'use client';

import React, {useState, useEffect, useCallback} from 'react';
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
                            <p className="text-white/80 text-sm font-medium mb-3">전문직 마케팅</p>
                            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
                                원스텝은 결과로 증명합니다
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
                            전문직분들께서 저희에게 대행 후,<br/>
                            문의량이 평균 335% 늘어난 이유는 무엇일까요?
                        </h2>
                        <p className="text-white/70 text-sm md:text-base leading-relaxed">
                            고객사 3,000여 개 보유 세무법인 그리고 연매출 약 400억 규모의 법무법인까지<br className="hidden md:block"/>
                            원스텝컨설팅은 전문직에 최적화된 금융 솔루션을 제공해드리고 있습니다.
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
                                    전문적인 상담으로<br />차별화된 서비스 제공
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    단순한 조언이 아닌, 고객의 재무 상황을 정밀 진단한 후 맞춤 전략을 수립합니다. 전담 컨설턴트가 처음부터 끝까지 동행합니다.
                                </p>
                                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                                    국내 최고 수준의 재무 전문가팀이 직접 상담하며, 평균 응답 시간 2시간 이내로 신속하게 서비스를 제공합니다.
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
                                    데이터 기반 투자 전략으로<br />가치를 높이는 전문적 진행
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    시장 데이터와 개인 재무 데이터를 결합하여 최적의 투자 포트폴리오를 설계합니다. 리스크를 최소화하면서 수익을 극대화합니다.
                                </p>
                                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                                    AI 기반 분석 도구와 전문가의 직관을 결합하여 빠르게 변하는 금융 시장에서도 안정적인 성과를 유지합니다.
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
                                    데이터에 기반한<br />체계적인 성과 보고서
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    월별 재무 성과를 정량적 지표로 명확하게 보고합니다. 자산 변화, 수익률, 절세 효과를 한눈에 확인할 수 있습니다.
                                </p>
                                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                                    모든 데이터는 실시간으로 업데이트되며, 전용 대시보드를 통해 언제든지 현황을 확인하실 수 있습니다.
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
                                핸디 사업자 마케팅팀 성과
                            </h2>
                            <p className="text-white/70 text-sm md:text-base">
                                저희와 함께한 고객들은 이미 &apos;이런 성과&apos;를 달성하셨습니다.
                            </p>
                        </div>

                        {/* 카드 3열 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
                            {[
                                {
                                    company: 'N사 이사청소 업체',
                                    lines: ['대행 6개월 간', '1억 7천만 원 매출 달성'],
                                    bold: '1억 7천만 원 매출 달성',
                                },
                                {
                                    company: 'L사 인테리어 업체',
                                    lines: ['대행 2달만에', '1억 2천만 원치 문의 유입'],
                                    bold: '1억 2천만 원치 문의 유입',
                                },
                                {
                                    company: 'B사 테니스 레슨장',
                                    lines: ['대행 1달만에 문의 24건,', '12명 신규생 유입'],
                                    bold: '12명 신규생 유입',
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
                            <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm tracking-widest mb-4">사업자 마케팅</p>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-snug">
                                대표님들 <span className="text-emerald-600 dark:text-emerald-400">92%</span>가 매월<br/>
                                재계약 하시는 이유는 무엇일까요?
                            </h2>
                        </div>

                        {/* 카드 목록 */}
                        <div className="flex flex-col gap-5">
                            {[
                                {
                                    title: '단순 행위보다 매출상승을\n우선시하여 마케팅합니다.',
                                    description: '문의가 많으면 유입경로를, 기대에 못미치면 개선 방향을 제안하여 매출 상승을 위한 최적의 솔루션을 제공합니다.',
                                    icon: 'trending_up',
                                },
                                {
                                    title: '\'실제 유효 데이터\'로\n체계적으로 진행합니다.',
                                    description: '업종별 유효 키워드, 구매전환에 유리한 채널 방향성 등 자체적으로 검증된 실제 데이터를 기반으로 진행합니다.',
                                    icon: 'analytics',
                                },
                                {
                                    title: '핸디 디자인팀과 협업하여\n완벽한 디자인을 제공합니다.',
                                    description: '국내 1위 비즈니스 중개 플랫폼에서 5.0을 받은 핸디디자인팀과 협업하여 최적화된 디자인을 제공합니다.',
                                    icon: 'design_services',
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
                            사업자 마케팅 서비스는 이렇게 진행됩니다
                        </h2>

                        {/* 서비스 네비게이션 카드 */}
                        <div className="flex flex-wrap justify-center gap-3 mb-16">
                            {[
                                {label: '브랜드 블로그 관리', icon: 'rss_feed', iconBg: 'bg-green-500', targetId: 'service-brand-blog'},
                                {label: '인스타그램 관리', icon: 'photo_camera', iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500', targetId: 'service-instagram'},
                                {label: '체험단·기자단 마케팅', icon: 'campaign', iconBg: 'bg-purple-500', targetId: 'service-experience'},
                                {label: '플레이스 관리', icon: 'location_on', iconBg: 'bg-emerald-500', targetId: 'service-place'},
                                {label: 'SEO 최적화', icon: 'search', iconBg: 'bg-rose-500', targetId: 'service-seo'},
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
                                    id: 'service-brand-blog',
                                    num: '사업자 마케팅 서비스 1',
                                    title: '브랜드 블로그',
                                    description: '키워드 및 검색알고리즘 대응 노출시키는 전략과\n고객을 설득시키는 글쓰기까지 전부 책임해 드립니다.',
                                    cardBg: 'from-green-400 to-emerald-500',
                                    icon: 'menu_book',
                                },
                                {
                                    id: 'service-instagram',
                                    num: '사업자 마케팅 서비스 2',
                                    title: '인스타그램',
                                    description: '지속적으로 빠지는 인스타그램 로직 분석부터 고객이 좋아할만한\n콘텐츠 제작까지 처음부터 전부 진행해 드리겠습니다.',
                                    cardBg: 'from-pink-400 to-purple-500',
                                    icon: 'photo_camera',
                                },
                                {
                                    id: 'service-experience',
                                    num: '사업자 마케팅 서비스 3',
                                    title: '체험단·기자단 마케팅',
                                    description: '바이럴로 발행되고 있는 블로거들의 체험단, 기자단 형태로\n여러분의 브랜드에 관한 글을 작성하여\n고객으로부터 신뢰를 얻을 수 있게 만들어 드립니다.',
                                    cardBg: 'from-rose-400 to-pink-500',
                                    icon: 'campaign',
                                },
                                {
                                    id: 'service-place',
                                    num: '사업자 마케팅 서비스 4',
                                    title: '스마트플레이스',
                                    description: '네이버 플레이스 상 페이지가 노출 될 수 있도록\n플레이스 내부 세팅 작업부터 트래픽 작업까지 전부 진행해 드립니다.',
                                    cardBg: 'from-emerald-400 to-green-500',
                                    icon: 'location_on',
                                },
                                {
                                    id: 'service-seo',
                                    num: '사업자 마케팅 서비스 5',
                                    title: 'SEO 최적화',
                                    description: 'SEO 최적화 작업을 통해 해당 검색 시\n최적화될 수 있도록 진행해 드립니다.',
                                    cardBg: 'from-blue-400 to-indigo-500',
                                    icon: 'search',
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
                                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors shadow-md"
                            >
                                <span className="material-symbols-outlined text-base">download</span>
                                사업자 마케팅 서비스 소개서 다운 받기
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── Client Cases Section ── */}
                <section className="py-20 md:py-28 bg-slate-50 dark:bg-background-dark/50">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* 제목 */}
                        <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white text-center leading-snug mb-12">
                            문의량이 최소 <span className="text-emerald-500">3배 이상</span> 증가하신<br/>
                            클라이언트 중 일부를 소개합니다
                        </h2>

                        {/* 카드 목록 */}
                        <div className="flex flex-col gap-5">
                            {[
                                {
                                    result: '대행 2달만에\n1달치 TO마감, 30건 이상 수임',
                                    category: '정리수납 전문 니마스',
                                    brand: 'NAS',
                                    brandIcon: 'skip_next',
                                    cardBg: 'from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600',
                                    icon: 'person',
                                    iconColor: 'text-slate-400',
                                },
                                {
                                    result: '대행 1달만에\n홈페이지 유입량 352% 증가\n프로필 방문율 1,180% 증가',
                                    category: '패션 브랜드 엔씨아래팀',
                                    brand: 'MIKVE',
                                    brandIcon: 'checkroom',
                                    cardBg: 'from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600',
                                    icon: 'checkroom',
                                    iconColor: 'text-slate-500',
                                },
                                {
                                    result: '채널 개설 한달만에 원하시는\n분야로 문의전환 성공\n1,227명에게 노출',
                                    category: '미국 영주건 비자 전문 서래금로법리갈센터',
                                    brand: '서래',
                                    brandIcon: 'gavel',
                                    cardBg: 'from-slate-600 to-slate-700 dark:from-slate-700 dark:to-slate-800',
                                    icon: 'apartment',
                                    iconColor: 'text-slate-300',
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
                                    q: '블로그나 인스타그램이나, 어디까지 관리해 주는거에요?',
                                    a: (
                                        <>
                                            <p className="font-bold text-slate-900 dark:text-white mb-6">
                                                계정만 전달해주시면 그다음은 저희가 전부 진행해드립니다 :)
                                            </p>
                                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                                원스텝컨설팅은 기본적인 디자인 세팅부터<br/>
                                                콘텐츠 기획, 발행까지 전부 올인원으로 대행해드리고 있어요.
                                            </p>
                                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                                대표님께서 마케팅 대행 맡기신 이후 별도로 하실 일 없이,<br/>
                                                전략 수립부터 실무 집행까지 전부 맡아 진행합니다.
                                            </p>
                                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                                다만 인스타그램 릴스의 경우<br/>
                                                영상 촬영이 필요한 콘텐츠는 대표님께서 직접 촬영해 주셔야 됩니다!
                                            </p>
                                            <p className="text-slate-600 dark:text-slate-400">
                                                물론 촬영이 결코 어렵지 않도록 상세한 가이드라인을 제공해드리고,<br/>
                                                핸드폰으로도 쉽게 따라 하실 수 있게 도와드리니<br/>
                                                이 점에 대해서도 전혀 걱정하실 필요 없습니다 :)
                                            </p>
                                        </>
                                    ),
                                },
                                {
                                    q: '사전미팅도 가능한가요?',
                                    a: (
                                        <p className="text-slate-600 dark:text-slate-400">
                                            네, 물론 가능합니다. 온라인/오프라인 미팅 모두 지원하며, 상담 신청 후 일정을 조율해 드립니다.
                                        </p>
                                    ),
                                },
                                {
                                    q: '우선 1개월만 진행해 보고 싶어요. 가능한가요?',
                                    a: (
                                        <p className="text-slate-600 dark:text-slate-400">
                                            1개월 단기 진행도 가능합니다. 다만 실질적인 효과는 최소 3개월 이상 지속 운영 시 나타나므로, 장기 파트너십을 권장드립니다.
                                        </p>
                                    ),
                                },
                                {
                                    q: '구체적인 가격에 대해 알고 싶어요!',
                                    a: (
                                        <p className="text-slate-600 dark:text-slate-400">
                                            서비스 범위와 운영 채널에 따라 금액이 달라집니다. 정확한 견적은 무료 상담 신청 후 안내드립니다.
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
                                문의하기
                            </h2>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed">
                                단순히 글만 발행하는 공장식 업체가 아닌,<br className="hidden md:block"/>
                                대표님의 사업을 함께 고민하는 파트너를 원하신다면 문의주세요.
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
            <Footer/>
        </>
    );
}
