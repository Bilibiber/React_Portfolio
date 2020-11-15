import React, { useState, useContext, createContext } from 'react'
import { Container, Content, Group, Frame, Feature, FeatureText, FeatureTitle, Maturity, FeatureClose, Images, Info, Item, Title, SubTitle, Text } from './styles/StyledCards'

export const CardsContext = createContext()

export default function NetflixCards({ children, ...restProps }) {
  const [showDetail, setDetail] = useState(false)
  const [Item, setItem] = useState({})

  return (
    <CardsContext.Provider value={{ showDetail, setDetail, Item, setItem }}>
      <Container {...restProps}>{children}</Container>
    </CardsContext.Provider>
  )
}

NetflixCards.Group = function NetflixCardsGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

NetflixCards.Frame = function NetflixCardsFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

NetflixCards.Title = function NetflixCardsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

NetflixCards.SubTitle = function NetflixCardsSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

NetflixCards.Text = function NetflixCardsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

NetflixCards.Info = function NetflixCardsInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>
}

NetflixCards.Item = function NetflixCardsItem({ item, children, ...restProps }) {
  const { setDetail, setItem } = useContext(CardsContext)
  return (
    <Item
      {...restProps}
      onClick={() => {
        setItem(item)
        setDetail(true)
      }}
    >
      {children}
    </Item>
  )
}

NetflixCards.Images = function NetflixCardsImages({ ...restProps }) {
  return <Images {...restProps} />
}

NetflixCards.Feature = function NetflixCardsFeature({ children, category, ...restProps }) {
  const { showDetail, setDetail, Item } = useContext(CardsContext)

  return showDetail ? (
    <Feature {...restProps} src={`/images/${category}/${Item.genre}/${Item.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{Item.title}</FeatureTitle>
        <FeatureText>{Item.description}</FeatureText>
        <FeatureClose onClick={() => setDetail(false)}>
          <img src='/images/icons/close.png' alt='Close' />
        </FeatureClose>
        <Group margin='30px 0' flexDirection='row' alignItem='center'>
          <Maturity rating={Item.maturity}>{Item.maturity < 12 ? 'PG' : Item.maturity}</Maturity>
          <FeatureText font-weight='bold'>{Item.genre.charAt(0).toUpperCase() + Item.genre.slice(1)}</FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null
}
