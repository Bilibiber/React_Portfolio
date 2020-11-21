import React from 'react'
import { Spinner, PageLock, PageRelease, Picture } from './styles/StyledLoading'

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <PageLock />
      <Picture src={src} />
    </Spinner>
  )
}

Loading.PageRelease = function LoadingPageRelease({ ...restProps }) {
  return <PageRelease {...restProps} />
}
