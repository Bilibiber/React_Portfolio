import React from 'react'
import useContent from '../Hooks/UseContent'
import selectionFilter from '../utilities/selectionFilter'
import { GlobalStyle } from '../Global-style'
import BrowseContainer from '../Container/BrowseContainer'

function Browse() {
  const { series } = useContent('series')
  const { films } = useContent('films')
  const slides = selectionFilter({ series, films })
  return (
    <>
      <GlobalStyle />
      <BrowseContainer slides={slides} />
    </>
  )
}

export default Browse
