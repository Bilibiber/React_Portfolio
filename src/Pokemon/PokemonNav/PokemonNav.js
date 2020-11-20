import React from 'react'
import { Nav, Logo, Text } from './styles/StyledPokemonNav'

export default function PokemonNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>
}

PokemonNav.Logo = function PokemonNavLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>
}

PokemonNav.Text = function PokemonNavText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
