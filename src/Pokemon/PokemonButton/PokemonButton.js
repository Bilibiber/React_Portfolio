import React from 'react'
import { Wrapper, Icon, IconWrapper } from './styles/StyledButton'

export default function PokemonButton({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

PokemonButton.IconWrapper = function PokemonButtonIconWrapper({ children, ...restProps }) {
  return <IconWrapper {...restProps}>{children}</IconWrapper>
}

PokemonButton.Icon = function PokemonButtonIcon({ children, disable, ...restProps }) {
  return (
    <Icon disabled={disable} {...restProps}>
      {children}
    </Icon>
  )
}
