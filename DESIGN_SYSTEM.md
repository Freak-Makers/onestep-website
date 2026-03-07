# OneStep Consulting — 디자인 시스템 문서

새 페이지를 추가할 때 이 문서를 기준으로 일관성을 유지하세요.

---

## 1. 색상 (Colors)

`globals.css`의 `@theme`으로 정의된 CSS 변수를 사용합니다.

| 역할 | Tailwind 클래스 | 헥스값 |
|---|---|---|
| 주요 브랜드 색 (네이비) | `text-primary`, `bg-primary`, `border-primary` | `#1e3a8a` |
| 강조 색 (블루) | `text-accent`, `bg-accent` | `#3b82f6` |
| 라이트 배경 | `bg-background-light` | `#ffffff` |
| 다크 배경 | `bg-background-dark` | `#0f172a` |
| 라이트 카드 | `bg-card-light` | `#f8fafc` |
| 다크 카드 | `bg-card-dark` | `#1e293b` |

**Tailwind 기본 색 보조 사용 패턴:**
- 본문 텍스트: `text-slate-900` / `dark:text-white`
- 보조 텍스트: `text-slate-500` / `dark:text-slate-400`
- 설명 텍스트: `text-slate-600` / `dark:text-slate-400`
- 테두리: `border-slate-200` / `dark:border-slate-700`
- 아이콘 배경: `bg-blue-100` / `dark:bg-blue-900/30`

---

## 2. 타이포그래피 (Typography)

**폰트:** Pretendard (`--font-pretendard`)
`layout.tsx`에서 `pretendard/dist/web/static/pretendard.css`를 전역 임포트합니다.

| 용도 | 클래스 |
|---|---|
| 대형 페이지 제목 (Hero H1) | `text-3xl md:text-5xl font-extrabold leading-tight` |
| 섹션 제목 (H2) | `text-3xl font-bold` or `text-2xl md:text-3xl font-extrabold` |
| 카드 제목 (H3/H4) | `text-xl font-bold` |
| 본문 | `text-base` or `text-sm leading-relaxed` |
| 라벨/배지 | `text-xs font-bold tracking-widest uppercase` |
| 보조 설명 | `text-sm text-slate-500` |

**텍스트 그라데이션:**
```tsx
<span className="text-gradient">텍스트</span>
// background: linear-gradient(135deg, #1e3a8a → #3b82f6)
```

**Primary 컬러 강조 텍스트:**
```tsx
<span className="text-primary">강조 텍스트</span>
```

---

## 3. 레이아웃 (Layout)

### 컨테이너
모든 섹션 콘텐츠는 아래 패턴을 사용합니다:
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* 콘텐츠 */}
</div>
```
또는 일부 섹션은 `px-6`만 사용하기도 합니다.

### 섹션 패딩
- 표준: `py-20 md:py-24`
- 대형: `py-24` or `py-20 md:py-32`

### 그리드
```tsx
// 4열 그리드 (Features, 서비스 목록)
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8

// 3열 그리드 (포트폴리오, 후기)
grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8

// 2열 그리드
grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8

// 좌측 고정 + 우측 스크롤 (Services)
flex flex-col lg:flex-row gap-12 items-start
// 좌: lg:w-1/3 lg:sticky lg:top-24
// 우: lg:w-2/3
```

---

## 4. 컴포넌트 패턴

### Navbar
- Sticky, `z-50`, `bg-white/80 backdrop-blur-md`
- 높이: `h-20`
- 로고: `text-2xl font-extrabold text-primary`
- 메뉴: `font-semibold text-sm`, hover 시 `text-primary`
- 모바일: 햄버거 버튼 + max-h 애니메이션으로 드롭다운

### Hero 섹션 (페이지 최상단)
**타입 A — 좌측 텍스트 + 우측 이미지 (흰 배경, 홈페이지):**
```tsx
<header className="relative pt-20 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-white dark:bg-background-dark">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 ...">
        제목 <span className="text-primary">강조</span>
      </h1>
      <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-8 md:mb-10 leading-relaxed">설명</p>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* CTA 버튼 */}
      </div>
    </div>
  </div>
  {/* 우측 이미지 (데스크탑만) */}
  <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
    <img className="w-full h-full object-cover rounded-l-3xl shadow-2xl" />
    <div className="absolute inset-0 bg-gradient-to-r from-background-light ..."></div>
  </div>
</header>
```

**타입 B — 전체 그라데이션 배경 Hero (Services 페이지):**
```tsx
<section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img className="w-full h-full object-cover opacity-20" />
    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90"></div>
  </div>
  <div className="relative z-10 text-center text-white px-6">
    <h1 className="text-3xl md:text-6xl font-black mb-8 leading-tight">제목</h1>
    {/* CTA 버튼 */}
  </div>
</section>
```

**타입 C — 텍스트 + 이미지 2열 (Contact 페이지):**
```tsx
<header className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-slate-50 dark:bg-slate-900">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12">
      <div className="lg:w-1/2">/* 텍스트 */</div>
      <div className="lg:w-1/2">/* 이미지 */</div>
    </div>
  </div>
</header>
```

**타입 D — 텍스트 중앙 정렬 (Portfolio 페이지):**
```tsx
<header className="py-16 md:py-20 text-center bg-white dark:bg-background-dark px-6">
  <p className="text-primary font-semibold mb-4">페이지 카테고리</p>
  <h1 className="text-3xl md:text-5xl font-extrabold mb-6 ...">제목</h1>
  <p className="text-slate-500 max-w-2xl mx-auto">설명</p>
</header>
```

### 버튼 (CTA)

**Primary 버튼 (직사각형):**
```tsx
<Link href="..." className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all text-center">
  CTA 텍스트
</Link>
```

**Secondary 버튼 (직사각형):**
```tsx
<Link href="..." className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all text-center">
  텍스트
</Link>
```

**Primary 버튼 (Pill/원형):**
```tsx
<Link href="..." className="bg-white text-primary font-bold px-8 md:px-10 py-3 md:py-4 rounded-full hover:scale-105 transition-transform">
  텍스트
</Link>
```

**Outline 버튼 (Pill):**
```tsx
<Link href="..." className="bg-transparent border-2 border-white text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-white hover:text-primary transition-all">
  텍스트
</Link>
```

**Submit 버튼 (폼):**
```tsx
<button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:brightness-110 transition-all">
  제출
</button>
```

### 카드

**기본 카드 (흰 배경, 아이콘 + 텍스트):**
```tsx
<div className="bg-white dark:bg-card-dark p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center mb-6">
    <span className="material-symbols-outlined">{icon}</span>
  </div>
  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">제목</h3>
  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">설명</p>
</div>
```

**서비스 카드 (이미지 + hover grayscale → color):**
```tsx
<div className="group p-6 bg-card-light dark:bg-card-dark rounded-2xl border border-transparent hover:border-primary transition-all">
  <img className="w-full h-40 object-cover rounded-xl mb-6 grayscale group-hover:grayscale-0 transition-all" />
  <h4 className="text-xl font-bold mb-2 ...">{title}</h4>
  <p className="text-sm text-slate-500 ...">{description}</p>
</div>
```

**포트폴리오 카드 (이미지 + hover overlay):**
```tsx
<div className="group">
  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <span className="text-white font-bold border border-white px-6 py-2 rounded-full">자세히 보기</span>
    </div>
  </div>
  <h4 className="text-lg font-bold ...">{title}</h4>
  <p className="text-sm text-slate-500 ...">{description}</p>
</div>
```

**글래스 카드 (그라데이션 배경 위에서):**
```tsx
<div className="glass-card p-6 md:p-8 rounded-2xl text-white text-center">
  {/* glass-card = bg: rgba(255,255,255,0.1), backdrop-filter: blur(10px) */}
</div>
```

**후기/리뷰 카드:**
```tsx
<div className="bg-white dark:bg-card-dark p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 text-left">
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold">{initial}</div>
    <p className="font-bold text-sm ...">{name} <span className="text-yellow-400">★★★★★</span></p>
  </div>
  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{text}</p>
</div>
```

**성공 사례 카드 (대형, 태그 + 인용문):**
```tsx
<div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all">
  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">태그</span>
  <h5 className="text-lg md:text-xl font-bold mt-3 ...">{title}</h5>
  <div className="bg-slate-50 dark:bg-slate-900 p-5 md:p-6 rounded-2xl mt-6">
    <p className="italic text-slate-600 dark:text-slate-400 text-sm md:text-base">"{quote}"</p>
  </div>
</div>
```

**링크 카드 (아이콘 + 화살표):**
```tsx
<Link href="..." className="group block p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-card-dark hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all">
  <p className="font-bold text-base md:text-lg mb-6 text-left ...">{title}</p>
  <div className="flex items-end justify-between">
    <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
      <span className="material-icons text-xl md:text-2xl">{icon}</span>
    </div>
    <span className="material-icons text-slate-300 group-hover:text-primary transition-colors">trending_flat</span>
  </div>
</Link>
```

### 배지/태그
```tsx
// 상단 레이블 (섹션 시작 전)
<span className="text-primary font-bold tracking-widest uppercase text-sm">Services</span>

// 인라인 배지
<span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary text-sm font-bold mb-4">Consulting Inquiry</span>

// 카드 태그
<span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">스케일업 프로젝트</span>
```

### 배경 섹션

**그라데이션 배경 (통계/퍼포먼스):**
```tsx
<section className="gradient-bg py-16 md:py-20 px-6">
  {/* gradient-bg = linear-gradient(135deg, #1e3a8a → #3b82f6) */}
</section>
```

**Primary 배경 + 이미지 오버레이 (Performance):**
```tsx
<section className="relative py-20 md:py-32 bg-primary overflow-hidden">
  <img className="absolute inset-0 w-full h-full object-cover opacity-20" />
  <div className="relative z-10 text-white text-center">...</div>
</section>
```

**어두운 이미지 + 오버레이 (CTA 배너):**
```tsx
<section className="relative h-[350px] md:h-[400px] flex items-center overflow-hidden">
  <img className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
  <div className="relative max-w-7xl mx-auto px-6 w-full ...">
    {/* 텍스트 + 버튼 */}
  </div>
</section>
```

**밝은 배경 교차 (섹션 구분):**
- 흰 배경: `bg-white dark:bg-background-dark`
- 연한 배경: `bg-card-light dark:bg-background-dark/50` or `bg-slate-50 dark:bg-background-dark/50`

### 폼 요소

**입력 필드:**
```tsx
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all" />
```

**텍스트에어리어:**
```tsx
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all" rows={4} />
```

**레이블:**
```tsx
<label className="block text-sm font-semibold mb-2">
  필드명 <span className="text-red-500">*</span>
</label>
```

### FAQ 아코디언
```tsx
<details className="group bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-2 transition-all">
  <summary className="flex items-center justify-between cursor-pointer p-4 font-bold list-none text-slate-900 dark:text-white">
    <span>{question}</span>
    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
  </summary>
  <div className="p-4 pt-2 text-slate-600 dark:text-slate-400 border-t border-slate-50 dark:border-slate-800 mt-2 text-sm leading-relaxed">
    {answer}
  </div>
</details>
```

### 아이콘
Material Symbols Outlined (기본) 또는 Material Icons를 사용합니다.

```tsx
// Outlined (주로 사용)
<span className="material-symbols-outlined">{icon_name}</span>
// text-primary, text-3xl 등 크기/색 조합

// Filled (일부 사용)
<span className="material-icons">{icon_name}</span>
```

주요 사용 아이콘: `psychology`, `business_center`, `ads_click`, `rocket_launch`, `lightbulb`, `edit_document`, `trending_up`, `verified`, `mail`, `call`, `location_on`, `expand_more`, `menu`, `close`, `chevron_left`, `chevron_right`, `trending_flat`, `format_quote`

---

## 5. 페이지 구조 (Page Structure)

### 페이지 템플릿
```tsx
export default function NewPage() {
  return (
    <>
      <Navbar />
      <header>
        {/* 페이지 히어로 */}
      </header>
      <main>
        {/* 섹션들 */}
      </main>
      <Footer />
    </>
  );
}
```

### 기존 페이지 목록
| 경로 | 파일 |
|---|---|
| `/` | `app/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/portfolio` | `app/portfolio/page.tsx` |
| `/contact` | `app/contact/page.tsx` |

### 섹션 배경 교차 패턴 (흰/연회색 교대)
```
Hero: bg-white
섹션1: bg-card-light (연회색)
섹션2: bg-white
섹션3: bg-primary (진한 색)
섹션4: bg-white
...
```

---

## 6. 반응형 브레이크포인트

| 접두사 | 범위 |
|---|---|
| (없음) | 모바일 우선 |
| `sm:` | 640px+ |
| `md:` | 768px+ |
| `lg:` | 1024px+ |

주요 패턴:
- 모바일: `flex-col`, 1열 그리드, 작은 패딩
- 데스크탑: `flex-row`, 다열 그리드, 스티키 사이드바 (`lg:sticky lg:top-24`)

---

## 7. 다크 모드

모든 컴포넌트는 `dark:` 변형 클래스를 포함합니다.
`@custom-variant dark (&:where(.dark, .dark *))` — `.dark` 클래스 기반 토글.

자주 쓰는 쌍:
- `text-slate-900 dark:text-white`
- `text-slate-500 dark:text-slate-400`
- `bg-white dark:bg-background-dark`
- `bg-card-light dark:bg-card-dark`
- `border-slate-200 dark:border-slate-700`
- `bg-blue-100 dark:bg-blue-900/30`

---

## 8. 전환/애니메이션 (Transitions)

| 패턴 | 클래스 |
|---|---|
| 기본 전환 | `transition-all` or `transition-colors` |
| 카드 hover 상승 | `hover:-translate-y-1` |
| 이미지 zoom | `transition-transform duration-500 group-hover:scale-110` |
| 이미지 grayscale 해제 | `grayscale group-hover:grayscale-0 transition-all` |
| 아이콘 회전 | `transition-transform group-open:rotate-180` |
| 페이드 overlay | `opacity-0 group-hover:opacity-100 transition-opacity` |
| 모바일 메뉴 | `max-h-0 opacity-0` → `max-h-64 opacity-100`, `transition-all duration-300` |

---

## 9. 재사용 컴포넌트 목록

| 컴포넌트 | 경로 | 설명 |
|---|---|---|
| `Navbar` | `components/common/Navbar.tsx` | sticky 상단 네비게이션 |
| `Footer` | `components/common/Footer.tsx` | 사이트맵 + 소셜링크 |
| `FAQ` | `components/common/FAQ.tsx` | items prop으로 커스텀 FAQ 주입 가능 |
| `ScrollToTop` | `components/common/ScrollToTop.tsx` | 전역 스크롤 최상단 버튼 |
| `Experts` | `components/home/Experts.tsx` | 전문가 그리드 |
| `ContactForm` | `components/contact/ContactForm.tsx` | 문의 폼 + 연락처 정보 |

---

## 10. 새 페이지 추가 체크리스트

1. `app/{페이지명}/page.tsx` 생성
2. `<Navbar />`, `<Footer />` 포함
3. `<html lang="ko">` — 이미 `layout.tsx`에서 처리됨
4. Hero 타입 선택 (A/B/C/D 중 하나)
5. 섹션 배경 흰/연회색 교차 적용
6. 모든 텍스트에 `dark:` 변형 포함
7. 이미지에 `rounded-2xl` 또는 `rounded-3xl` 및 `shadow` 적용
8. CTA 섹션을 페이지 하단 또는 중간에 배치
9. 필요 시 `FAQ` 컴포넌트 재사용 (props로 items 전달)
