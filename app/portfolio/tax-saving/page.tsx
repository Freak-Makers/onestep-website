import Navbar from '@/components/common/Navbar';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import CTABanner from '@/components/common/CTABanner';

const CATEGORIES = ['법인 절세', '가업 승계', '배당 전략', '세무 조정'];

const ITEMS = [
  {
    name: '(주)한국제조',
    category: '법인 절세 컨설팅',
    categoryKey: '법인 절세',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80',
  },
  {
    name: '세화회계법인',
    category: '법인 절세 컨설팅',
    categoryKey: '법인 절세',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    name: '(주)대한무역',
    category: '법인 절세 컨설팅',
    categoryKey: '법인 절세',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    name: '(주)가족기업',
    category: '가업 승계 컨설팅',
    categoryKey: '가업 승계',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  },
  {
    name: '중견기업그룹(주)',
    category: '가업 승계 컨설팅',
    categoryKey: '가업 승계',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80',
  },
  {
    name: '(주)글로벌무역',
    category: '배당 전략 컨설팅',
    categoryKey: '배당 전략',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
  },
];

export default function TaxSavingPortfolioPage() {
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
          title="기업 절세 상담 신청"
          description="법인 설계·급여·배당·상속·증여 — 합법적 절세 전략을 설계하세요.<br/>원스텝이 세무사·회계사 협업 네트워크로 함께하겠습니다."
        />
      </main>
    </>
  );
}
