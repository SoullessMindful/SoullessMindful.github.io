import React, { useState, useEffect, FunctionComponent } from 'react'
import styled from 'styled-components'
import { List } from './List'
import { ContentBlock } from './ContentBlock'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;

  h2 {
    color: white;
  }
`

export const Home: FunctionComponent = () => {
  const [technologies, setTechnologies] = useState([])

  useEffect(() => {
    fetch('/technologies.json')
      .then(async (res) => await res.json())
      .then((data) => setTechnologies(data))
      .catch(() => setTechnologies([]))
  }, [])

  return (
    <Container>
      <h2>Hi</h2>
      <ContentBlock label="technologies">
        <List elements={technologies} />
      </ContentBlock>
      <ContentBlock>Hehe</ContentBlock>
    </Container>
  )
}
