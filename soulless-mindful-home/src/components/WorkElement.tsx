import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

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
  <div>
    <p>
      {title} at {place}
    </p>
    <p>
      {from} - {to}
    </p>
    <ul>
      {duties.map((duty) => (
        <li>{duty}</li>
      ))}
    </ul>
  </div>
)
