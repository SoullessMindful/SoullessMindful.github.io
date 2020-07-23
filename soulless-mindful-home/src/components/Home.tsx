import React, { useState, useEffect, FunctionComponent } from 'react'
import styled from 'styled-components'
import { List } from './List'
import { ContentBlock } from './ContentBlock'

const PATH_HOME_DATA = '/home-data.json'
// const PATH_TECHNOLOGIES = '/home/technologies.json'
// const PATH_SOFT_SKILLS = '/home/softskills.json'
// const PATH_LANGUAGES = '/home/languages.json'
// const PATH_INTERESTS = '/home/interests.json'

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
  const [homeData, setHomeData] = useState<any>({})

  useEffect(() => {
    fetch(PATH_HOME_DATA)
      .then(async (res) => await res.json())
      .then((data) => setHomeData(data))
      .catch(() => setHomeData({}))
  }, [])

  const techSkills = homeData.techSkills ?? []
  const softSkills = homeData.softSkills ?? []
  const languages = homeData.languages ?? []
  const interests = homeData.interests ?? []

  return (
    <Container>
      <h2>Hi</h2>
      <ContentBlock label="tech skills">
        <List elements={techSkills} />
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
