import React, { useState, useEffect, FunctionComponent } from 'react'
import styled from 'styled-components'
import { List } from './List'
import { ContentBlock } from './ContentBlock'

const PATH_TECHNOLOGIES = '/home/technologies.json'
const PATH_SOFT_SKILLS = '/home/softskills.json'
const PATH_LANGUAGES = '/home/languages.json'
const PATH_INTERESTS = '/home/interests.json'

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
  const [languages, setLanguages] = useState([])
  const [interests, setInterests] = useState([])

  useEffect(() => {
    fetch(PATH_TECHNOLOGIES)
      .then(async (res) => await res.json())
      .then((data) => setTechnologies(data))
      .catch(() => setTechnologies([]))
    fetch(PATH_SOFT_SKILLS)
      .then(async (res) => await res.json())
      .then((data) => setSoftSkills(data))
      .catch(() => setSoftSkills([]))
    fetch(PATH_LANGUAGES)
      .then(async (res) => await res.json())
      .then((data) => setLanguages(data))
      .catch(() => setLanguages([]))
    fetch(PATH_INTERESTS)
      .then(async (res) => await res.json())
      .then((data) => setInterests(data))
      .catch(() => setInterests([]))
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
      <ContentBlock label="languages">
        <List elements={languages} />
      </ContentBlock>
      <ContentBlock label="interests">
        <List elements={interests} />
      </ContentBlock>
    </Container>
  )
}
