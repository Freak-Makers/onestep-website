import ScrollReveal from '@/components/common/ScrollReveal';

export default function Performance() {
  const stats = [
    { label: '구축된 전문 파트너 네트워크', value: '5개 분야+' },
    { label: '고객 재상담률', value: '90%' },
    { label: '고객 만족도', value: '90%' },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-primary overflow-hidden">
      <img
        alt="Performance background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAehSQONhEsEa4ad5yiSDZTB16hwrzft9x2FjVAeeDSWfMS6Gk4AK8QATytIe9H904TmJ-lioDnUdUxfdorJnMEQNBnJiTCil0uYwqFv-1NNXPptYo_rM4ZEP8vGJyEz8hT-6xfwYGOeIHNwvuP629qkJowfZGbJXHo4DzakI4d9x7ToWRv73eW8QIkiNeRTg0WwIYv0I_coleOtbgrno1Y0hDvOb1QuaqOdxJl2YmSpxPor2sTOQh1EIR-OBEXZ_8t7t4ofS5yJ3FH"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <ScrollReveal>
          <span className="section-label" style={{ color: 'rgba(147,197,253,0.9)' }}>Performance</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4">Our Performance</h2>
          <p className="text-blue-200 text-sm md:text-base mb-12 md:mb-16">
            금융 선택이 합리적인 결과로 이어진 원스텝의 실적입니다.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 120} from="bottom">
            <div>
              <span className="block text-4xl md:text-5xl font-extrabold mb-3 md:mb-4">
                {stat.value}
              </span>
              <p className="text-blue-100 text-base md:text-lg">{stat.label}</p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
