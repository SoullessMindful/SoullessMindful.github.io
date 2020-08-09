import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledWorkElement = styled.div`
  text-align: left;
  font-size: 1.5rem;

  ul {
    list-style-type: '- ';
  }

  hr {
    border-color: hsl(270, 100%, 40%);
    border-bottom: none;
  }

  &:last-child hr {
    display: none;
  }
`

const StyledTitle = styled.p`
  font-weight: bold;
`

interface WorkElementProps {
  title: string
  place: string
  from: string
  to: string
  duties: string[]
}

export const WorkElement: FunctionComponent<WorkElementProps> = ({
  title,
  place,
  from,
  to,
  duties,
}) => (
  <StyledWorkElement>
    <StyledTitle>{title}</StyledTitle>
    <p>at {place}</p>
    <p>
      {from} - {to}
    </p>
    <ul>
      {duties.map((duty) => (
        <li>{duty}</li>
      ))}
    </ul>
    <hr />
  </StyledWorkElement>
)
