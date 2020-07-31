import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  padding-left: 2.5rem;
  text-align: left;
  display: inline-block;
  list-style: none;
  font-family: 'Fira Code';

  li::before {
    content: '() => ';
    color: hsl(270, 100%, 40%);
  }
`

interface ListElement {
  label: string
  sublist?: ListElement[]
}

interface ListProps {
  elements: ListElement[]
}

export const List: FunctionComponent<ListProps> = ({ elements }) => (
  <StyledList>
    {elements.map((element: ListElement) => (
      <li>
        {element.label}
        {element.sublist !== undefined && element.sublist.length > 0 ? (
          <div>
            <List elements={element.sublist} />
          </div>
        ) : undefined}
      </li>
    ))}
  </StyledList>
)
