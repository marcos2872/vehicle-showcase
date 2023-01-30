import React, { useContext } from 'react'
import ICar from '../../interfaces/ICars'
import { Body, Data, Delete, Edit, EditContainer, Image, Main, Price, Text, Title } from './previewCar.style'
import Context from '../../context'
import deletCar from '../../utils/axios/deletCar'

const PreviewCar: React.FC<{ data: ICar }> = ({ data }) => {
  const url = data.images[data.images.length - 1].url
  const formatValue = (value: number): string => value.toLocaleString('pt-BR')
  const { edit, cars ,setCars } = useContext(Context)

  const heardleDelet = async (): Promise<void> => {
    const deleted = await deletCar(data.id)
    if (deleted === 200) {
      const filterCar = cars.filter(({ id }) => id !== data.id)
      setCars(filterCar)
    }
  }

  return (
    <Main>
      {edit && (
      <EditContainer>
        <Delete onClick={heardleDelet}/>
        <Edit />
      </EditContainer>
      )}
      <Body
        to={`vehicle-details/${data.id}`}>
        <Image src={url} alt='foto do carro' />
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
      </Body>
    </Main>
  )
}

export default PreviewCar
