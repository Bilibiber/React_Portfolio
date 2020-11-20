import React, { useState, useEffect } from 'react'
import GlobalFooter from '../Shared/container/GlobalFooterContainer'
import PokemonNav from './PokemonNav/PokemonNav'
import PokemonCards from './PokemonCards/PokemonCards'
import Loader from './PokemonLoading/Loader'
import PokemonButton from './PokemonButton/PokemonButton'
import { getAllPokemon, getDetail } from './PokemonServices/services'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function PokemonIndex() {
  const [PokemonData, setPokemonData] = useState([])
  const [nextPage, setNextPage] = useState('')
  const [prePage, setPrePage] = useState('')
  const [Loading, setLoading] = useState(true)
  const [ButtonDisable, setDisable] = useState(true)
  const _url = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function getData() {
      let response = await getAllPokemon(_url)
      setNextPage(response.next)
      setPrePage(response.previous)
      await loadPokemon(response.results)
      setLoading(false)
    }
    getData()
  }, [])

  const Next = async () => {
    setLoading(true)
    let data = await getAllPokemon(nextPage)
    await loadPokemon(data.results)
    setNextPage(data.next)
    if (data.previous === null) {
      setDisable(true)
    } else setDisable(false)
    setPrePage(data.previous)
    setLoading(false)
  }

  const Prev = async () => {
    if (!prePage) return
    setLoading(true)
    let data = await getAllPokemon(prePage)
    await loadPokemon(data.results)
    setNextPage(data.next)
    if (data.previous === null) {
      setDisable(true)
    } else setDisable(false)
    setPrePage(data.previous)
    setLoading(false)
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecords = await getDetail(pokemon)
        return pokemonRecords
      })
    )
    setPokemonData(_pokemonData)
  }
  return (
    <>
      <PokemonButton position='left'>
        <PokemonButton.IconWrapper onClick={Prev}>
          <PokemonButton.Icon disable={ButtonDisable} alt='No more Content'>
            <FaArrowLeft />
          </PokemonButton.Icon>
        </PokemonButton.IconWrapper>
      </PokemonButton>
      <PokemonButton position='right'>
        <PokemonButton.IconWrapper onClick={Next}>
          <PokemonButton.Icon>
            <FaArrowRight />
          </PokemonButton.Icon>
        </PokemonButton.IconWrapper>
      </PokemonButton>
      <PokemonNav>
        <PokemonNav.Logo>
          <img src='/images/psyduckhead.png' />
        </PokemonNav.Logo>
      </PokemonNav>
      <PokemonCards.Body>
        <PokemonCards>
          {PokemonData.map((Pokemon) => (
            <PokemonCards.Item key={Pokemon.id}>
              <PokemonCards.Picture src={Pokemon.sprites.front_default} />
              <PokemonCards.Title>{Pokemon.name.charAt(0).toUpperCase() + Pokemon.name.slice(1)}</PokemonCards.Title>
              <PokemonCards.Types>
                <PokemonCards.SubTitle>Types</PokemonCards.SubTitle>
                {Pokemon.types.map((types) => {
                  return <PokemonCards.Text key={types.type.url}>{types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1)}</PokemonCards.Text>
                })}
              </PokemonCards.Types>
              <PokemonCards.Abilities>
                <PokemonCards.SubTitle>Ability</PokemonCards.SubTitle>
                <PokemonCards.Text>{Pokemon.abilities[0].ability.name.toUpperCase()}</PokemonCards.Text>
              </PokemonCards.Abilities>
            </PokemonCards.Item>
          ))}
        </PokemonCards>
      </PokemonCards.Body>
      <GlobalFooter />
    </>
  )
}

export default PokemonIndex
