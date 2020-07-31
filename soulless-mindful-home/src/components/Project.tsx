import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import * as RWD from './../RWD'

const StyledProjectBlock = styled.article`
  position: relative;
  animation: slide-from-left 0.3s;
  width: 47.5%;
  font-size: 1.5rem;
  padding: 1rem;
  margin: 0.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: -3px -3px 3px hsl(0, 0%, 80%), 3px 3px 0px hsl(0, 0%, 60%);

  ${RWD.XL} {
    width: calc(0.475 * ${RWD.XL_SIZE}px);
  }

  ${RWD.XS} {
    width: 95%;
  }
`

const HashLine = styled.p`
  font-size: 2.4rem;
`

const HashTag = styled.div`
  vertical-align: middle;
  transition: font-size 0.3s;
  display: inline-block;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.2rem;
  margin-right: 0.3rem;
  background-color: hsl(0, 0%, 85%);
  &::before {
    content: '# ';
    color: hsl(270, 100%, 50%);
  }

  ${RWD.L} {
    &:hover {
      font-size: 1.3rem;
    }
  }
`

const ProjectLink = styled.a`
  transition: background-color 0.3s;
  background-color: hsl(270, 100%, 50%);
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 1.5rem;
  text-decoration: none;

  &:hover {
    background-color: hsl(300, 100%, 50%);
  }
`

interface ProjectProps {
  name: string
  description: string
  tags?: string[]
  links?: Array<{
    label: string
    href: string
  }>
}

export const Project: FunctionComponent<ProjectProps> = ({
  name,
  description,
  tags = [],
  links = [],
}) => (
  <StyledProjectBlock>
    <h3>{name}</h3>
    <p>{description}</p>
    <HashLine>
      {tags.map((tag) => (
        <HashTag>{tag}</HashTag>
      ))}
    </HashLine>
    <p>
      {links.map(({ label, href }) => (
        <ProjectLink href={href} target="blank">
          {label}
        </ProjectLink>
      ))}
    </p>
  </StyledProjectBlock>
)
