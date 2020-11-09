import React from "react"
import { GlobalStyle } from "../Global-style"
import JumbotronContainer from "../Container/JumbotronContainer"
import FooterContainer from "../Container/FooterContainer"
import FAQContainer from "../Container/FAQContainer"

function Netflix() {
  return (
    <>
      <GlobalStyle />
      <JumbotronContainer />
      <FAQContainer />
      <FooterContainer />
    </>
  )
}

export default Netflix
