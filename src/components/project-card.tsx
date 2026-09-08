"use client"

import { motion } from "framer-motion"
import Image from "next/image"
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
  return (
    <motion.div
      variants={cardMotion}
      whileHover={{ y: featured ? -6 : -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-border bg-card",
        featured && "border-l-4 border-l-primary",
        className
      )}
    >
      {project.screenshots ? (
        <div className="grid grid-cols-3 gap-px overflow-hidden border-b border-border bg-border">
          {project.screenshots.map((src) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src={src}
                alt={`${project.name} screenshot`}
                fill
                sizes="(min-width: 640px) 17vw, 33vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      ) : (
        project.screenshot && (
          <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-muted">
            <Image
              src={project.screenshot}
              alt={`${project.name} screenshot`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        )
      )}

      <div className={cn("flex flex-col gap-4 p-6", featured && "sm:p-8")}>
        <div className="flex flex-col gap-2">
          {featured && (
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Featured
            </span>
          )}
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

        <div className="mt-auto pt-2">
          <Button asChild size="sm" variant="outline">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
