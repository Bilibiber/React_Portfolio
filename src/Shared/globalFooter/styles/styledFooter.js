import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const LogoLink = styled(Link)`
  color: #757575;
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: white;
  }
`

export const IconLink = styled.a`
  color: #757575;
  font-size: ${({ font }) => font || '32px'};
  text-decoration: none;
  margin-left: 28px;

  &:hover {
    color: white;
  }
`

export const Container = styled.div`
  padding: 20px 50px 20px 50px;
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;

    ${LogoLink}, ${IconLink} {
      font-size: 24px;
    }
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  small {
    color: #757575;
  }
`
