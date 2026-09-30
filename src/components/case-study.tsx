"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { fadeUp } from "@/lib/motion"
import type { CaseStudy } from "@/lib/projects"

export function CaseStudyCard({
  caseStudy,
  className,
}: {
  caseStudy: CaseStudy
  className?: string
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "flex flex-col gap-5 rounded-lg border border-border bg-card p-6",
        className
      )}
    >
      <h3 className="font-heading text-xl font-medium">{caseStudy.name}</h3>

      <div className="flex flex-col gap-3">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Problem
          </span>
          <p className="mt-1 text-sm text-muted-foreground">{caseStudy.problem}</p>
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Approach
          </span>
          <p className="mt-1 text-sm text-muted-foreground">
            {caseStudy.approach}
          </p>
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Outcome
          </span>
          <p className="mt-1 text-sm font-medium text-primary">
            {caseStudy.outcome}
          </p>
        </div>
      </div>

      {caseStudy.scale && (
        <span className="font-mono text-xs text-muted-foreground">
          {caseStudy.scale}
        </span>
      )}
    </motion.div>
  )
}
