import React, { useState, useEffect, FunctionComponent } from 'react'
import { List } from './List'
import { ContentBlock } from './ContentBlock'
import { StyledContainer } from './StyledContainer'

const PATH_HOME_DATA = '/home-data.json'

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
    <StyledContainer>
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
    </StyledContainer>
  )
}
