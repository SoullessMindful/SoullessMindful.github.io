import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledWorkElement = styled.div`
  text-align: left;
  font-size: 1.5rem;
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
    <p>{title}</p>
    <p>at {place}</p>
    <p>
      {from} - {to}
    </p>
    <ul>
      {duties.map((duty) => (
        <li>{duty}</li>
      ))}
    </ul>
  </StyledWorkElement>
)
