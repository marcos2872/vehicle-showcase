import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context'
import Vehicles from '../vehicles'
import { Category, Head, Main, Results } from './catalog.style'

const Catalog: React.FC = () => {
  const [result, setResult] = useState(0)
  const { cars } = useContext(Context)

  useEffect(() => {
    setResult(cars.length)
  }, [cars])

  return (
    <Main>
      <Head>
      <Category>
      CARROS USADOS
      </Category>
      <Results>
        {`${result} Resultados`}
      </Results>
      </Head>
     <Vehicles />
    </Main>
  )
}

export default Catalog
