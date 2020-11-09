import React from "react"
import { Inner, Container, Pane, Images, Item, Title, SubTitle } from "./styles/JumbotronStyled"

export default function NIndex({ children, direction = "row", ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}
NIndex.Container = function NIndexContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
NIndex.Pane = function NIndexPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}
NIndex.Title = function NIndexTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
NIndex.SubTitle = function NIndexSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
NIndex.Images = function NIndexImages({ ...restProps }) {
  return <Images {...restProps} />
}
