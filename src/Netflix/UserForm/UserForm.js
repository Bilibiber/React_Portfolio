import React from 'react'
import { Container, Base, Input, Link, Errors, Button, Title, Text, TextSmall } from './styles/StyledUserForms'

export default function UserForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

UserForm.TextSmall = function UserFormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>
}

UserForm.Base = function UserFormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>
}

UserForm.Link = function UserFormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

UserForm.Errors = function UserFormErrors({ children, ...restProps }) {
  return <Errors {...restProps}>{children}</Errors>
}

UserForm.Title = function UserFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

UserForm.Input = function UserFormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>
}
UserForm.Button = function UserFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}
UserForm.Text = function UserFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
