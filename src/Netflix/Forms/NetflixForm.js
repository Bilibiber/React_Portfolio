import React from 'react'
import { Container, Input, Button, InputText, Break } from './styles/StyledForms'

export default function NetflixForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

NetflixForm.FAQInput = function NetflixFormFAQInput({ children, ...restProps }) {
  return <Input {...restProps} />
}
NetflixForm.FAQButton = function NetflixFormFAQButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now!" />
    </Button>
  )
}
NetflixForm.FAQInputText = function NetflixFormFAQInputText({ children, ...restProps }) {
  return <InputText {...restProps}>{children}</InputText>
}
NetflixForm.FAQBreak = function NetflixFormFAQBreak({ ...restProps }) {
  return <Break {...restProps} />
}
