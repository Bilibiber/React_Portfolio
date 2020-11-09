import React, { useState, useContext, createContext } from "react"
import { Container, Inner, Frame, Title, Item, Body, Header } from "./style/StyledFAQ"

const ToggleContext = createContext()

export default function NetflixFAQ({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner> {children}</Inner>
    </Container>
  )
}
NetflixFAQ.Title = function NetflixFAQTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

NetflixFAQ.Frame = function NetflixFAQFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

NetflixFAQ.Item = function NetflixFAQItem({ children, ...restProps }) {
  const [toggle, setToggle] = useState(false)
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}

NetflixFAQ.Header = function NetflixFAQHeader({ children, ...restProps }) {
  const { toggle, setToggle } = useContext(ToggleContext)
  return (
    <Header {...restProps} onClick={() => setToggle((toggle) => !toggle)}>
      {children}
    </Header>
  )
}
NetflixFAQ.Body = function NetflixFAQBody({ children, ...restProps }) {
  const { toggle } = useContext(ToggleContext)
  return toggle ? <Body {...restProps}>{children}</Body> : null
}
