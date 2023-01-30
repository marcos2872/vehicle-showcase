import React, { useState } from 'react'
import Header from '../../components/header'
import { Conflict, Container, DivForm, DivImage, FormRegister, ImagePresentation, InputValeu, Login, Main, Submit } from './register.style'
import presentation from '../../assets/carro-esporte.png'
import { validate } from 'email-validator'
import registerUser from '../../utils/axios/registerUser'
import { useNavigate } from 'react-router-dom'

const Register: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [conflict, setConflict] = useState('')
  const navigate = useNavigate()

  const heardleSubmit = async (): Promise<void> => {
    const register = await registerUser({ name, email, password })
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
              minLength={3}
              placeholder='Nome'
              required
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
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
              onChange={({ target }) => setPassword(target.value)}
            />
            <InputValeu
              type='password'
              minLength={6}
              placeholder='Confirme a senha'
              required
              style={{
                border: `2px solid ${password === password2 ? '#e9e9e9' : '#de5247'}`
              }}
              onChange={({ target }) => setPassword2(target.value)}
            />
            <Submit
              type='submit'
              disabled={!(password === password2 && name && validate(email) && password && conflict === '')}
            >
              Cadastrar
            </Submit>
            {conflict && <Conflict>{conflict}</Conflict> }
          </FormRegister>
          <Login to='/login'>
            Iniciar sessão com e-mail
          </Login>
        </DivForm>
      </Container>
    </Main>
  )
}

export default Register
