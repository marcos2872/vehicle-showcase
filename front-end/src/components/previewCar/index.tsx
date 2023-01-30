import React, { useContext } from 'react'
import ICar from '../../interfaces/ICars'
import { Body, Data, Delete, Edit, EditContainer, Image, Main, Price, Text, Title } from './previewCar.style'
import Context from '../../context'
import deletCar from '../../utils/axios/deletCar'
import { IUser } from '../../interfaces/IUser'
import { useNavigate } from 'react-router-dom'

const PreviewCar: React.FC<{ data: ICar }> = ({ data }) => {
  const url = data.images[data.images.length - 1].url
  const formatValue = (value: number): string => value.toLocaleString('pt-BR')
  const { edit, cars ,setCars } = useContext(Context)
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('verzelUser') ?? '[]') as IUser

  const heardleDelet = async (): Promise<void> => {
    const deleted = await deletCar(data.id, user?.token)

    if (deleted === 'Deleted') {
      const filterCar = cars.filter(({ id }) => id !== data.id)
      setCars(filterCar)
    }
    window.alert(deleted)
  }

  return (
    <Main>
      {edit && (
      <EditContainer>
        <Delete onClick={heardleDelet}/>
        <Edit onClick={() => navigate(`/car-edit/${data.id}`)}/>
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
