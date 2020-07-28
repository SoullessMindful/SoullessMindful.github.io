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
`

const HashTag = styled.div`
  display: inline-block;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.2rem 0.2rem;
  margin-right: 0.3rem;
  background-color: hsl(0, 0%, 85%);
  &::before {
    content: '# ';
    color: hsl(270, 100%, 50%);
  }
`

interface ProjectProps {
  name: string
  description: string
  tags: string[]
}

export const Project: FunctionComponent<ProjectProps> = ({
  name,
  description,
  tags,
}) => (
  <StyledProjectBlock>
    <h3>{name}</h3>
    <p>{description}</p>
    <p>
      {tags.map((tag) => (
        <HashTag>{tag}</HashTag>
      ))}
    </p>
  </StyledProjectBlock>
)
