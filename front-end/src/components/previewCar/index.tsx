import React from 'react'
import ICar from '../../interfaces/ICars'
import { Data, Image, Main, Price, Text, Title } from './previewCar.style'

const PreviewCar: React.FC<{data: ICar}> = ({ data }) => {
  const url = data.images[data.images.length - 1].url
  const formatValue = (value: number): string => value.toLocaleString('pt-BR')
  return (
    <Main>
      <Image src={ url } alt='foto do carro' />
      <Data>
      <Title>
        {`${data.brand} ${data.model}`}
      </Title>
      <Text>
        {`${data.year} / ${formatValue(data.mileage)} KM`}
      </Text>
      <Price>
        {`R$ ${formatValue(data.price)}`}
      </Price>
      </Data>
    </Main>
  )
}

export default PreviewCar
