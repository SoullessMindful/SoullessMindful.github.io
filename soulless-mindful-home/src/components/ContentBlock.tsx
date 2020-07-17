import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import * as RWD from './../RWD'

const StyledContentBlock = styled.article<{ isLabel: boolean }>`
  position: relative;
  animation: slide-from-left 0.3s;
  width: 95%;
  padding: 2.5rem;
  margin: ${(p) => (p.isLabel ? 3 : 1)}rem 1rem 1rem 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: -5px -5px 5px hsl(0, 0%, 80%), 5px 5px 0px hsl(0, 0%, 60%);

  ${RWD.XL} {
    width: 45%;
  }
`

const Label = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 50%;
  padding: 1rem;
  border-radius: 2rem;
  background-color: hsl(0, 0%, 20%);
  color: white;
  transform: translateX(-50%);
  font-family: 'Fira Code';
  text-transform: capitalize;
`

interface ContentBlockProps {
  label?: string
}

export const ContentBlock: FunctionComponent<ContentBlockProps> = ({
  label,
  children,
}) => (
  <StyledContentBlock isLabel={label !== undefined}>
    {label !== undefined ? <Label>{label}</Label> : undefined}
    {children}
  </StyledContentBlock>
)
