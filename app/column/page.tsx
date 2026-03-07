import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ColumnClient from '@/components/column/ColumnClient';
import { getAllPosts } from '@/lib/column';

export const metadata: Metadata = {
  title: '칼럼 | OneStep Consulting',
  description: '원스텝 컨설팅의 비즈니스 인사이트와 노하우를 담은 칼럼입니다.',
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
      <Footer />
    </>
  );
}
