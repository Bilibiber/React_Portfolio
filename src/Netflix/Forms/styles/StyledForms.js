import styled from 'styled-components/macro'
import { Link as ReactRoute } from 'react-router-dom'
export const Container = styled.div`
  max-width: 670px;
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width) {
    flex-direction: column;
    align-items: center;
  }
`
export const Button = styled(ReactRoute)`
  text-decoration: none;
  display: flex;
  border-radius: 0 2px 2px 0;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    background: #f40612;
  }
  @media (max-width: 1000px) {
    border-radius: 2px;
    height: 52px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`

export const Input = styled.input`
  max-width: 400px;
  border-radius: 2px 0 0 2px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;

  @media (max-width: 1000px) {
    height: 52px;
    border-radius: 2px;
    margin-top: 20px;
  }
`
export const InputText = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`
export const Break = styled.div`
  flex-basis: 100%;
  height: 10px;
`
