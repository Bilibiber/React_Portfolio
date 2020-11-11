import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
  height: 100vh;

  @media (max-width: 1000px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`
export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`

export const Logo = styled.img`
  cursor: pointer;
  height: 45px;
  width: 167px;
  margin-top: 30px;
  margin-right: 40px;

  @media (max-width: 1440px) {
    height: 45px;
    width: 167px;
  }

  @media (max-width: 600px) {
    height: 28px;
    width: 88px;
  }
`

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 90px;
  height: fit-content;
  border: 0;
  color: white;
  font-size: 16px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`
