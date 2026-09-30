export type Project = {
  readonly name: string
  readonly description: string
  readonly stack: readonly string[]
  readonly screenshot?: string
  readonly screenshots?: readonly string[]
  readonly githubUrl: string
  readonly repoPrivate?: boolean
  readonly featured?: boolean
}

const SCALE_240AGENT = "240-agent contact center"
export const apps: readonly Project[] = [
  {
    name: "workout-next",
    description:
      "Workout tracking app with periodized program design, progressive overload automation, real-time set logging, and e1RM/volume analytics.",
    stack: ["Next.js 15", "React 19", "Prisma", "PostgreSQL", "NextAuth", "Tailwind"],
    screenshots: [
      "/screenshots/workout-next-1.jpg",
      "/screenshots/workout-next-2.jpg",
      "/screenshots/workout-next-3.jpg",
    ],
    githubUrl: "https://github.com/caguilaron07/workout-next",
    repoPrivate: true,
    featured: true,
  },
  {
    name: "home-rank",
    description:
      "Rental-listing evaluation tool built around a 35-criteria weighted scoring rubric for renter financial and lease risk.",
    stack: ["Vite", "React", "Neon Postgres", "Playwright"],
    screenshot: "/screenshots/home-rank.jpg",
    githubUrl: "https://github.com/caguilaron07/home-rank",
    repoPrivate: true,
  },
  {
    name: "portfolio-backtest-lab",
    description:
      "Interactive portfolio backtest and stress-test simulator for exploring historical return sequences.",
    stack: ["TypeScript", "Vercel Functions"],
    screenshot: "/screenshots/backtestLab.jpg",
    githubUrl: "https://github.com/caguilaron07/backtestLab",
    repoPrivate: true,
  },
  {
    name: "carePapa",
    description: "Family caregiving coordination app with JWT-based auth and Postgres-backed scheduling.",
    stack: ["Next.js 14", "Prisma", "Postgres", "Zod"],
    screenshot: "/screenshots/carePapa.jpg",
    githubUrl: "https://github.com/caguilaron07/carePapa",
    repoPrivate: true,
  },
  {
    name: "iscreami",
    description:
      "Extended an open-source ice cream recipe calculator with a 20-tool MCP server and Anthropic-powered ingredient enrichment that auto-fills missing nutritional data.",
    stack: ["Python", "FastAPI", "Anthropic SDK", "MCP"],
    screenshot: "/screenshots/iscreami.jpg",
    githubUrl: "https://github.com/caguilaron07/iscreami",
  },
] as const

export type Initiative = {
  readonly name: string
  readonly description: string
  readonly metrics?: readonly string[]
  readonly scale?: string
}

export type CareerTimelineItem = {
  readonly title: string
  readonly company: string
  readonly dates: string
  readonly scope: string
}

export type CaseStudy = {
  readonly name: string
  readonly problem: string
  readonly approach: string
  readonly outcome: string
  readonly scale?: string
}

export const impact: readonly Initiative[] = [
  {
    name: "AI QA Platform",
    description:
      "Built an AI QA platform that replaced manual call review across a 240-agent contact center.",
    metrics: ["93%+ match with human graders", "100% of calls reviewed"],
    scale: `${SCALE_240AGENT} · 4-person AI engineering team`,
  },
  {
    name: "Voice AI Deployment",
    description: "Deployed voice-agent workflows across a high-volume contact center.",
    metrics: ["190k+ calls automated", "60%+ call deflection", "6.3x ROI", "$6.75 → $0.16 cost per call"],
    scale: SCALE_240AGENT,
  },
  {
    name: "Internal AI Virtual Assistants",
    description: "Rolled out AI virtual assistants for frontline agents.",
    metrics: ["40% reduction in average handle time"],
    scale: SCALE_240AGENT,
  },
  {
    name: "BYOC SIP Migration",
    description: "Vetted telephony vendors and led an end-to-end BYOC SIP migration with Bandwidth, replacing legacy Five9.",
    scale: SCALE_240AGENT,
  },
  {
    name: "Legacy Systems Integration",
    description:
      "Connected legacy infrastructure with modern AI capabilities: two custom-built CRMs, messaging/email platforms, a ticketing system, and QA automation.",
  },
] as const

export const careerTimeline: readonly CareerTimelineItem[] = [
  {
    title: "VP of Customer Experience & AI Transformation",
    company: "LifeMD",
    dates: "April 2026 – Present",
    scope: "Leads AI transformation and CX strategy for a 240-agent telehealth contact center; leads a 4-person AI engineering team.",
  },
  {
    title: "Director of Call Center Innovation",
    company: "LifeMD",
    dates: "August 2024 – April 2026",
    scope: "Led contact center transformation equipping 240 agents with AI copilots; replaced Five9 with Zoom Contact Center and Bandwidth BYOC/SIP.",
  },
  {
    title: "Technology Manager of Patient Experience",
    company: "LifeMD",
    dates: "June 2023 – August 2024",
    scope: "Stabilized and modernized the Five9 contact center environment across a multi-brand CRM footprint.",
  },
  {
    title: "Head of Technical Services for North America",
    company: "Connex One",
    dates: "September 2022 – June 2023",
    scope: "Built the North American Technical Services and Implementations function from the ground up.",
  },
  {
    title: "Contact Center Engineer II",
    company: "RingCentral",
    dates: "August 2021 – September 2022",
    scope: "Led technical architecture for a 3,000-seat global NICE CXone contact center implementation across EMEA and APAC.",
  },
  {
    title: "Managed Services Team Lead",
    company: "NewVoiceMedia/Vonage",
    dates: "February 2021 – August 2021",
    scope: "Built and trained a 5-person Latin America Managed Services team.",
  },
  {
    title: "Senior Professional Services Consultant",
    company: "NewVoiceMedia/Vonage",
    dates: "February 2020 – February 2021",
    scope: "Delivered high-volume contact center implementations in 3–4 weeks vs. a normal 6–10-week cycle.",
  },
  {
    title: "Professional Services Consultant",
    company: "NewVoiceMedia",
    dates: "August 2016 – February 2020",
    scope: "Delivered contact center platform implementations for SMB and select enterprise customers.",
  },
  {
    title: "Technology Enabled Compliance Services / Technical Operations Associate",
    company: "PricewaterhouseCoopers",
    dates: "January 2015 – March 2016",
    scope: "Delivered consulting and data-transformation services across enterprise SAP and Oracle environments.",
  },
] as const

export const caseStudies: readonly CaseStudy[] = [
  {
    name: "QAI: AI Quality Assurance Platform",
    problem: "QA coverage was a small manual call sample, missing inconsistencies across the contact center.",
    approach: "Architected and built (with a 4-person AI engineering team) an AI-driven QA platform that evaluates every interaction automatically.",
    outcome: "Expanded evaluation to 100% of interactions at 93% agreement with human graders, enabling a QA headcount reduction.",
    scale: `${SCALE_240AGENT} · 4-person AI engineering team`,
  },
  {
    name: "Contact Center Platform Migration",
    problem: "Legacy Five9 environment had implementation gaps limiting automation maturity and integration capabilities.",
    approach: "Evaluated vendors, selected Zoom Contact Center and Bandwidth, and led the BYOC/SIP telephony migration end-to-end.",
    outcome: "Modernized the telephony stack supporting 240 agents and AI copilot integration, contributing to a 40% reduction in average handle time.",
    scale: SCALE_240AGENT,
  },
  {
    name: "Conversational AI Deployment",
    problem: "High call volume with no automated resolution path for intent handling, verification, account inquiries, and retention.",
    approach: "Ran proof-of-concepts, selected a vendor, and deployed customer-facing conversational AI workflows across voice channels.",
    outcome: "Handled 190K+ calls with 60%+ resolved without a live agent, delivering a 6.3x ROI.",
    scale: SCALE_240AGENT,
  },
] as const

export const tooling: readonly Project[] = [
  {
    name: "daPathMaker",
    description:
      "MCP server for conversationally building and editing BlandAI voice-agent pathways with Claude. Twenty tools span pathway, node, and edge management.",
    stack: ["TypeScript", "MCP"],
    githubUrl: "https://github.com/caguilaron07/daPathMaker",
  },
  {
    name: "bandwidth-mcp",
    description:
      "MCP server unifying five distinct Bandwidth API surfaces (legacy XML, JSON v2, Universal Platform, Voice, Messaging) behind one consistent tool interface for voice, messaging, and number provisioning.",
    stack: ["TypeScript", "MCP", "OAuth2"],
    githubUrl: "https://github.com/caguilaron07/bandwidth-mcp",
    repoPrivate: true,
  },
  {
    name: "zoom-ccaas-mcp",
    description:
      "MCP server exposing Zoom Contact Center and Number Management APIs as tools for queues, engagements, recordings, reporting, and SIP/SMS provisioning.",
    stack: ["TypeScript", "MCP", "OAuth2"],
    githubUrl: "https://github.com/caguilaron07/zoom-ccaas-mcp",
    repoPrivate: true,
  },
] as const
