import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`

export const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`

export const Pic = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.8;
`

export const UserName = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;

  &:hover {
    font-weight: 500;
    color: #e5e5e5;
  }
`
export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
`

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  margin-right: 30px;
  text-align: center;
  list-style-type: none;

  &:hover > ${Pic} {
    opacity: 1;
  }

  &:hover ${UserName} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`
