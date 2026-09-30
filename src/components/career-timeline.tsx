"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import type { CareerTimelineItem } from "@/lib/projects"

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export function CareerTimeline({
  items,
  className,
}: {
  items: readonly CareerTimelineItem[]
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
      initial="hidden"
      animate="show"
      className={cn("flex flex-col", className)}
    >
      {items.map((role, index) => (
        <motion.div
          key={`${role.title}-${role.company}`}
          variants={itemVariants}
          className="relative flex gap-4 pb-2.5"
        >
          {index < items.length - 1 && (
            <div className="absolute left-2 top-2.5 bottom-0 w-px bg-border" />
          )}

          <div className="flex h-6 w-6 shrink-0 items-center justify-center">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          </div>

          <div className="flex flex-1 flex-col gap-0.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <p className="font-heading font-medium">{role.title}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {role.dates}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{role.company}</p>
            <p className="text-sm text-muted-foreground">{role.scope}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}