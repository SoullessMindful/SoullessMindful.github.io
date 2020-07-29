import React, { FunctionComponent } from 'react'
import { StyledContainer } from './StyledContainer'
import { Project } from './Project'

export const Projects: FunctionComponent = () => {
  return (
    <StyledContainer>
      <h2>These are the projects I have undertaken</h2>
      <Project
        name="ParseRiver"
        description="A monadic parser library, allowing to implement complex parsers using human readable code"
        tags={['Typescript', 'No Dependencies']}
        links={[
          {
            label: 'Repo',
            href: 'https://github.com/SoullessMindful/parseriver',
          },
          {
            label: 'NPM',
            href: 'https://www.npmjs.com/package/parseriver',
          }
        ]}
      />
      <Project
        name="Esperanto Parser"
        description="A grammar analyzer, spellchecker and integrated editor for a constructed language - Esperanto"
        tags={['Typescript', 'Webpack', 'Sass', 'ParseRiver']}
      />
      <Project
        name="Home Page"
        description="The very page you are watching right now"
        tags={['Typescript', 'React', 'Styled Components']}
      />
    </StyledContainer>
  )
}
