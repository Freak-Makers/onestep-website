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
      question: '원스텝컨설팅은 어떤 일을 하는 회사인가요?',
      answer:
          '원스텝컨설팅은 부동산 자금, 정책자금, 기업 자문, 절세 전략, 개인 재무 설계를 하나로 연결하는 종합 금융 컨설팅 팀입니다. 단순한 금융 상품 추천이 아니라 고객의 상황을 분석하고 가장 합리적인 금융 전략을 설계하는 것을 목표로 합니다.',
    },
    {
      question: '어떤 고객들이 주로 상담을 받으시나요?',
      answer:
          '내 집 마련을 준비하는 개인 고객, 수익형 부동산 투자를 검토하는 고객, 정책자금이 필요한 창업자 및 사업자, 그리고 기업 절세 구조 설계가 필요한 중소기업 대표님들이 주로 상담을 진행하고 있습니다.',
    },
    {
      question: '여러 분야의 금융 문제를 한 번에 상담 받을 수 있나요?',
      answer:
          '네, 가능합니다. 원스텝컨설팅은 부동산, 정책자금, 기업 자문, 세무, 개인 재무까지 다양한 금융 분야를 하나의 창구에서 상담할 수 있도록 설계된 컨설팅 팀입니다. 필요한 경우 세무사, 회계사 등 전문 파트너와 협업하여 종합적인 해결책을 제안드립니다.',
    },
    {
      question: '상담은 어떤 방식으로 진행되나요?',
      answer:
          '초기 상담에서는 고객의 상황과 목표를 먼저 파악한 후, 필요한 금융 전략과 진행 방향을 안내드립니다. 상담은 방문 미팅, 전화 상담, 온라인 미팅 등 상황에 맞는 방식으로 진행할 수 있습니다.',
    },
    {
      question: '상담을 받으려면 어떻게 신청하면 되나요?',
      answer:
          '홈페이지 문의 또는 상담 신청을 남겨주시면 담당 컨설턴트가 확인 후 연락드립니다. 간단한 상담을 통해 현재 상황을 진단하고, 필요한 컨설팅 방향을 안내해 드립니다.',
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
