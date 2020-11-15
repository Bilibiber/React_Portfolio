import React from 'react'
import { GlobalStyle } from '../Global-style'
import JumbotronContainer from '../Container/JumbotronContainer'
import FooterContainer from '../Container/FooterContainer'
import FAQContainer from '../Container/FAQContainer'
import HeaderContainer from '../Container/HeaderContainer'
import NetflixForm from '../Forms/NetflixForm'
import Feature from '../Feature/Feature'

function Netflix() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer ButtonText='Sign In'>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <NetflixForm>
            <NetflixForm.FAQInputText>Ready to watch? Enter your email to create or restart your membership.</NetflixForm.FAQInputText>
            <NetflixForm.FAQBreak />
            <NetflixForm.FAQInput placeholder='Email Address' type='text' />
            <NetflixForm.FAQButton to='/Netflix/signUp'>Get Stated</NetflixForm.FAQButton>
            <NetflixForm.FAQBreak />
          </NetflixForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FAQContainer />
      <FooterContainer />
    </>
  )
}

export default Netflix
