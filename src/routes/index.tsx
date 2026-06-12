import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import caseAvatarClinic from "../assets/case-avatar-clinic.png";
import caseAvatarEducation from "../assets/case-avatar-education.png";
import caseAvatarSaas from "../assets/case-avatar-saas.png";
import heroAnalysisImage from "../assets/hero-ai-website-analysis.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CONVERTAI — AI UX/UI 진단 리포트" },
      {
        name: "description",
        content:
          "CONVERTAI는 스타트업·병원·중소기업·교육기관의 홈페이지를 AI가 분석해 사용자 흐름, CTA, 모바일 UI, 신뢰 요소의 문제를 진단하고 개선 우선순위를 리포트로 제공합니다.",
      },
      { property: "og:title", content: "CONVERTAI — AI UX/UI 진단 리포트" },
      {
        property: "og:description",
        content: "리디자인 전에, 무엇이 전환을 막고 있는지 먼저 확인하세요.",
      },
    ],
  }),
  component: Landing,
});

const nav = [
  { label: "서비스 소개", href: "#solution" },
  { label: "진단 항목", href: "#diagnostics" },
  { label: "케이스", href: "#cases" },
  { label: "요금제", href: "#pricing" },
];

function Landing() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onOpenForm={() => setFormOpen(true)} />
      <main>
        <Hero onOpenForm={() => setFormOpen(true)} />
        <Problems />
        <Solution />
        <Targets />
        <HowItWorks />
        <Cases />
        <Differentiators />
        <Pricing onOpenForm={() => setFormOpen(true)} />
        <FinalCTA onOpenForm={() => setFormOpen(true)} />
      </main>
      <Footer />
      <DiagnosisModal open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}

function Header({ onOpenForm }: { onOpenForm: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center">
          <span className="text-lg font-black uppercase tracking-normal text-foreground">CONVERTAI</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenForm}
            className="hidden md:inline-flex items-center rounded-full gradient-bg px-4 py-2 text-sm font-semibold text-white soft-shadow transition-transform hover:-translate-y-0.5"
          >
            진단 시작하기
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-border"
            aria-label="menu"
          >
            <span className="block h-0.5 w-4 bg-foreground" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-5 py-4 space-y-3">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground"
            >
              {n.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onOpenForm();
            }}
            className="block text-center rounded-full gradient-bg px-4 py-2.5 text-sm font-semibold text-white"
          >
            진단 시작하기
          </button>
        </div>
      )}
    </header>
  );
}

function Hero({ onOpenForm }: { onOpenForm: () => void }) {
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
          <h1 className="mt-5 text-2xl font-bold leading-[1.15] tracking-normal min-[380px]:text-3xl sm:text-5xl lg:text-[3.5rem]">
            <span className="whitespace-nowrap">복잡한 데이터 분석없이,</span>
            <br />
            <span className="whitespace-nowrap">UI/UX 개선으로</span>
            <br />
            <span className="gradient-text whitespace-nowrap">매출 2배</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            URL만 입력하면 첫 화면 메시지, CTA, 모바일 흐름, 신뢰 요소를 분석해 무엇부터 고쳐야 할지
            리포트로 제공합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenForm}
              className="inline-flex items-center rounded-full gradient-bg px-6 py-3 text-sm font-semibold text-white card-shadow transition-transform hover:-translate-y-0.5"
            >
              무료 진단 시작하기 →
            </button>
            <a
              href="#cases"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              업종별 케이스 보기
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={heroAnalysisImage}
        alt="AI가 웹사이트 화면과 모바일 화면을 스캔해 리포트와 체크리스트로 분석하는 3D 오브젝트"
        className="w-full max-w-[620px] select-none object-contain"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        )}
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
        {desc && (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{desc}</p>
        )}
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function Problems() {
  const funnel = [
    {
      step: "01",
      label: "방문",
      issue: "첫 화면에서 무엇을 제공하는지 바로 이해되지 않습니다.",
      fix: "핵심 가치와 대상 고객을 3초 안에 전달해야 합니다.",
    },
    {
      step: "02",
      label: "이해",
      issue: "서비스, 진료, 교육 과정 정보가 복잡하게 흩어져 있습니다.",
      fix: "고객이 궁금해하는 순서대로 정보 구조를 재배치해야 합니다.",
    },
    {
      step: "03",
      label: "신뢰",
      issue: "사례, 후기, 수치, 인증처럼 믿을 근거가 부족합니다.",
      fix: "고객이 결정을 미루지 않도록 신뢰 요소를 앞쪽에 배치해야 합니다.",
    },
    {
      step: "04",
      label: "문의",
      issue: "상담 버튼이 약하거나 모바일에서 문의 흐름이 불편합니다.",
      fix: "CTA 위치, 문구, 반복 노출을 전환 중심으로 조정해야 합니다.",
    },
  ];

  return (
    <Section id="problems" eyebrow="Problem" title="방문자는 있는데, 왜 문의는 없을까요?">
      <div className="rounded-3xl border border-border bg-card p-5 sm:p-7">
        <div className="grid gap-4 lg:grid-cols-4">
          {funnel.map((item, index) => (
            <div key={item.step} className="relative">
              {index < funnel.length - 1 && (
                <div className="absolute left-10 top-6 hidden h-px w-[calc(100%+1rem)] bg-border lg:block" />
              )}
              <div className="relative rounded-2xl border border-border bg-background p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full gradient-bg text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold">{item.label}</h3>
                </div>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose-500">Block</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{item.issue}</p>
                  </div>
                  <div className="rounded-xl bg-surface p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Fix</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.fix}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Solution() {
  const items = [
    "첫 화면 메시지",
    "사용자 흐름",
    "정보 구조",
    "CTA 위치와 문구",
    "모바일 사용성",
    "신뢰 요소",
    "UX 카피",
    "시각적 위계",
    "개선 우선순위",
  ];
  return (
    <Section
      id="solution"
      eyebrow="Solution"
      title="CONVERTAI는 홈페이지를 고객의 시선에서 진단합니다"
      desc="CONVERTAI는 홈페이지를 단순히 화면 단위로 평가하지 않습니다. 고객이 홈페이지에 들어와 첫인상을 형성하고, 정보를 이해하고, 신뢰를 느낀 뒤, 문의나 상담으로 이동하는 전체 흐름을 분석합니다."
    >
      <div id="diagnostics" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <div
            key={t}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:soft-shadow"
          >
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
    {
      tag: "스타트업",
      desc: "서비스 가치가 명확하게 전달되지 않거나, 데모 신청·문의 전환이 낮은 팀",
      color: "from-indigo-500 to-violet-500",
    },
    {
      tag: "병원·클리닉",
      desc: "진료 정보와 전문성이 충분히 전달되지 않아 예약 전환이 낮은 병원",
      color: "from-sky-500 to-cyan-500",
    },
    {
      tag: "중소기업",
      desc: "제품, 사업, 고객사, 인증 정보가 복잡하게 흩어져 견적 문의가 적은 기업",
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      tag: "학원·교육기관",
      desc: "커리큘럼, 강사진, 성과, 상담 신청 흐름이 명확하지 않아 상담 전환이 낮은 교육기관",
      color: "from-teal-500 to-emerald-500",
    },
  ];
  return (
    <Section id="targets" eyebrow="For" title="CONVERTAI가 필요한 조직">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <div
            key={i.tag}
            className="rounded-2xl border border-border bg-card p-7 transition-all hover:card-shadow"
          >
            <span
              className={`inline-block rounded-full bg-gradient-to-r ${i.color} px-3 py-1 text-xs font-semibold text-white`}
            >
              {i.tag}
            </span>
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
    {
      t: "업종과 전환 목표 선택",
      d: "문의 증가, 데모 신청, 진료 예약, 견적 요청, 상담 신청 등 목표를 선택합니다.",
    },
    {
      t: "현재 고민 작성",
      d: "방문자는 있지만 문의가 적은 이유, 고객 반응, 개선하고 싶은 부분을 간단히 작성합니다.",
    },
    {
      t: "AI UX/UI 진단",
      d: "CONVERTAI가 사용자 흐름, 정보 구조, CTA, 모바일 UI, 카피, 신뢰 요소를 분석합니다.",
    },
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

function Cases() {
  const cases = [
    {
      tag: "Case 1 · B2B SaaS",
      name: "B2B SaaS 홈페이지",
      avatar: caseAvatarSaas,
      avatarAlt: "대시보드 태블릿을 들고 있는 B2B SaaS 담당자 3D 클레이 아바타",
      situation:
        "제품 소개 페이지 유입은 꾸준하지만, 서비스 가치가 빠르게 이해되지 않아 데모 신청 전환이 낮다.",
      pain: [
        "첫 화면에서 서비스 가치가 명확하지 않다.",
        "기능 설명은 많지만 고객이 얻는 효과가 잘 보이지 않는다.",
        "데모 신청 버튼이 눈에 잘 띄지 않는다.",
      ],
      result: [
        "첫 화면 카피를 문제 해결 중심으로 수정",
        'CTA를 "무료 데모 신청하기"로 구체화',
        "고객사 로고와 도입 사례를 상단으로 이동",
      ],
      cta: "무료 데모 신청하기",
    },
    {
      tag: "Case 2 · 병원·클리닉",
      name: "정형외과 홈페이지",
      avatar: caseAvatarClinic,
      avatarAlt: "모바일 예약 화면을 들고 있는 병원 마케팅 담당자 3D 클레이 아바타",
      situation:
        "검색 광고 유입은 있지만 진료 분야, 의료진 전문성, 예약 동선이 한눈에 연결되지 않아 문의가 낮다.",
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
      tag: "Case 3 · 교육기관",
      name: "입시 학원 홈페이지",
      avatar: caseAvatarEducation,
      avatarAlt: "학원 일정 태블릿과 노트를 들고 있는 교육기관 운영자 3D 클레이 아바타",
      situation:
        "학부모와 학생 유입은 있지만 커리큘럼, 성과, 상담 신청 흐름이 분산되어 설명회 신청이 낮다.",
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
          <article
            key={c.tag}
            className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:card-shadow"
          >
            <div className="relative h-56 overflow-hidden bg-surface">
              <img
                src={c.avatar}
                alt={c.avatarAlt}
                className="h-full w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-semibold text-primary">{c.tag}</span>
              <h3 className="mt-2 text-lg font-bold">{c.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.situation}</p>

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                고민
              </p>
              <ul className="mt-2 space-y-1.5">
                {c.pain.map((p) => (
                  <li key={p} className="flex gap-2 text-sm">
                    <span className="text-rose-500">·</span>
                    {p}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-primary">
                CONVERTAI 진단 결과
              </p>
              <ul className="mt-2 space-y-1.5">
                {c.result.map((p) => (
                  <li key={p} className="flex gap-2 text-sm">
                    <span className="text-mint">✓</span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-surface p-3">
                <span className="text-xs text-muted-foreground">추천 CTA</span>
                <span className="rounded-full gradient-bg px-3 py-1 text-xs font-semibold text-white">
                  {c.cta}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Differentiators() {
  const items = [
    {
      t: "일반 AI 챗봇과 다릅니다",
      d: "업종과 전환 목표에 맞춰 구조화된 진단 리포트를 제공합니다.",
    },
    {
      t: "웹 제작사와 다릅니다",
      d: "바로 리디자인 견적으로 이어지는 것이 아니라, 현재 홈페이지에서 무엇이 문제인지 먼저 확인할 수 있습니다.",
    },
    {
      t: "데이터 분석 툴과 다릅니다",
      d: "복잡한 데이터를 직접 해석하는 대신 UX/UI 관점에서 문제와 개선 방향을 쉽게 정리합니다.",
    },
    {
      t: "컨설팅보다 빠르게 시작할 수 있습니다",
      d: "긴 미팅 없이 URL과 현재 고민만으로 개선 방향을 확인할 수 있습니다.",
    },
  ];
  return (
    <Section
      id="differentiators"
      eyebrow="Why CONVERTAI"
      title="단순 분석이 아니라, 실행 가능한 진단을 제공합니다"
    >
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

function Pricing({ onOpenForm }: { onOpenForm: () => void }) {
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
      features: [
        "UX/UI 핵심 진단",
        "CTA 개선안",
        "모바일 개선 포인트",
        "개선 우선순위",
        "PDF 제공",
      ],
      cta: "기본 리포트 신청",
      highlighted: true,
    },
    {
      name: "상세 진단 리포트",
      price: "₩199,000",
      sub: "전환 흐름 전반의 깊이 있는 분석",
      features: [
        "사용자 여정 분석",
        "카피 개선안",
        "신뢰 요소 개선안",
        "개선 우선순위",
        "실행 체크리스트",
        "PDF 제공",
      ],
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
              <span className="absolute -top-3 left-7 rounded-full gradient-bg px-3 py-1 text-xs font-semibold text-white">
                추천
              </span>
            )}
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.sub}</p>
            <div className="mt-5 text-3xl font-bold">{p.price}</div>
            <ul className="mt-6 flex-1 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-mint/30 text-emerald-700 text-[10px]">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={onOpenForm}
              className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                p.highlighted
                  ? "gradient-bg text-white hover:-translate-y-0.5"
                  : "border border-border bg-card text-foreground hover:bg-muted"
              }`}
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}

function DiagnosisModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ url: "", industry: "", goal: "", concern: "", email: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-foreground/35 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="diagnosis-modal-title"
      onMouseDown={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-card p-6 card-shadow sm:p-8"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Start</p>
            <h2 id="diagnosis-modal-title" className="mt-3 text-2xl font-bold sm:text-3xl">
              지금 바로 진단을 신청해보세요
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              URL과 현재 고민만 입력하면, CONVERTAI가 분석을 시작합니다.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-xl leading-none text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="진단 신청 모달 닫기"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <div className="mt-10 rounded-2xl gradient-bg p-8 text-center text-white">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/20 text-2xl">
              ✓
            </div>
            <h3 className="mt-4 text-xl font-bold">진단 신청이 완료되었습니다.</h3>
            <p className="mt-2 text-sm text-white/90">
              업종별 케이스와 추천 개선 방향을 확인해보세요.
            </p>
            <a
              href="#cases"
              onClick={onClose}
              className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary"
            >
              케이스 보러가기
            </a>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-7 grid gap-5">
            <Field label="홈페이지 URL" required>
              <input
                required
                type="url"
                placeholder="https://example.com"
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="업종" required>
                <select
                  required
                  value={form.industry}
                  onChange={(e) => setForm({ ...form, industry: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                >
                  <option value="">선택해주세요</option>
                  {[
                    "스타트업",
                    "병원·클리닉",
                    "중소기업",
                    "학원·교육기관",
                    "B2B 서비스",
                    "기타",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="전환 목표" required>
                <select
                  required
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                >
                  <option value="">선택해주세요</option>
                  {[
                    "문의 증가",
                    "데모 신청 증가",
                    "진료 예약 증가",
                    "견적 요청 증가",
                    "상담 신청 증가",
                    "자료 다운로드 증가",
                    "채용 지원 증가",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="현재 고민">
              <textarea
                rows={4}
                placeholder="방문자는 있지만 문의가 적은 이유, 고객 반응, 개선하고 싶은 부분을 간단히 작성해주세요."
                value={form.concern}
                onChange={(e) => setForm({ ...form, concern: e.target.value })}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </Field>
            <Field label="이메일" required>
              <input
                required
                type="email"
                placeholder="name@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </Field>
            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full gradient-bg px-6 py-4 text-sm font-semibold text-white card-shadow transition-transform hover:-translate-y-0.5"
            >
              진단 신청하기 →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

function FinalCTA({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-3xl gradient-bg p-10 text-white sm:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-10 -bottom-20 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            수백만 원짜리 리뉴얼 계약 전에,
            <br />
            꼭 거쳐야 할 '홈페이지 건강검진'
          </h2>
          <p className="mt-4 text-white/85">
            CONVERTAI가 고객이 실제로 보는 화면에서 신뢰와 문의를 막는 UX/UI 문제를 찾아드립니다.
          </p>
          <button
            type="button"
            onClick={onOpenForm}
            className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
          >
            내 홈페이지 진단 시작하기 →
          </button>
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
        <div className="flex items-center">
          <span className="font-black uppercase tracking-normal">CONVERTAI</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} CONVERTAI. AI UX/UI 진단 리포트 서비스.
        </p>
      </div>
    </footer>
  );
}
