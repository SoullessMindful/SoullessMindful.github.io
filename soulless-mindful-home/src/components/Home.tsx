import React, { ReactElement, useState, useEffect } from 'react'
import styled from 'styled-components'
import { List } from './List'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
`

const ContentBlock = styled.article`
  width: 95%;
  padding: 2rem;
  margin: 1rem 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: -5px -5px 5px hsl(0, 0%, 80%), 5px 5px 0px hsl(0, 0%, 60%);
`

export const Home = (): ReactElement => {
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
      <ContentBlock>
        <List elements={technologies} />
      </ContentBlock>
      <ContentBlock>Hehe</ContentBlock>
    </Container>
  )
}
