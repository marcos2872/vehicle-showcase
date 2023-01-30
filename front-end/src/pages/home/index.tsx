import React, { useContext, useEffect, useState } from 'react'
import { PopoverComponent, LogOff, Main } from './home.styles'
import context from '../../context'
import getCars from '../../utils/axios/getCars'
import Header from '../../components/header'
import Footer from '../../components/footer'
import SearchBar from '../../components/searchBar'
import Catalog from '../../components/catalog'

const Home: React.FC = () => {
  const { setCars } = useContext(context)

  useEffect(() => {
    (async () => {
      const { data } = await getCars()
      setCars(data)
    })()
  }, [])

  return (
    <Main>
      <Header/>
      <SearchBar />
      <Catalog />
      <Footer />
    </Main>
  )
}

export default Home
