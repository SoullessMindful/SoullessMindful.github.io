import styled from 'styled-components'
import * as RWD from '../RWD'

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-size: 2rem;

  h2 {
    color: white;
    width: 100%;
  }

  ${RWD.XL} {
    display: inline-flex;
    width: ${RWD.XL_SIZE}px;
  }
`
