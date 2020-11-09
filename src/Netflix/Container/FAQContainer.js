import React from "react"
import FAQData from "../preloadedData/FAQ.json"
import NetflixFAQ from "../FAQ/NetflixFAQ"

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
        <NetflixFAQ.Frame></NetflixFAQ.Frame>
      </NetflixFAQ>
    </>
  )
}
