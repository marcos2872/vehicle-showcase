import React, { useContext, useEffect } from 'react'
import { Main } from './home.styles'
import context from '../../context'
import getCars from '../../utils/axios/getCars'
import Header from '../../components/header'

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
      <Header />
    </Main>
  )
}

export default Home
