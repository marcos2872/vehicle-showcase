import React, { useEffect, useState } from 'react'
import { Div, Icon, Li, Logo, Main, Nav, NavLin, Ul } from './header.styled'
import logo from '../../../public/chave-do-carro.png'
import { IUser } from '../../interfaces/IUser'

const Header: React.FC = () => {
  const [url, setUrl] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const pathname = window.location.pathname
    setUrl(pathname)

    const storage = localStorage.getItem('verzelUser')
    if (storage) {
      const user = JSON.parse(storage) as IUser
      setUserName(user.name)
    }
  }, [])
  return (
    <Main>
     <Div>
      <Logo src={logo}/>
      <Nav>
      <Ul>
        <Li>
          <NavLin to='/'style={{ color: `${url === '/' ? '#4b7bc3' : '#525252'}` }}>
          Comprar carro
          </NavLin>
        </Li>
        <Li>
          <NavLin to='/about' style={{ color: `${url === '/about' ? '#4b7bc3' : '#525252'}` }}>
          Sobre nós
          </NavLin>
        </Li>
        <Li>
          <NavLin to={userName ? '/user' : '/register'} style={{ color: `${url === '/register' ? '#4b7bc3' : '#525252'}` }}>
            <Icon />
            {userName || 'Cadastre-se'}
          </NavLin>
        </Li>
      </Ul>
      </Nav>

     </Div>
    </Main>
  )
}

export default Header
