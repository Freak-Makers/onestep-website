export default function ContactForm() {
  return (
    <section className="py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card-light dark:bg-card-dark rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-16">
          <div className="md:w-2/5">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              새로운 비즈니스의 시작부터 혁신적인 도약까지,<br/>
              원스텝 컨설팅이 실질적인 해답을 드립니다.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span className="text-slate-600 dark:text-slate-400">contact@onestep-con.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">call</span>
                <span className="text-slate-600 dark:text-slate-400">02-555-1234</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="text-slate-600 dark:text-slate-400">서울특별시 중구 을지로 234</span>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <form action="#" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">이름/회사명 <span
                    className="text-red-500">*</span></label>
                  <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all"
                         placeholder="성함 또는 기업명을 입력해주세요" type="text"/>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">업종 <span
                    className="text-red-500">*</span></label>
                  <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all"
                         placeholder="사업 업종을 입력해주세요" type="text"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">연락처 <span className="text-red-500">*</span></label>
                <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all"
                       placeholder="'-' 제외 입력" type="tel"/>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">문의내용 <span className="text-red-500">*</span></label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="상세한 문의 내용을 남겨주세요" rows={4}></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input className="rounded border-slate-300 text-primary focus:ring-primary" id="privacy"
                       type="checkbox"/>
                <label className="text-xs text-slate-500" htmlFor="privacy">개인정보 수집 및 이용에 동의합니다.</label>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:brightness-110 transition-all"
                      type="submit">상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
