import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledEducationElement = styled.div`
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

const StyledTitle = styled.span`
  font-weight: bold;
`

interface EducationElementProps {
  title: string
  field: string
  place: string
  from: string
  to: string
  specialization: string
  thesis: string
  grade: string
}

export const EducationElement: FunctionComponent<EducationElementProps> = ({
  title,
  field,
  place,
  from,
  to,
  specialization,
  thesis,
  grade,
}) => (
  <StyledEducationElement>
    <p>
      <StyledTitle>{title}</StyledTitle> in <StyledTitle>{field}</StyledTitle>
    </p>
    <p>at {place}</p>
    <p>
      {from} - {to}
    </p>
    <p>Specialization: {specialization}</p>
    <p>Thesis: {thesis}</p>
    <p>Grade: {grade}</p>
    <hr />
  </StyledEducationElement>
)
