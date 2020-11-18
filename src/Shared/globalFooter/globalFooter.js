import React from 'react'
import { Container, Group, IconLink, LogoLink } from './styles/styledFooter'

export default function GlobalFooter({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

GlobalFooter.Group = function GlobalFooterGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

GlobalFooter.LogoLink = function GlobalFooterLogoLink({ children, ...restProps }) {
  return <LogoLink {...restProps}>{children}</LogoLink>
}

GlobalFooter.IconLink = function GlobalFooterIconLink({ children, ...restProps }) {
  return <IconLink {...restProps}>{children}</IconLink>
}
