import React from 'react'

export default function Loading() {
  return (
    <>
      <Loading>
        <PageLock />
      </Loading>
    </>
  )
}

Loading.Release = function LoadingRelease() {
  return <Release></Release>
}
