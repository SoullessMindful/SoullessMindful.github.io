import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  text-align: left;
  display: inline-block;
  list-style: '() => ';
  font-family: 'Fira Code';
`

interface ListElement {
  label: string
  sublist?: ListElement[]
}

interface ListProps {
  elements: ListElement[]
}

export const List: FunctionComponent<ListProps> = ({ elements }) => (
  <div>
    <StyledList>
      {elements.map((element: ListElement) => (
        <li>
          {element.label}
          {element.sublist !== undefined && element.sublist.length > 0 ? (
            <List elements={element.sublist} />
          ) : undefined}
        </li>
      ))}
    </StyledList>
  </div>
)