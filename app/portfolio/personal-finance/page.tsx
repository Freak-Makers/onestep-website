import Navbar from '@/components/common/Navbar';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import PortfolioCTA from '@/components/portfolio/PortfolioCTA';

const CATEGORIES = ['자산 관리', '보험 설계', '연금 플랜', '대출 상담'];

const ITEMS = [
  {
    name: '김민준 고객',
    category: '자산 관리 컨설팅',
    categoryKey: '자산 관리',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
  {
    name: '이서연 고객',
    category: '자산 관리 컨설팅',
    categoryKey: '자산 관리',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
  },
  {
    name: '박지훈 고객',
    category: '자산 관리 컨설팅',
    categoryKey: '자산 관리',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  },
  {
    name: '최수아 고객',
    category: '보험 설계 컨설팅',
    categoryKey: '보험 설계',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80',
  },
  {
    name: '정우성 고객',
    category: '보험 설계 컨설팅',
    categoryKey: '보험 설계',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    name: '한예슬 고객',
    category: '연금 플랜 컨설팅',
    categoryKey: '연금 플랜',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
  },
];

export default function PersonalFinancePortfolioPage() {
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
          title="개인 재무 상담 신청"
          description="보험, 투자, 은퇴, 부동산 — 어떤 고민이든 시작해보세요.<br/>원스텝이 고객의 재무 목표를 함께 설계하겠습니다."
        />
      </main>
    </>
  );
}
