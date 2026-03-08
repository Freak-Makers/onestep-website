import Navbar from '@/components/common/Navbar';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import PortfolioCTA from '@/components/portfolio/PortfolioCTA';

const CATEGORIES = ['창업 지원금', '엔젤 투자', '액셀러레이터', 'R&D 지원'];

const ITEMS = [
  {
    name: '(주)푸드테크',
    category: '창업 지원금 컨설팅',
    categoryKey: '창업 지원금',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
  },
  {
    name: '에듀핀테크(주)',
    category: '창업 지원금 컨설팅',
    categoryKey: '창업 지원금',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  },
  {
    name: '(주)헬스케어AI',
    category: '창업 지원금 컨설팅',
    categoryKey: '창업 지원금',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
  {
    name: '모빌리티스타트업(주)',
    category: '엔젤 투자 컨설팅',
    categoryKey: '엔젤 투자',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    name: '(주)그린스타트',
    category: '엔젤 투자 컨설팅',
    categoryKey: '엔젤 투자',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
  },
  {
    name: 'AI솔루션(주)',
    category: 'R&D 지원 컨설팅',
    categoryKey: 'R&D 지원',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
];

export default function StartupFundPortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioSection
          label="포트폴리오"
          title="실제 고객 후기를 확인해 보세요"
          description="실제 클라이언트들의 후기를 기반으로 제작된 포트폴리오입니다"
          categories={CATEGORIES}
          items={ITEMS}
        />
        <PortfolioCTA
          title="창업 자금 상담 신청"
          description="무상지원금·융자금·R&D 지원 — 창업 준비부터 자금 확보까지.<br/>원스텝이 최적의 창업 자금 전략을 함께 설계하겠습니다."
        />
      </main>
    </>
  );
}
