import React, { FunctionComponent, useState, useEffect } from 'react'
import { StyledContainer } from './StyledContainer'
import { Project } from './Project'

const PATH_PROJECTS_DATA = '/projects-data.json'

export const Projects: FunctionComponent = () => {
  const [projectsData, setProjectsData] = useState<any[]>([])

  useEffect(() => {
    fetch(PATH_PROJECTS_DATA)
      .then(async (res) => await res.json())
      .then((data) => setProjectsData(data))
      .catch(() => setProjectsData([]))
  }, [])

  return (
    <StyledContainer>
      <h2>These are the projects I have undertaken</h2>
      {projectsData.map(({ name, description, tags, links }: any) => (
        <Project
          name={name}
          description={description}
          tags={tags}
          links={links}
        />
      ))}
    </StyledContainer>
  )
}
