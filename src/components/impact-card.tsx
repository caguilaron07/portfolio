"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import type { Initiative } from "@/lib/projects"

const cardMotion = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export function ImpactCard({
  initiative,
  className,
}: {
  initiative: Initiative
  className?: string
}) {
  return (
    <motion.div
      variants={cardMotion}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "flex flex-col gap-4 rounded-lg border border-border bg-card p-6",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-xl font-medium">{initiative.name}</h3>
        <p className="text-sm text-muted-foreground">{initiative.description}</p>
      </div>

      {(initiative.metrics || initiative.scale) && (
        <div className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
          {initiative.metrics?.map((metric) => (
            <span key={metric} className="font-mono text-sm font-medium text-primary">
              {metric}
            </span>
          ))}
          {initiative.scale && (
            <span className="font-mono text-xs text-muted-foreground">
              {initiative.scale}
            </span>
          )}
        </div>
      )}
    </motion.div>
  )
}
