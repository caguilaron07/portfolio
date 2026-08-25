"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/projects"

const cardMotion = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export function ProjectCard({
  project,
  featured = false,
  className,
}: {
  project: Project
  featured?: boolean
  className?: string
}) {
  const isLive = Boolean(project.liveUrl)

  return (
    <motion.div
      variants={cardMotion}
      whileHover={{ y: featured ? -6 : -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "flex flex-col gap-4 rounded-lg border border-border bg-card p-6",
        featured && "border-l-4 border-l-primary sm:p-8",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {isLive && (
            <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-primary">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              Live
            </span>
          )}
          {featured && (
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Featured
            </span>
          )}
        </div>
        <h3 className={cn("font-heading font-medium", featured ? "text-2xl sm:text-3xl" : "text-xl")}>
          {project.name}
        </h3>
        <p className={cn("text-muted-foreground", featured ? "text-base sm:text-lg" : "text-sm")}>
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-mono text-[11px] font-normal">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-auto flex gap-2 pt-2">
        {project.liveUrl && (
          <Button asChild size="sm">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live demo
            </Link>
          </Button>
        )}
        <Button asChild size="sm" variant="outline">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
