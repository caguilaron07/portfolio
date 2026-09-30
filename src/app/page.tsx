"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ImpactCard } from "@/components/impact-card"
import { CareerTimeline } from "@/components/career-timeline"
import { CaseStudyCard } from "@/components/case-study"
import { apps, tooling, impact, careerTimeline, caseStudies } from "@/lib/projects"
import { fadeUp } from "@/lib/motion"

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
        variants={fadeUp}
        className="flex flex-col items-center gap-4 text-center lg:sticky lg:top-16 lg:items-start lg:text-left"
      >
        <div className="relative size-32 overflow-hidden rounded-full border border-border">
          <Image
            src="/headshot.jpg"
            alt="Carlos Aguilar-Hidalgo"
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </div>
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
          build my own products and MCP servers. Some of that tooling supports the voice and
          contact-center platforms I work with day to day.
        </p>
        <p className="text-xs text-muted-foreground">
          Enterprise work performed in HIPAA- and SOC 2-regulated environments.
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
        <Button asChild size="sm" className="mt-2 w-full whitespace-normal h-auto py-1.5">
          <Link href={`mailto:${CONTACT.email}`}>
            Open to VP/Director CX &amp; AI roles - let&apos;s talk
          </Link>
        </Button>
      </motion.aside>

      <div className="flex flex-col gap-20">
        <motion.section variants={fadeUp} className="flex flex-col gap-6">
          <div>
            <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
              Career Timeline
            </h2>
            <p className="text-sm text-muted-foreground">
              Enterprise leadership across contact center and AI transformation.
            </p>
          </div>
          <CareerTimeline items={careerTimeline} />
        </motion.section>

        <motion.section variants={fadeUp} className="flex flex-col gap-6">
          <div>
            <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
              Enterprise Impact
            </h2>
            <p className="text-sm text-muted-foreground">
              AI transformation work across a 240-agent contact center.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impact.map((initiative) => (
              <ImpactCard key={initiative.name} initiative={initiative} />
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeUp} className="flex flex-col gap-6">
          <div>
            <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
              Case Studies
            </h2>
            <p className="text-sm text-muted-foreground">
              Deep dives into key enterprise transformations.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.name} caseStudy={study} />
            ))}
          </div>
        </motion.section>

        <section className="flex flex-col gap-6">
          <motion.div variants={fadeUp}>
            <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
              Side Projects &amp; Technical Practice
            </h2>
            <p className="text-sm text-muted-foreground">
              Hands-on products and tooling that support the work above.
            </p>
          </motion.div>

          {featured && <ProjectCard project={featured} featured />}

          <div className="grid gap-4 sm:grid-cols-2">
            {restApps.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <motion.section
          variants={fadeUp}
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

        <motion.footer variants={fadeUp} className="border-t border-border pt-8 text-sm text-muted-foreground">
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
            <p className="pt-2">
              Open to VP/Director CX &amp; AI roles -{" "}
              <Link
                href={`mailto:${CONTACT.email}`}
                className="underline underline-offset-4"
              >
                let&apos;s talk
              </Link>
              .
            </p>
        </motion.footer>
      </div>
    </motion.main>
  )
}
