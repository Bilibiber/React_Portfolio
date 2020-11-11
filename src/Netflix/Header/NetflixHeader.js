import React from "react"
import { Link as ReactRouterLink } from "react-router-dom"
import { Background, Container, Logo, ButtonLink } from "./styles/StyledHeader"

export default function NetflixHeader({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children
}

NetflixHeader.Frame = function NetflixHeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
NetflixHeader.Logo = function NetflixHeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}
NetflixHeader.ButtonLink = function NetflixHeadedButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}
