import React from "react"
import { Break, Column, Container, Link, Row, Text, Title } from "./style/FooterStyled"

export default function NetflixFooter({ children, ...restProps }) {
  return <Container>{children}</Container>
}

NetflixFooter.Row = function NetflixFooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}
NetflixFooter.Column = function NetflixFooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>
}
NetflixFooter.Link = function NetflixFooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
NetflixFooter.Title = function NetflixFooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
NetflixFooter.Text = function NetflixFooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
NetflixFooter.Break = function NetflixFooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>
}
