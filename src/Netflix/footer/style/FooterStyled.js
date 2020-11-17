import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const Text = styled.div`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`
export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`
export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`
export const BiliBiber = styled.div`
  padding: 10px 70px 20px 70px;
  bottom: 0;
  background-color: #242424;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.div`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-top: 30px;
`
export const Group = styled.div`
  a {
    color: #fff;
    font-size: ${({ font }) => font || '24px'};
    margin-right: ${({ right }) => right || '0'};
    margin-left: 20px;
  }
`
