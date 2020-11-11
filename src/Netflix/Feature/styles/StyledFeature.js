import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

export const Title = styled.h1`
  margin-left: 340px;
  margin-right: 340px;
  color: white;
  font-size: 58px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    font-size: 46px;
    margin-left: 100px;
    margin-right: 100px;
  }

  @media (max-width: 600px) {
    font-size: 1.75rem;
    margin: 0;
    max-width: 640px;
  }
`

export const SubTitle = styled.h3`
  color: white;
  font-size: 26px;
  font-weight: normal;

  @media (max-width: 1000px) {
    font-size: 22px;
  }
  @media (max-width: 600px) {
    font-size: 1.15rem;
    margin-top: 1rem;
    max-width: 640px;
  }
`
