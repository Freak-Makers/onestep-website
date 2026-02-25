interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const defaultFaqs = [
    {
      question: '블로그나 인스타그램이나, 어디에든 관리해 주시는 거예요?',
      answer: '네, 원스텝 컨설팅은 통합 마케팅 그룹으로 네이버 블로그, 인스타그램, 페이스북, 유튜브 등 브랜드의 성격과 타겟 고객이 가장 많이 분포한 채널을 전략적으로 선정하여 통합 관리해 드립니다.',
    },
    {
      question: '대면 미팅도 가능한가요?',
      answer: '네, 가능합니다. 초기 전략 수립 단계에서는 심도 깊은 논의를 위해 대면 미팅을 권장하고 있습니다. 서울 강남구에 위치한 저희 사무실 또는 대표님의 사업장으로 방문 미팅이 가능합니다. (지역에 따라 유선/화상 미팅으로 대체될 수 있습니다.)',
    },
    {
      question: '우선 1개월만 진행해 보고 싶어요. 가능한가요?',
      answer: '마케팅은 초기 빌드업 과정이 필요하기 때문에 최소 3개월 이상의 진행을 추천드리나, 서비스의 퀄리티를 확인하고 싶으신 경우 1개월 테스트 진행도 가능합니다. 상세한 내용은 상담 시 안내 도와드리겠습니다.',
    },
    {
      question: '구체적인 가격에 대해 알고 싶어요!',
      answer: '가격은 관리 범위와 채널 수, 콘텐츠의 발행 빈도에 따라 다양하게 구성되어 있습니다. 기본 패키지부터 맞춤형 올인원 솔루션까지 다양하니, 문의를 남겨주시면 대표님의 상황에 맞는 최적의 견적을 제안해 드립니다.',
    },
  ];

  const faqs = items || defaultFaqs;

  return (
    <section className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">자주 묻는 질문</h2>
        <p className="text-slate-500 dark:text-slate-400">궁금하신 사항이 있으신가요? 자주 문의하시는 내용을 정리했습니다.</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="faq-accordion group bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-2 transition-all"
          >
            <summary className="flex items-center justify-between cursor-pointer p-4 font-bold list-none text-slate-900 dark:text-white">
              <span>{faq.question}</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="p-4 pt-2 text-slate-600 dark:text-slate-400 border-t border-slate-50 dark:border-slate-800 mt-2 text-sm leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
