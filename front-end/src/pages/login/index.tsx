import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validate } from 'email-validator'
import loginUser from '../../utils/axios/loginUser'
import Header from '../../components/header'
import { Conflict, Container, DivForm, DivImage, FormRegister, ImagePresentation, InputValeu, Main, Submit } from './login.style'
import presentation from '../../assets/carro-esporte.png'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conflict, setConflict] = useState('')
  const navigate = useNavigate()

  const heardleSubmit = async (): Promise<void> => {
    const register = await loginUser({ email, password })

    if (typeof register === 'string') {
      return setConflict(register)
    }
    localStorage.setItem('verzelUser', JSON.stringify(register))
    navigate('/')
  }
  return (
    <Main>
    <Header />
    <Container>
      <DivImage>
        <ImagePresentation src={presentation} />
      </DivImage>
      <DivForm>
        <FormRegister
        onSubmit={(event) => {
          event.preventDefault()
          heardleSubmit()
        }}
        >
          <InputValeu
            type='email'
            minLength={5}
            placeholder='E-mail'
            required
            value={email}
            style={{
              border: `2px solid ${email === '' || validate(email) ? '#e9e9e9' : '#de5247'}`
            }}
            onChange={({ target }) => {
              setEmail(target.value)
              if (conflict) setConflict('')
            }}
          />
          <InputValeu
            type='password'
            minLength={6}
            placeholder='Senha'
            required
            value={password}
            onChange={({ target }) => {
              setPassword(target.value)
              if (conflict) setConflict('')
            }}
          />
          <Submit
            type='submit'
            disabled={!(validate(email) && password.length >= 6 && conflict === '')}
          >
            Entrar
          </Submit>
          {conflict && <Conflict>{conflict}</Conflict> }
        </FormRegister>
      </DivForm>
    </Container>
  </Main>
  )
}

export default Login
