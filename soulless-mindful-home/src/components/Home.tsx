import React, { ReactElement } from 'react'
import styled from 'styled-components'

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
`

export const Home = (): ReactElement => {
  return (
    <Container>
      <h2>Hi</h2>
      <ContentBlock>
        <ul style={{ display: 'inline-block', textAlign: 'left' }}>
          <li>TypeScript</li>
          <li>
            JavaScript
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>Webpack</li>
              <li>ESLint & Prettier</li>
            </ul>
          </li>
          <li>HTML5</li>
          <li>
            CSS3
            <ul>
              <li>SASS</li>
              <li>BootStrap</li>
            </ul>
          </li>
          <li>
            Python
            <ul>
              <li>Tensorflow</li>
              <li>Keras</li>
            </ul>
          </li>
        </ul>
      </ContentBlock>
      <ContentBlock>Hehe</ContentBlock>
    </Container>
  )
}
