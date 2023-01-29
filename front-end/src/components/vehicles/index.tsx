import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context'
import ICar from '../../interfaces/ICars'
import PreviewCar from '../previewCar'
import { Cars, ImageNot, Main, NotFound, Suggestion, Text } from './vehicle.style'
import notCar from '../../assets/carro-esporte.png'

const Vehicles: React.FC = () => {
  const [carsArr, setCarssArr] = useState<ICar[] | []>([])
  const { cars } = useContext(Context)

  useEffect(() => {
    setCarssArr(cars)
  }, [cars])

  return (
    <Main>
      {carsArr.length
        ? (
      <Cars>
      { carsArr.map((curr, index) => (
        <PreviewCar
        key={index}
        data={curr}
        />
      ))
        }
      </Cars>
          )
        : null
      }
      {!carsArr.length && (
        <NotFound>
          <ImageNot src={notCar} alt='imagem de carros não encontrados'/>
          <Text>
          Não encontramos o que você estava buscando
          </Text>
          <Suggestion>
          Existem inúmeras possibilidades no nosso catálogo. Altere as busca e encontre outras opções.
          </Suggestion>
        </NotFound>
      )}
    </Main>
  )
}

export default Vehicles
