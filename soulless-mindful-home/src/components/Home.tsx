import React, { useState, useEffect, FunctionComponent } from 'react'
import { MainList } from './List'
import { ContentBlock } from './ContentBlock'
import { StyledContainer } from './StyledContainer'
import { WorkElement } from './WorkElement'
import { EducationElement } from './EducationElement'

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
  const workExperience = homeData.workExperience ?? []
  const education = homeData.education ?? []

  return (
    <StyledContainer>
      <h2>
        Hi
        <br />I am a Software Developer, Mathematician and Machine Learning
        Enthusiast
      </h2>
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
        {workExperience.map(({ title, place, from, to, duties }: any) => (
          <WorkElement
            title={title}
            place={place}
            from={from}
            to={to}
            duties={duties}
          />
        ))}
      </ContentBlock>
      <ContentBlock label="education">
        {education.map(
          ({
            title,
            field,
            place,
            from,
            to,
            specialization,
            thesis,
            grade,
          }: any) => (
            <EducationElement
              title={title}
              field={field}
              place={place}
              from={from}
              to={to}
              specialization={specialization}
              thesis={thesis}
              grade={grade}
            />
          )
        )}
      </ContentBlock>
      <ContentBlock label="interests">
        <MainList elements={interests} />
      </ContentBlock>
    </StyledContainer>
  )
}
