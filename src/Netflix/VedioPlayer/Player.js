import React, { useState, useContext, createContext } from 'react'
import { Container, Button, Overlay, Inner, Close } from './styles/styledPlayer'
import ReactDOM from 'react-dom'

export const PlayerContext = createContext()

export default function Player({ children, ...restProps }) {
  const [showPlay, setShowPlay] = useState(false)

  return (
    <PlayerContext.Provider value={(showPlay, setShowPlay)}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)
}
