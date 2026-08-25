"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { apps, tooling } from "@/lib/projects"

const CONTACT = {
  github: "https://github.com/caguilaron07",
  linkedin: "https://www.linkedin.com/in/caguilarh/",
  email: "caguilaron@gmail.com",
  resume: "/carlos-aguilar-resume.pdf",
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  const featured = apps.find((project) => project.featured)
  const restApps = apps.filter((project) => !project.featured)

  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 px-6 py-16 sm:py-24 lg:grid lg:grid-cols-[280px_1fr] lg:items-start lg:gap-16"
    >
      <motion.aside
        variants={item}
        className="flex flex-col gap-4 lg:sticky lg:top-16"
      >
        <h1 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl">
          Carlos
          <br />
          Aguilar-Hidalgo
        </h1>
        <p className="font-heading text-lg italic text-primary">
          VP, Customer Experience &amp; AI Transformation.
        </p>
        <p className="text-sm text-muted-foreground">
          I lead enterprise AI and CX strategy for a 240-agent contact center. Outside of that, I
          build my own products and MCP servers, including tooling for the voice and
          contact-center platforms I work with day to day.
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
      </motion.aside>

      <div className="flex flex-col gap-20">
        <section className="flex flex-col gap-6">
          <motion.div variants={item}>
            <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
              Products &amp; Apps
            </h2>
            <p className="text-sm text-muted-foreground">Shipped, deployed, and live.</p>
          </motion.div>

          {featured && <ProjectCard project={featured} featured />}

          <div className="grid gap-4 sm:grid-cols-2">
            {restApps.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <motion.section
          variants={item}
          className="flex flex-col gap-6 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8"
        >
          <div>
            <h2 className="font-heading text-2xl font-medium tracking-tight text-primary sm:text-3xl">
              AI Agent &amp; MCP Tooling
            </h2>
            <p className="text-sm text-muted-foreground">
              Tools that give Claude and other MCP clients new capabilities.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {tooling.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </motion.section>

        <motion.footer variants={item} className="border-t border-border pt-8 text-sm text-muted-foreground">
          <p>
            {CONTACT.email} &middot;{" "}
            <Link
              href={CONTACT.linkedin}
              className="underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>{" "}
            &middot;{" "}
            <Link
              href={CONTACT.github}
              className="underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </p>
        </motion.footer>
      </div>
    </motion.main>
  )
}
