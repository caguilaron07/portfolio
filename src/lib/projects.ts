export type Project = {
  readonly name: string
  readonly description: string
  readonly stack: readonly string[]
  readonly liveUrl?: string
  readonly githubUrl: string
  readonly repoPrivate?: boolean
  readonly featured?: boolean
}

export const apps: readonly Project[] = [
  {
    name: "workout-next",
    description:
      "Workout tracking app with periodized program design, progressive overload automation, real-time set logging, and e1RM/volume analytics.",
    stack: ["Next.js 15", "React 19", "Prisma", "PostgreSQL", "NextAuth", "Tailwind"],
    liveUrl: "https://workout-next-kappa.vercel.app",
    githubUrl: "https://github.com/caguilaron07/workout-next",
    repoPrivate: true,
  },
  {
    name: "home-rank",
    description:
      "Rental-listing evaluation tool built around a 35-criteria weighted scoring rubric for renter financial and lease risk.",
    stack: ["Vite", "React", "Neon Postgres", "Playwright"],
    liveUrl: "https://home-rank.vercel.app",
    githubUrl: "https://github.com/caguilaron07/home-rank",
    repoPrivate: true,
  },
  {
    name: "portfolio-backtest-lab",
    description:
      "Interactive portfolio backtest and stress-test simulator for exploring historical return sequences.",
    stack: ["TypeScript", "Vercel Functions"],
    liveUrl: "https://portfolio-backtest-lab.vercel.app",
    githubUrl: "https://github.com/caguilaron07/backtestLab",
    repoPrivate: true,
  },
  {
    name: "carePapa",
    description: "Family caregiving coordination app with JWT-based auth and Postgres-backed scheduling.",
    stack: ["Next.js 14", "Prisma", "Postgres", "Zod"],
    liveUrl: "https://carepapa.vercel.app",
    githubUrl: "https://github.com/caguilaron07/carePapa",
    repoPrivate: true,
  },
  {
    name: "iscreami",
    description:
      "Extended an open-source ice cream recipe calculator with a 20-tool MCP server and Anthropic-powered ingredient enrichment that auto-fills missing nutritional data.",
    stack: ["Python", "FastAPI", "Anthropic SDK", "MCP"],
    liveUrl: "https://iscreami.vercel.app",
    githubUrl: "https://github.com/caguilaron07/iscreami",
    featured: true,
  },
] as const

export const tooling: readonly Project[] = [
  {
    name: "daPathMaker",
    description:
      "MCP server for building and editing BlandAI voice-agent conversation pathways conversationally with Claude — 20 tools spanning pathway, node, and edge management.",
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
      "MCP server exposing Zoom Contact Center and Number Management APIs as tools — queues, engagements, recordings, reporting, and SIP/SMS provisioning.",
    stack: ["TypeScript", "MCP", "OAuth2"],
    githubUrl: "https://github.com/caguilaron07/zoom-ccaas-mcp",
    repoPrivate: true,
  },
] as const
