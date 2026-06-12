import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viewport — AI UX/UI 진단 리포트" },
      { name: "description", content: "Viewport는 스타트업·병원·중소기업·교육기관의 홈페이지를 AI가 분석해 사용자 흐름, CTA, 모바일 UI, 신뢰 요소의 문제를 진단하고 개선 우선순위를 리포트로 제공합니다." },
      { property: "og:title", content: "Viewport — AI UX/UI 진단 리포트" },
      { property: "og:description", content: "리디자인 전에, 무엇이 전환을 막고 있는지 먼저 확인하세요." },
    ],
  }),
  component: Landing,
});

const nav = [
  { label: "서비스 소개", href: "#solution" },
  { label: "진단 항목", href: "#diagnostics" },
  { label: "케이스", href: "#cases" },
  { label: "리포트 예시", href: "#report" },
  { label: "요금제", href: "#pricing" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Targets />
        <HowItWorks />
        <ReportExample />
        <Cases />
        <Benefits />
        <Differentiators />
        <Pricing />
        <DiagnosisForm />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg gradient-bg text-white font-bold text-sm">V</span>
          <span className="text-lg font-bold tracking-tight">Viewport</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#form" className="hidden md:inline-flex items-center rounded-full gradient-bg px-4 py-2 text-sm font-semibold text-white soft-shadow transition-transform hover:-translate-y-0.5">
            진단 시작하기
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-border" aria-label="menu">
            <span className="block h-0.5 w-4 bg-foreground" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-5 py-4 space-y-3">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground">
              {n.label}
            </a>
          ))}
          <a href="#form" onClick={() => setOpen(false)} className="block text-center rounded-full gradient-bg px-4 py-2.5 text-sm font-semibold text-white">
            진단 시작하기
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            AI 기반 UX/UI 진단 리포트
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-[3.5rem]">
            홈페이지가 신뢰와 문의로<br />이어지지 않는 이유를<br />
            <span className="gradient-text">발견하세요</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Viewport는 스타트업, 병원, 중소기업, 교육기관의 홈페이지를 AI가 분석해 사용자 흐름, 정보 구조, CTA, 모바일 UI, 카피, 신뢰 요소의 문제를 진단하고 개선 우선순위를 리포트로 제공합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#form" className="inline-flex items-center rounded-full gradient-bg px-6 py-3 text-sm font-semibold text-white card-shadow transition-transform hover:-translate-y-0.5">
              내 홈페이지 진단하기 →
            </a>
            <a href="#report" className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
              샘플 리포트 보기
            </a>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            리디자인 전에, 무엇이 전환을 막고 있는지 먼저 확인해보세요.
          </p>
        </div>
        <ReportPreviewCard />
      </div>
    </section>
  );
}

function ReportPreviewCard() {
  const items = [
    { label: "첫 화면 메시지 명확성", status: "개선 필요", tone: "warn" },
    { label: "CTA 접근성", status: "낮음", tone: "bad" },
    { label: "모바일 전환 흐름", status: "보완 필요", tone: "warn" },
    { label: "신뢰 요소", status: "부족", tone: "bad" },
    { label: "정보 구조 명확성", status: "양호", tone: "ok" },
  ] as const;
  const toneClass = {
    ok: "bg-mint/15 text-emerald-700",
    warn: "bg-amber-100 text-amber-700",
    bad: "bg-rose-100 text-rose-700",
  };
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-3xl gradient-bg opacity-20 blur-2xl" />
      <div className="rounded-3xl border border-border bg-card p-6 card-shadow sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground">UX/UI 진단 리포트</p>
            <p className="mt-1 text-sm font-semibold">example.com</p>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">실시간 분석</span>
        </div>
        <div className="mt-5 rounded-2xl bg-surface p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>종합 전환 흐름 점수</span>
            <span className="font-semibold text-foreground">62 / 100</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-border">
            <div className="h-full w-[62%] gradient-bg" />
          </div>
        </div>
        <ul className="mt-5 space-y-2.5">
          {items.map((i) => (
            <li key={i.label} className="flex items-center justify-between rounded-xl border border-border/60 bg-card px-4 py-3">
              <span className="text-sm font-medium">{i.label}</span>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${toneClass[i.tone]}`}>{i.status}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between rounded-2xl gradient-bg px-4 py-3 text-white">
          <span className="text-sm font-medium">우선 개선 항목</span>
          <span className="text-xl font-bold">5개 도출</span>
        </div>
      </div>
    </div>
  );
}

function Section({ id, eyebrow, title, desc, children }: { id?: string; eyebrow?: string; title: string; desc?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
        {desc && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{desc}</p>}
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function Problems() {
  const items = [
    "첫 화면에서 회사나 서비스의 가치가 바로 전달되지 않는다.",
    "고객이 신뢰할 만한 근거가 부족하다.",
    "상담·문의 버튼이 눈에 잘 띄지 않는다.",
    "제품, 진료, 교육 과정 정보가 복잡하게 흩어져 있다.",
    "모바일에서 문의까지의 흐름이 불편하다.",
    "리디자인을 해야 할지, 일부 개선만 해도 될지 판단하기 어렵다.",
  ];
  return (
    <Section id="problems" eyebrow="Problem" title="방문자는 있는데, 왜 문의는 없을까요?">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:card-shadow">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-rose-50 text-rose-600 font-bold">{String(i + 1).padStart(2, "0")}</div>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground">{t}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-3xl rounded-2xl bg-surface p-6 text-center text-[15px] leading-relaxed text-muted-foreground">
        전환이 낮은 이유는 디자인이 예쁘지 않아서가 아닐 수 있습니다. 고객이 정보를 이해하고, 신뢰하고, 행동하기까지의 흐름이 막혀 있을 가능성이 큽니다.
      </p>
    </Section>
  );
}

function Solution() {
  const items = [
    "첫 화면 메시지", "사용자 흐름", "정보 구조",
    "CTA 위치와 문구", "모바일 사용성", "신뢰 요소",
    "UX 카피", "시각적 위계", "개선 우선순위",
  ];
  return (
    <Section
      id="solution"
      eyebrow="Solution"
      title="Viewport는 홈페이지를 고객의 시선에서 진단합니다"
      desc="Viewport는 홈페이지를 단순히 화면 단위로 평가하지 않습니다. 고객이 홈페이지에 들어와 첫인상을 형성하고, 정보를 이해하고, 신뢰를 느낀 뒤, 문의나 상담으로 이동하는 전체 흐름을 분석합니다."
    >
      <div id="diagnostics" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <div key={t} className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:soft-shadow">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
              {String(i + 1).padStart(2, "0")}
            </div>
            <span className="text-[15px] font-semibold">{t}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Targets() {
  const items = [
    { tag: "스타트업", desc: "서비스 가치가 명확하게 전달되지 않거나, 데모 신청·문의 전환이 낮은 팀", color: "from-indigo-500 to-violet-500" },
    { tag: "병원·클리닉", desc: "진료 정보와 전문성이 충분히 전달되지 않아 예약 전환이 낮은 병원", color: "from-sky-500 to-cyan-500" },
    { tag: "중소기업", desc: "제품, 사업, 고객사, 인증 정보가 복잡하게 흩어져 견적 문의가 적은 기업", color: "from-violet-500 to-fuchsia-500" },
    { tag: "학원·교육기관", desc: "커리큘럼, 강사진, 성과, 상담 신청 흐름이 명확하지 않아 상담 전환이 낮은 교육기관", color: "from-teal-500 to-emerald-500" },
  ];
  return (
    <Section id="targets" eyebrow="For" title="Viewport가 필요한 조직">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <div key={i.tag} className="rounded-2xl border border-border bg-card p-7 transition-all hover:card-shadow">
            <span className={`inline-block rounded-full bg-gradient-to-r ${i.color} px-3 py-1 text-xs font-semibold text-white`}>{i.tag}</span>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{i.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    { t: "홈페이지 URL 입력", d: "진단하고 싶은 홈페이지 주소를 입력합니다." },
    { t: "업종과 전환 목표 선택", d: "문의 증가, 데모 신청, 진료 예약, 견적 요청, 상담 신청 등 목표를 선택합니다." },
    { t: "현재 고민 작성", d: "방문자는 있지만 문의가 적은 이유, 고객 반응, 개선하고 싶은 부분을 간단히 작성합니다." },
    { t: "AI UX/UI 진단", d: "Viewport가 사용자 흐름, 정보 구조, CTA, 모바일 UI, 카피, 신뢰 요소를 분석합니다." },
    { t: "리포트 확인", d: "핵심 문제, 개선 우선순위, 실행 체크리스트를 확인합니다." },
  ];
  return (
    <Section id="how" eyebrow="How it works" title="URL만 입력하면, AI가 전환 흐름을 분석합니다">
      <div className="grid gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <div key={s.t} className="relative rounded-2xl border border-border bg-card p-6">
            <div className="text-xs font-bold text-primary">STEP {i + 1}</div>
            <h3 className="mt-2 text-base font-bold">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ReportExample() {
  const composition = [
    "종합 진단 요약", "UX 문제", "UI 문제",
    "CTA 개선안", "카피 개선 방향", "모바일 개선 포인트",
    "신뢰 요소 개선안", "개선 우선순위", "실행 체크리스트",
  ];
  const priorities = [
    "첫 화면 카피 수정",
    "주요 CTA 버튼 고정",
    "고객사·사례 섹션 상단 배치",
    "모바일 문의 버튼 접근성 개선",
    "FAQ와 도입 절차 정보 보완",
  ];
  return (
    <Section id="report" eyebrow="Report" title="무엇을 고쳐야 할지, 리포트로 명확하게 정리합니다">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {composition.map((c, i) => (
            <div key={c} className="rounded-xl border border-border bg-card p-4 text-center">
              <div className="text-[10px] font-bold text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <p className="mt-1.5 text-sm font-semibold">{c}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-border bg-card p-7 card-shadow">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">진단 요약</span>
            <span className="text-xs text-muted-foreground">Sample Report</span>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground">
            "현재 홈페이지는 서비스의 핵심 가치가 첫 화면에서 명확하게 전달되지 않고, 문의 버튼의 노출이 약해 방문자가 다음 행동으로 이동하기 어렵습니다."
          </p>
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">우선 개선 항목</p>
            <ul className="mt-3 space-y-2">
              {priorities.map((p, i) => (
                <li key={p} className="flex items-start gap-3 rounded-xl bg-surface p-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full gradient-bg text-[11px] font-bold text-white">{i + 1}</span>
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Cases() {
  const cases = [
    {
      tag: "Case 1 · 스타트업 대표",
      name: "김도윤, 34세",
      situation: "B2B SaaS 스타트업을 운영하고 있으며 방문자는 있지만 데모 신청 전환이 낮다.",
      pain: [
        "첫 화면에서 서비스 가치가 명확하지 않다.",
        "기능 설명은 많지만 고객이 얻는 효과가 잘 보이지 않는다.",
        "데모 신청 버튼이 눈에 잘 띄지 않는다.",
      ],
      result: [
        "첫 화면 카피를 문제 해결 중심으로 수정",
        "CTA를 \"무료 데모 신청하기\"로 구체화",
        "고객사 로고와 도입 사례를 상단으로 이동",
      ],
      cta: "무료 데모 신청하기",
    },
    {
      tag: "Case 2 · 병원 마케팅 담당자",
      name: "이서현, 39세",
      situation: "정형외과 병원의 홈페이지와 검색 광고를 운영하고 있지만 전화 문의와 진료 예약 전환이 낮다.",
      pain: [
        "진료 분야와 병원의 전문성이 첫 화면에서 잘 보이지 않는다.",
        "의료진, 장비, 진료 사례 정보가 흩어져 있다.",
        "모바일에서 전화·예약 버튼이 잘 보이지 않는다.",
      ],
      result: [
        "첫 화면에 주요 진료 분야와 대표 의료진 메시지 배치",
        "모바일 하단 전화·예약 고정 버튼 추가",
        "초진 안내와 진료 절차 섹션 추가",
      ],
      cta: "진료 예약하기",
    },
    {
      tag: "Case 3 · 교육기관 운영자",
      name: "박민재, 42세",
      situation: "입시 학원을 운영하고 있으며 홈페이지 유입은 있지만 상담 신청과 설명회 신청이 낮다.",
      pain: [
        "커리큘럼과 학원의 차별점이 한눈에 들어오지 않는다.",
        "합격 사례와 학부모 후기가 아래쪽에 있다.",
        "모바일에서 상담 안내를 찾기 어렵다.",
      ],
      result: [
        "첫 화면에 대상 학년과 핵심 성과 제시",
        "합격 사례와 학부모 후기를 상단으로 이동",
        "상담 신청 CTA를 주요 섹션마다 반복 배치",
      ],
      cta: "상담 신청하기",
    },
  ];
  return (
    <Section id="cases" eyebrow="Cases" title="업종별로 다른 전환 문제를 진단합니다">
      <div className="grid gap-6 lg:grid-cols-3">
        {cases.map((c) => (
          <article key={c.tag} className="flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:card-shadow">
            <span className="text-xs font-semibold text-primary">{c.tag}</span>
            <h3 className="mt-2 text-lg font-bold">{c.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.situation}</p>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">고민</p>
            <ul className="mt-2 space-y-1.5">
              {c.pain.map((p) => (
                <li key={p} className="flex gap-2 text-sm">
                  <span className="text-rose-500">·</span>{p}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-primary">Viewport 진단 결과</p>
            <ul className="mt-2 space-y-1.5">
              {c.result.map((p) => (
                <li key={p} className="flex gap-2 text-sm">
                  <span className="text-mint">✓</span>{p}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between rounded-xl bg-surface p-3">
              <span className="text-xs text-muted-foreground">추천 CTA</span>
              <span className="rounded-full gradient-bg px-3 py-1 text-xs font-semibold text-white">{c.cta}</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Benefits() {
  const items = [
    { t: "문제 파악", d: "전환을 막는 UX/UI 문제를 쉽게 확인할 수 있습니다." },
    { t: "우선순위 정리", d: "무엇부터 고쳐야 할지 명확해집니다." },
    { t: "수정 요청 기준 확보", d: "제작사나 내부 담당자에게 구체적으로 요청할 수 있습니다." },
    { t: "리디자인 비용 절감", d: "전체 개편 전에 꼭 필요한 개선부터 시작할 수 있습니다." },
    { t: "전환 개선 방향 확보", d: "문의, 상담, 예약, 데모 신청으로 이어지는 흐름을 개선할 수 있습니다." },
  ];
  return (
    <Section id="benefits" eyebrow="Benefits" title="리디자인 전에, 먼저 확인해야 할 것들">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i, idx) => (
          <div key={i.t} className={`rounded-2xl border border-border bg-card p-6 ${idx === 0 ? "lg:col-span-1" : ""}`}>
            <div className="text-xs font-bold text-primary">BENEFIT 0{idx + 1}</div>
            <h3 className="mt-2 text-lg font-bold">{i.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Differentiators() {
  const items = [
    { t: "일반 AI 챗봇과 다릅니다", d: "업종과 전환 목표에 맞춰 구조화된 진단 리포트를 제공합니다." },
    { t: "웹 제작사와 다릅니다", d: "바로 리디자인 견적으로 이어지는 것이 아니라, 현재 홈페이지에서 무엇이 문제인지 먼저 확인할 수 있습니다." },
    { t: "데이터 분석 툴과 다릅니다", d: "복잡한 데이터를 직접 해석하는 대신 UX/UI 관점에서 문제와 개선 방향을 쉽게 정리합니다." },
    { t: "컨설팅보다 빠르게 시작할 수 있습니다", d: "긴 미팅 없이 URL과 현재 고민만으로 개선 방향을 확인할 수 있습니다." },
  ];
  return (
    <Section id="differentiators" eyebrow="Why Viewport" title="단순 분석이 아니라, 실행 가능한 진단을 제공합니다">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <div key={i.t} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-bold">{i.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "무료 미니 진단",
      price: "무료",
      sub: "처음 시도해보는 분들을 위한 진단",
      features: ["핵심 문제 3가지 요약", "간단한 개선 방향 제공"],
      cta: "무료로 시작하기",
      highlighted: false,
    },
    {
      name: "기본 진단 리포트",
      price: "₩99,000",
      sub: "핵심 개선 포인트 확인",
      features: ["UX/UI 핵심 진단", "CTA 개선안", "모바일 개선 포인트", "개선 우선순위", "PDF 제공"],
      cta: "기본 리포트 신청",
      highlighted: true,
    },
    {
      name: "상세 진단 리포트",
      price: "₩199,000",
      sub: "전환 흐름 전반의 깊이 있는 분석",
      features: ["사용자 여정 분석", "카피 개선안", "신뢰 요소 개선안", "개선 우선순위", "실행 체크리스트", "PDF 제공"],
      cta: "상세 리포트 신청",
      highlighted: false,
    },
  ];
  return (
    <Section id="pricing" eyebrow="Pricing" title="필요한 수준에 맞게 진단해보세요">
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-3xl border p-7 ${
              p.highlighted ? "border-primary/40 bg-card card-shadow" : "border-border bg-card"
            }`}
          >
            {p.highlighted && (
              <span className="absolute -top-3 left-7 rounded-full gradient-bg px-3 py-1 text-xs font-semibold text-white">추천</span>
            )}
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.sub}</p>
            <div className="mt-5 text-3xl font-bold">{p.price}</div>
            <ul className="mt-6 flex-1 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-mint/30 text-emerald-700 text-[10px]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#form"
              className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                p.highlighted
                  ? "gradient-bg text-white hover:-translate-y-0.5"
                  : "border border-border bg-card text-foreground hover:bg-muted"
              }`}
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function DiagnosisForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ url: "", industry: "", goal: "", concern: "", email: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="form" className="mx-auto max-w-4xl px-5 py-20 lg:py-28">
      <div className="rounded-3xl border border-border bg-card p-7 card-shadow sm:p-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Start</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">지금 바로 진단을 신청해보세요</h2>
          <p className="mt-3 text-muted-foreground">URL과 현재 고민만 입력하면, Viewport가 분석을 시작합니다.</p>
        </div>

        {submitted ? (
          <div className="mt-10 rounded-2xl gradient-bg p-8 text-center text-white">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/20 text-2xl">✓</div>
            <h3 className="mt-4 text-xl font-bold">진단 신청이 완료되었습니다.</h3>
            <p className="mt-2 text-sm text-white/90">샘플 리포트를 확인해보세요.</p>
            <a href="#report" className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary">
              샘플 리포트 보러가기
            </a>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 grid gap-5">
            <Field label="홈페이지 URL" required>
              <input
                required type="url" placeholder="https://example.com"
                value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="업종" required>
                <select
                  required value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                >
                  <option value="">선택해주세요</option>
                  {["스타트업", "병원·클리닉", "중소기업", "학원·교육기관", "B2B 서비스", "기타"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="전환 목표" required>
                <select
                  required value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                >
                  <option value="">선택해주세요</option>
                  {["문의 증가", "데모 신청 증가", "진료 예약 증가", "견적 요청 증가", "상담 신청 증가", "자료 다운로드 증가", "채용 지원 증가"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="현재 고민">
              <textarea
                rows={4} placeholder="방문자는 있지만 문의가 적은 이유, 고객 반응, 개선하고 싶은 부분을 간단히 작성해주세요."
                value={form.concern} onChange={(e) => setForm({ ...form, concern: e.target.value })}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </Field>
            <Field label="이메일" required>
              <input
                required type="email" placeholder="name@company.com"
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </Field>
            <button type="submit" className="mt-2 inline-flex w-full items-center justify-center rounded-full gradient-bg px-6 py-4 text-sm font-semibold text-white card-shadow transition-transform hover:-translate-y-0.5">
              진단 신청하기 →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-3xl gradient-bg p-10 text-white sm:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-10 -bottom-20 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">리디자인 전에, 지금 홈페이지의<br />전환 문제부터 확인하세요</h2>
          <p className="mt-4 text-white/85">
            Viewport가 고객이 실제로 보는 화면에서 신뢰와 문의를 막는 UX/UI 문제를 찾아드립니다.
          </p>
          <a href="#form" className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5">
            내 홈페이지 진단 시작하기 →
          </a>
          <p className="mt-4 text-xs text-white/70">URL 입력만으로 시작할 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg gradient-bg text-white font-bold text-xs">V</span>
          <span className="font-bold">Viewport</span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Viewport. AI UX/UI 진단 리포트 서비스.</p>
      </div>
    </footer>
  );
}
