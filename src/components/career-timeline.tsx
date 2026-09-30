"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { fadeUp } from "@/lib/motion"
import type { CareerTimelineItem } from "@/lib/projects"

export function CareerTimeline({
  items,
  className,
}: {
  items: readonly CareerTimelineItem[]
  className?: string
}) {
  return (
    <motion.ol
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
      className={cn("flex flex-col list-none gap-2 p-0", className)}
    >
      {items.map((role, index) => (
        <motion.li
          key={`${role.title}-${role.company}`}
          variants={fadeUp}
          className="relative flex gap-4 pb-2.5"
        >
          {index < items.length - 1 && (
            <div className="absolute left-3 top-2.5 bottom-0 w-px -translate-x-1/2 bg-border" />
          )}

          <div className="flex h-6 w-6 shrink-0 items-center justify-center">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          </div>

          <div className="flex flex-1 flex-col gap-0.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <p className="font-heading font-medium">{role.title}</p>
              <p className="shrink-0 font-mono text-xs text-muted-foreground">
                {role.dates}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{role.company}</p>
            <p className="text-sm text-muted-foreground">{role.scope}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  )
}
