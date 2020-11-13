import React from 'react'
import { Container, Title, Pic, List, Item, UserName } from './styles/styledProfiles'

export default function UserProfiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

UserProfiles.Title = function UserProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

UserProfiles.List = function UserProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
}

UserProfiles.Pic = function UserProfilesPic({ src, ...restProps }) {
  return <Pic {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />
}

UserProfiles.Item = function UserProfilesItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

UserProfiles.UserName = function UserProfilesUserName({ children, ...restProps }) {
  return <UserName {...restProps}>{children}</UserName>
}
