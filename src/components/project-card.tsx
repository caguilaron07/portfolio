import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="flex gap-2 bg-transparent border-t-0 pt-0">
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
      </CardFooter>
    </Card>
  )
}
