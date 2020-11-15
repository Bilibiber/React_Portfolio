import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Background, Container, TextLink, Dropdown, Group, Picture, Profiles, Logo, PlayButton, Search, SearchInput, SearchIcon, ButtonLink, HeaderTitle, HeaderFeature, HeaderText } from './styles/StyledHeader'

export default function NetflixHeader({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children
}

NetflixHeader.Frame = function NetflixHeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
NetflixHeader.TextLink = function NetflixHeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>
}

NetflixHeader.Picture = function NetflixHeaderPicture({ src }) {
  return <Picture src={`/images/users/${src}.png`} />
}

NetflixHeader.Search = function NetflixHeaderSearch({ search, setSearch, ...restProps }) {
  const [searchActive, setActive] = useState('')
  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setActive(!searchActive)}>
        <img src='/images/icons/search.png' alt='Search' />
      </SearchIcon>
      <SearchInput value={search} onChange={({ target }) => setSearch(target)} placeholder='Search films or series' active={searchActive} />
    </Search>
  )
}

NetflixHeader.SearchIcon = function NetflixHeaderSearchIcon({ children, ...restProps }) {
  return <SearchIcon {...restProps}>{children}</SearchIcon>
}

NetflixHeader.SearchInput = function NetflixHeaderSearchInput({ children, ...restProps }) {
  return <SearchInput {...restProps}>{children}</SearchInput>
}

NetflixHeader.Profiles = function NetflixHeaderProfiles({ children, ...restProps }) {
  return <Profiles {...restProps}>{children}</Profiles>
}

NetflixHeader.Group = function NetflixHeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

NetflixHeader.PlayButton = function NetflixHeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}

NetflixHeader.Dropdown = function NetflixHeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}
NetflixHeader.Logo = function NetflixHeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}

NetflixHeader.ButtonLink = function NetflixHeadedButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

NetflixHeader.HeaderText = function NetflixHeadedHeaderText({ children, ...restProps }) {
  return <HeaderText {...restProps}>{children}</HeaderText>
}

NetflixHeader.HeaderTitle = function NetflixHeadedHeaderTitle({ children, ...restProps }) {
  return <HeaderTitle {...restProps}>{children}</HeaderTitle>
}

NetflixHeader.HeaderFeature = function NetflixHeadedHeaderFeature({ children, ...restProps }) {
  return <HeaderFeature {...restProps}>{children}</HeaderFeature>
}
