import React from 'react'
import { Abilities, Body, Container, Item, Title, SubTitle, Text, Types, Picture, PictureWrapper } from './styles/StyledPokemonCards'

export default function PokemonCards({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

PokemonCards.Item = function PokemonCardsItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

PokemonCards.Body = function PokemonCardsBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>
}

PokemonCards.Title = function PokemonCardsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

PokemonCards.SubTitle = function PokemonCardsSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

PokemonCards.Text = function PokemonCardsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

PokemonCards.Types = function PokemonCardsTypes({ children, ...restProps }) {
  return <Types {...restProps}>{children}</Types>
}

PokemonCards.Abilities = function PokemonCardsAbilities({ children, ...restProps }) {
  return <Abilities {...restProps}>{children}</Abilities>
}

PokemonCards.Picture = function PokemonCardsPicture({ children, ...restProps }) {
  return <Picture {...restProps}>{children}</Picture>
}

PokemonCards.PictureWrapper = function PokemonCardsPictureWrapper({ children, ...restProps }) {
  return <PictureWrapper {...restProps}>{children}</PictureWrapper>
}
