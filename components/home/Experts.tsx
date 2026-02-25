export default function Experts() {
  const experts = [
    {
      name: '글로벌 전략 전문가',
      role: '전략 컨설팅 팀장',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHM_vjlHBbuAn6QijdPkaodSglzsY4hH1TcMUQ3HW3DB8FXpETX1fjN9L8-fBCkI6p9JpdvbtZOXGFpE2EToZLDuP0_wr9H1Gkc5YE2IWPjhtwbSTcedwAOTFoPnRXtCnJMFr6OfvvxRdqh6GiGRKiyweuUwm_6Hu673Kqb4d3V1F5QrTvN4cPvlowDLHGyskwkKKAT1AmTSdBfiLEqcdOP_9bfKhdrdsLegWvUkCeN4alioAqoSFTdkFmuBzDfiJ2j1SoUngJXOzq',
    },
    {
      name: '퍼포먼스 마케터',
      role: '디지털 마케팅 팀',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2r6PQyW-iE6LuS4Y5zpkWcwgxm9ooAXqWc6u7-2lilyEynPzvYuIYlDAnIXTL2zltCKXVqpyaaaM9haS-ut2CaVBcZfjDWFPxZZE9fdpx_Fs4q7yscFZdpqMsq_oRqAiL5DSuuM_ZSmdUvvGxpJ4m1LeMieIMAYTEO7UlIjRmchMcTkewsDkfgueXIpePYIbr4qdcr48l4j-DeKsiix9hID4lfyeVamGMghbXW0GXvuyyvbqGzEOmqkuBFuOmQ9qJvy4vYC2QpnaQ',
    },
    {
      name: '브랜드 디렉터',
      role: 'BX 디자인 파트',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqH6yyBSkeaCvEPNnUBeMFiZ406BjBqVquXVB5FbY-tSVo8K6YaPfYL2rp3hA6dbSO6-Rt_gioZHQP00b9MlDd7GYSPdrqcXXn9ZPUJnrr2GdTpfkdnp-PJh8YVMfjQ4JzDVZ3eibY-9cXYtpbEved_DMt1HU3SJTJTzuZDMIYvUUGqNp0hizoKaE7ZfALAu-ZEsv-bsMk5p9ItSwwZ1CoJzRvzMybBK62npXxbKIG2ZedkwDGdnQfmH9dBh0g4TfpZkL2PSDFW4Ma',
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 bg-white dark:bg-background-dark">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <span className="text-primary font-bold text-xl">01</span>
          <h3 className="text-3xl font-extrabold mt-4 mb-6 text-slate-900 dark:text-slate-100">
            현장 경험이 풍부한 전문가 그룹이<br />
            모든 프로젝트를 '직접' 주도합니다.
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            시장의 메커니즘을 누구보다 잘 아는 시니어급 전문가들이 투입됩니다.<br />
            단순한 조언자가 아니라 비즈니스 파트너로서 함께 고민하고 성과를 만들어냅니다.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
          {experts.map((expert, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center border border-slate-100 dark:border-slate-700">
              <div className="w-16 h-16 bg-slate-300 rounded-full mx-auto mb-3 overflow-hidden">
                <img alt={expert.name} className="w-full h-full object-cover" src={expert.image} />
              </div>
              <p className="font-bold text-sm text-slate-900 dark:text-slate-100">{expert.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{expert.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
