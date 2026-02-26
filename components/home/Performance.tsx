export default function Performance() {
  const stats = [
    { label: '전략 수립 프로젝트', value: '500+' },
    { label: '파트너사 추천율', value: '85%' },
    { label: '평균 매출 상승률', value: '120%' },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-primary overflow-hidden">
      <img
        alt="Performance bg"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAehSQONhEsEa4ad5yiSDZTB16hwrzft9x2FjVAeeDSWfMS6Gk4AK8QATytIe9H904TmJ-lioDnUdUxfdorJnMEQNBnJiTCil0uYwqFv-1NNXPptYo_rM4ZEP8vGJyEz8hT-6xfwYGOeIHNwvuP629qkJowfZGbJXHo4DzakI4d9x7ToWRv73eW8QIkiNeRTg0WwIYv0I_coleOtbgrno1Y0hDvOb1QuaqOdxJl2YmSpxPor2sTOQh1EIR-OBEXZ_8t7t4ofS5yJ3FH"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-12 md:mb-16">Our Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index}>
              <span className="block text-4xl md:text-5xl font-extrabold mb-3 md:mb-4">{stat.value}</span>
              <p className="text-blue-100 text-base md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
