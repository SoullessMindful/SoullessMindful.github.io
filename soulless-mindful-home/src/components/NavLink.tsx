import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  transition: background-color 0.3s, color 0.3s;
  height: 1.5em;
  color: white;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: white;
    color: hsl(0, 0%, 20%);
  }
`

const LeftBlock = styled.div`
  display: inline-block;
  background-color: hsl(270, 100%, 50%);
  height: 1.5em;
  width: 0.5em;
  vertical-align: middle;
`

const Label = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 0px 5px;
`

interface NavLinkProps {
  label: string
  path: string
  outside?: boolean
}

export const NavLink: FunctionComponent<NavLinkProps> = ({
  label,
  path,
  outside = false,
}) => {
  const content = (
    <Container>
      <LeftBlock />
      <Label>{label}</Label>
    </Container>
  )

  return outside ? (
    <a href={path} target="blank">
      {content}
    </a>
  ) : (
    <Link to={path}>{content}</Link>
  )
}
