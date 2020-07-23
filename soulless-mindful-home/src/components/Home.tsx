import React, { useState, useEffect, FunctionComponent } from 'react'
import styled from 'styled-components'
import { List } from './List'
import { ContentBlock } from './ContentBlock'

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-size: 2rem;

  h2 {
    color: white;
    width: 100%;
  }
`

export const Home: FunctionComponent = () => {
  const [technologies, setTechnologies] = useState([])
  const [softSkills, setSoftSkills] = useState([])

  useEffect(() => {
    fetch('/technologies.json')
      .then(async (res) => await res.json())
      .then((data) => setTechnologies(data))
      .catch(() => setTechnologies([]))
    fetch('/softskills.json')
      .then(async (res) => await res.json())
      .then((data) => setSoftSkills(data))
      .catch(() => setSoftSkills([]))
  }, [])

  return (
    <Container>
      <h2>Hi</h2>
      <ContentBlock label="technologies">
        <List elements={technologies} />
      </ContentBlock>
      <ContentBlock label="soft skills">
        <List elements={softSkills} />
      </ContentBlock>
    </Container>
  )
}
