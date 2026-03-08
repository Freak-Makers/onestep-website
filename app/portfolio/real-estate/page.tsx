import Navbar from '@/components/common/Navbar';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import CTABanner from '@/components/common/CTABanner';

const CATEGORIES = ['부동산 투자', '부동산 대출', '경공매', '세금 절세'];

const ITEMS = [
  {
    name: '세화회계법인',
    category: '브랜드 블로그 대행',
    categoryKey: '부동산 투자',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    name: '세무법인대승',
    category: '브랜드 블로그 대행',
    categoryKey: '부동산 투자',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    name: '세무회계리브',
    category: '브랜드 블로그 대행',
    categoryKey: '부동산 투자',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80',
  },
  {
    name: '한국지방행정사무소',
    category: '브랜드 블로그 대행',
    categoryKey: '부동산 대출',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  },
  {
    name: '노무법인더함',
    category: '브랜드 블로그 대행',
    categoryKey: '부동산 대출',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    name: 'BFS노동법률사무소',
    category: '브랜드 블로그 대행',
    categoryKey: '경공매',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
  },
];

export default function RealEstatePortfolioPage() {
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
        <CTABanner
          title="부동산 금융 상담 신청"
          description="내 집 마련·수익형 부동산·건물 투자 — 자금 구조부터 설계하세요.<br/>원스텝이 합리적인 부동산 금융 전략을 함께 만들겠습니다."
        />
      </main>
    </>
  );
}
