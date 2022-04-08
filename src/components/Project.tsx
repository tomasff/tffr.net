import * as React from "react"
import { Paragraph, Link as TLink, Box } from "theme-ui"

type ProjectProps = {
    name: string
    description: string
    url: string
}

const Project = (project: ProjectProps) => (
    <Box mb={4}>
        <TLink href={project.url} sx={{ fontSize: [1, 2, 3], color: `text` }}>
            {project.name}
        </TLink>
        <Paragraph sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
            {project.description}
        </Paragraph>
  </Box>
)

export default Project