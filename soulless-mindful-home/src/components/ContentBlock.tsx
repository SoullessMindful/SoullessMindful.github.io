import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledContentBlock = styled.article`
  position: relative;
  width: 95%;
  padding: 2rem;
  margin: 1rem 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: -5px -5px 5px hsl(0, 0%, 80%), 5px 5px 0px hsl(0, 0%, 60%);
`

const Label = styled.div`
  position: absolute;
  top: -2rem;
  left: 50%;
  padding: 1rem;
  border-radius: 2rem;
  background-color: hsl(0, 0%, 20%);
  color: white;
  transform: translateX(-50%);
  font-family: 'Fira Code';
`

interface ContentBlockProps {
  label?: string
}

export const ContentBlock: FunctionComponent<ContentBlockProps> = ({
  label,
  children,
}) => (
  <StyledContentBlock>
    {label !== undefined ? <Label>{label}</Label> : undefined}
    {children}
  </StyledContentBlock>
)
