import React, { useState, useEffect, FunctionComponent } from 'react'
import { MainList } from './List'
import { ContentBlock } from './ContentBlock'
import { StyledContainer } from './StyledContainer'
import { WorkElement } from './WorkElement'

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
        <MainList elements={techSkills} />
      </ContentBlock>
      <ContentBlock label="soft skills">
        <MainList elements={softSkills} />
      </ContentBlock>
      <ContentBlock label="languages">
        <MainList elements={languages} />
      </ContentBlock>
      <ContentBlock label="work experience">
        <WorkElement
          title="Research and Teaching Assistant"
          place="Silesian University of Technology"
          from="October 2018"
          to="present"
          duties={[
            'Teaching mathematics to the engineering students',
            'Research in pure mathematics',
            'Supervising Student Mathematical Interest Group',
          ]}
        />
      </ContentBlock>
      <ContentBlock label="interests">
        <MainList elements={interests} />
      </ContentBlock>
    </StyledContainer>
  )
}
