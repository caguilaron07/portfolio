import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ProjectCard } from "@/components/project-card"
import { apps, tooling } from "@/lib/projects"

const CONTACT = {
  github: "https://github.com/caguilaron07",
  linkedin: "https://www.linkedin.com/in/caguilarh/",
  email: "caguilaron@gmail.com",
  resume: "/carlos-aguilar-resume.pdf",
}

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-1 flex-col gap-16 px-6 py-16 sm:py-24">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Carlos Aguilar-Hidalgo</h1>
        <p className="text-lg text-muted-foreground">
          Full-stack engineer building AI-native tools and products.
        </p>
        <p className="max-w-2xl text-sm text-muted-foreground">
          I build complete products end to end: web apps with real auth and databases, plus MCP
          servers that give AI agents new capabilities against systems like BlandAI, Bandwidth,
          and Zoom Contact Center.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <Button asChild variant="outline" size="sm">
            <Link href={CONTACT.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={`mailto:${CONTACT.email}`}>Email</Link>
          </Button>
          <Button asChild size="sm">
            <Link href={CONTACT.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Products &amp; Apps</h2>
          <p className="text-sm text-muted-foreground">Shipped, deployed, and live.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {apps.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <Separator />

      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">AI Agent &amp; MCP Tooling</h2>
          <p className="text-sm text-muted-foreground">
            Tools that give Claude and other MCP clients new capabilities.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {tooling.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <footer className="pt-8 text-sm text-muted-foreground">
        <Separator className="mb-8" />
        <p>
          {CONTACT.email} &middot;{" "}
          <Link href={CONTACT.linkedin} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>{" "}
          &middot;{" "}
          <Link href={CONTACT.github} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </p>
      </footer>
    </main>
  )
}
