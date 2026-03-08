import Navbar from '@/components/common/Navbar';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import PortfolioCTA from '@/components/portfolio/PortfolioCTA';

const CATEGORIES = ['정책 자금', '기업 대출', '투자 유치', '신용 보증'];

const ITEMS = [
  {
    name: '(주)테크솔루션',
    category: '정책 자금 컨설팅',
    categoryKey: '정책 자금',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    name: '스마트팩토리(주)',
    category: '정책 자금 컨설팅',
    categoryKey: '정책 자금',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    name: '그린에너지(주)',
    category: '정책 자금 컨설팅',
    categoryKey: '정책 자금',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    name: '(주)유통마트',
    category: '기업 대출 컨설팅',
    categoryKey: '기업 대출',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80',
  },
  {
    name: '한국물류(주)',
    category: '기업 대출 컨설팅',
    categoryKey: '기업 대출',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  },
  {
    name: '(주)바이오메드',
    category: '투자 유치 컨설팅',
    categoryKey: '투자 유치',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
  },
];

export default function BusinessFundPortfolioPage() {
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
          title="사업 자금 상담 신청"
          description="정책자금·기업 대출·투자 유치 — 어떤 자금이든 전략부터 시작하세요.<br/>원스텝이 최적의 자금 구조를 함께 설계하겠습니다."
        />
      </main>
    </>
  );
}
