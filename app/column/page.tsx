import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import ColumnClient from '@/components/column/ColumnClient';
import { getAllPosts } from '@/lib/column';

export const metadata: Metadata = {
  title: '칼럼 | 원스텝컨설팅',
  description: '부동산, 정책자금, 기업자문, 세무, 개인재무에 관한 원스텝컨설팅의 금융 인사이트와 전략을 담은 칼럼입니다.',
};

export default async function ColumnPage() {
  // DB 연동 시 이 라인만 교체됩니다.
  const posts = await getAllPosts();

  return (
    <>
      <Navbar />
      <main>
        <ColumnClient posts={posts} />
      </main>
    </>
  );
}
