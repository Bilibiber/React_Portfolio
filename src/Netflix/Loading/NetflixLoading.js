import React from 'react'
import { Spinner, PageLock, PageRelease, Picture } from './styles/StyledLoading'

export default function NetflixLoading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <PageLock />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  )
}

NetflixLoading.PageRelease = function LoadingPageRelease({ ...restProps }) {
  return <PageRelease {...restProps} />
}
