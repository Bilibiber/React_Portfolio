import React from 'react'
import FAQData from '../preloadedData/FAQ.json'
import NetflixFAQ from '../FAQ/NetflixFAQ'
import NetflixForm from '../Forms/NetflixForm'

export default function FAQContainer() {
  return (
    <>
      <NetflixFAQ>
        <NetflixFAQ.Title>Frequently Asked Questions</NetflixFAQ.Title>
        {FAQData.map((item) => (
          <NetflixFAQ.Item key={item.id}>
            <NetflixFAQ.Header>{item.header} </NetflixFAQ.Header>
            <NetflixFAQ.Body>{item.body}</NetflixFAQ.Body>
          </NetflixFAQ.Item>
        ))}
        <NetflixForm>
          <NetflixForm.FAQInputText>Ready to Watch? Enter your email to create or restart your membership today</NetflixForm.FAQInputText>
          <NetflixForm.FAQBreak />
          <NetflixForm.FAQInput placeholder='Email Address' />
          <NetflixForm.FAQButton to='/Netflix/signUp'>Try it Now</NetflixForm.FAQButton>
        </NetflixForm>
      </NetflixFAQ>
    </>
  )
}
