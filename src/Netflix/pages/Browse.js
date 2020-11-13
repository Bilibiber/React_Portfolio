import React from 'react'
import useContent from '../Hooks/UseContent'
import selectionFilter from '../utilities/selectionFilter'
import { GlobalStyle } from '../Global-style'
import BrowseContainer from '../Container/BrowseContainer'
function Browse() {
  const { series } = useContent('series')
  const { films } = useContent('films')
  return (
    <>
      <GlobalStyle />
      <BrowseContainer />
    </>
  )
}

export default Browse
