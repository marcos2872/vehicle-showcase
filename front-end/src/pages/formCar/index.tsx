import React, { useEffect, useState } from 'react'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import ICar from '../../interfaces/ICars'
import getCarId from '../../utils/axios/getCarById'
import postCar from '../../utils/axios/postCar'
import putCar from '../../utils/axios/putCar'
import { Body, Container, Data, Enviar, ExchangeContainer, Form, Image, InputValeu, Label, Main, Price, Text, Title, TitlePreview } from './formCar.styles'

const FormCar: React.FC = () => {
  const [model, setModel] = useState('')
  const [brand, setBrand] = useState('')
  const [year, setYear] = useState<number>()
  const [mileage, setMileage] = useState<number>()
  const [price, setPrice] = useState<number>()
  const [images, setImages] = useState<any[] | Array<{ url: string }>>([])
  const [imageIndex, setImageIndex] = useState(0)
  const url = useParams() as { id: string }
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      if (url.id !== 'add') {
        const carID = await getCarId(url.id) as ICar
        if (typeof carID !== 'object') return window.alert(carID)
        setBrand(carID.brand)
        setModel(carID.model)
        setMileage(carID.mileage)
        setPrice(carID.price)
        setYear(carID.year)
        setImages(carID.images)
      }
    })()
  }, [])

  const storage = JSON.parse(localStorage.getItem('verzelUser') ?? 'null')
  const heandleSubmit = async (): Promise<void> => {
    const form = new FormData()
    form.append('body', JSON.stringify({ model, brand, year, mileage, price }))
    images.forEach((curr: any) => {
      form.append('images', curr)
    })

    const post = await postCar(form, storage.token)

    if (post === 'registered successfully') {
      window.alert('Cadastrado com sucesso')
      return navigate('/')
    }
    window.alert(post)
  }

  const heandleSubmitUpdate = async (): Promise<void> => {
    const data = { brand, model, mileage, year, price }
    const post = await putCar(url.id, data, storage.token)

    if (post === 'Updated') {
      window.alert('Atualizado com sucesso')
      return navigate('/')
    }
    window.alert(post)
  }

  useEffect(() => {
    if (images.length > 1) {
      setImageIndex(images.length - 1)
    }
  }, [images])
  return (
    <Main>
      <Container>
        <Title>Preview</Title>
        <Body>
          {images.length > 0 && url.id !== 'add' && (
            <Image src={images[imageIndex].url ?? ''} />
          )
          }
          {url.id === 'add' && (
            <Image src={images.length ? URL.createObjectURL(images[imageIndex]) : ''} />
          )}

          <ExchangeContainer>

            <BiArrowToLeft size={25} onClick={() => {
              if (images.length - 1 === imageIndex) return setImageIndex(0)
              setImageIndex((prev) => prev + 1)
            }} />
            <Text>{`--- Total ${images.length} ---`}</Text>
            <BiArrowToRight size={25} onClick={() => {
              if (imageIndex === 0) return setImageIndex(images.length - 1)
              setImageIndex((prev) => prev - 1)
            }} />

          </ExchangeContainer>
          <Data>
            <TitlePreview>
              {`${brand || 'Marca'} ${model || 'Modelo'}`}
            </TitlePreview>
            <Text>
              {`Ano ${year ?? ''}/ ${mileage?.toLocaleString('pt-BR') ?? ''} KM`}
            </Text>
            <Price>
              {`R$ ${price?.toLocaleString('pt-BR') ?? ''}`}
            </Price>
          </Data>
        </Body>
      </Container>
      <Container>
        <Title>Form</Title>
        <Form onSubmit={(e) => {
          e.preventDefault()
          if (url.id !== 'add') {
            return heandleSubmitUpdate()
          }
          heandleSubmit()
        }}
          encType='multipart/form-data'
        >
          <Label>
            Marca
            <InputValeu
              placeholder='Marca'
              required
              type='text'
              defaultValue={brand}
              onChange={({ target }) => setBrand(target.value)}
            />
          </Label>
          <Label>
            Modelo
            <InputValeu
              placeholder='Modelo'
              required
              type='text'
              defaultValue={model}
              onChange={({ target }) => setModel(target.value)}
            />
          </Label>
          <Label>
            Ano
            <InputValeu
              placeholder='Ano'
              required
              type='number'
              defaultValue={year}
              onChange={({ target }) => setYear(Number(target.value))}
            />
          </Label>
          <Label>
            KM
            <InputValeu
              placeholder='Quilomatragem'
              required
              type='number'
              defaultValue={mileage}
              onChange={({ target }) => setMileage(Number(target.value))}
            />
          </Label>
          <Label>
            Preço
            <InputValeu
              placeholder='Preço'
              required
              type='number'
              defaultValue={price}
              onChange={({ target }) => setPrice(Number(target.value))}
            />
          </Label>
          {url.id === 'add' && (
            <Label>
              Fotos
              <InputValeu
                required={url.id === 'add'}
                type='file'
                accept="image/png, image/jpeg"
                onChange={({ target }) => {
                  if (!target.files[0]) return
                  setImages((prev: any) => [...prev, (target.files ?? [])[0]])
                }}
              />
            </Label>

          )}
          <Enviar
            type='submit'
            disabled={false}
          >Enviar</Enviar>
        </Form>
      </Container>
    </Main>
  )
}

export default FormCar
