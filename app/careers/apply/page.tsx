"use client";

import { useRef, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/common/Navbar";

function CareersApplyForm() {
  const searchParams = useSearchParams();
  const position = searchParams.get("position") ?? "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [channel, setChannel] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const [agreeRequired, setAgreeRequired] = useState(false);
  const [agreeOptional, setAgreeOptional] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const resumeInputRef = useRef<HTMLInputElement>(null);
  const portfolioInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white dark:bg-background-dark flex items-center justify-center px-6">
          <div className="text-center">
            <span className="material-symbols-outlined text-primary text-6xl mb-4 block">check_circle</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">지원서가 제출되었습니다</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">검토 후 빠른 시일 내에 연락드리겠습니다.</p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              채용 페이지로 돌아가기
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-background-dark pt-28 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* 뒤로 가기 */}
          <Link
            href="/careers"
            className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors mb-8"
          >
            <span className="material-symbols-outlined text-base">chevron_left</span>
            이전으로
          </Link>

          {/* 제목 */}
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">지원서 작성</h1>
          {position && (
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-10">{position}</p>
          )}
          {!position && <div className="mb-10" />}

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* 이름 */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value.trim()) setNameError(false);
                }}
                placeholder="내용을 입력해 주세요."
                className={`w-full px-4 py-3 rounded-xl border ${
                  nameError
                    ? "border-red-400 focus:ring-red-400"
                    : "border-slate-200 dark:border-slate-700"
                } bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400`}
              />
              {nameError && (
                <p className="text-red-500 text-xs mt-1.5">필수 응답 항목입니다.</p>
              )}
            </div>

            {/* 연락처 */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01012345678"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
              />
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@domain.com"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
              />
            </div>

            {/* 지원경로 */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                지원경로 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  required
                  className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white"
                >
                  <option value="" disabled>선택해주세요.</option>
                  <option value="website">회사 홈페이지</option>
                  <option value="jobkorea">잡코리아</option>
                  <option value="saramin">사람인</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="referral">지인 추천</option>
                  <option value="other">기타</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* 이력서 */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                이력서 <span className="text-red-500">*</span>
                <span className="material-symbols-outlined text-base text-slate-400 align-middle ml-1" title="50MB 이하, PDF 권장">
                  info
                </span>
              </label>
              <div
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => resumeInputRef.current?.click()}
              >
                <span className={`text-sm ${resumeFile ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>
                  {resumeFile ? resumeFile.name : "파일 첨부 (50MB 이하, 업로드한 문서는 PDF 파일로 자동 변환됩니다.)"}
                </span>
                <span className="material-symbols-outlined text-slate-400 shrink-0">attach_file</span>
              </div>
              <input
                ref={resumeInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.hwp"
                className="hidden"
                onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
              />
            </div>

            {/* 포트폴리오 */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                포트폴리오
                <span className="material-symbols-outlined text-base text-slate-400 align-middle ml-1" title="50MB 이하, PDF 권장">
                  info
                </span>
              </label>
              <div
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => portfolioInputRef.current?.click()}
              >
                <span className={`text-sm ${portfolioFile ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>
                  {portfolioFile ? portfolioFile.name : "파일 첨부 (50MB 이하, 업로드한 문서는 PDF 파일로 자동 변환됩니다.)"}
                </span>
                <span className="material-symbols-outlined text-slate-400 shrink-0">attach_file</span>
              </div>
              <input
                ref={portfolioInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.hwp,.zip"
                className="hidden"
                onChange={(e) => setPortfolioFile(e.target.files?.[0] ?? null)}
              />
            </div>

            {/* 개인정보 동의 */}
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                지원서 제출을 위한 개인정보 수집 및 이용 동의서
              </p>
              <div className="flex flex-col gap-2">
                {/* 필수 동의 */}
                <label className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={agreeRequired}
                      onChange={(e) => setAgreeRequired(e.target.checked)}
                      className="w-4 h-4 rounded accent-primary"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      개인정보 수집 / 이용 동의
                    </span>
                    <span className="text-xs font-semibold text-red-500 bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded">
                      필수
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 text-base">expand_more</span>
                </label>
                {/* 선택 동의 */}
                <label className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={agreeOptional}
                      onChange={(e) => setAgreeOptional(e.target.checked)}
                      className="w-4 h-4 rounded accent-primary"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      개인정보 수집 / 이용 동의
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">
                      선택
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 text-base">expand_more</span>
                </label>
              </div>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={!agreeRequired}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed mt-2"
            >
              지원서 제출
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default function CareersApplyPage() {
  return (
    <Suspense>
      <CareersApplyForm />
    </Suspense>
  );
}
