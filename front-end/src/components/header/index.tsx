import React, { useEffect, useState } from 'react'
import { Div, Icon, Li, Logo, Main, Nav, NavLin, Ul } from './header.styled'
import logo from '../../assets/logo.png'

const Header: React.FC = () => {
  const [url, setUrl] = useState('')

  useEffect(() => {
    const pathname = window.location.pathname
    setUrl(pathname)
  }, [])
  return (
    <Main>
     <Div>
      <Logo src={logo}/>
      <Nav>
      <Ul>
        <Li>
          <NavLin to='/'style={{ color: `${url === '/' ? 'red' : 'back'}` }}>
          Comprar carro
          </NavLin>
        </Li>
        <Li>
          <NavLin to='/about' style={{ color: `${url === '/about' ? 'red' : 'back'}` }}>
          Sobre nós
          </NavLin>
        </Li>
        <Li>
          <NavLin to='/register' style={{ color: `${url === '/register' ? 'red' : 'back'}` }}>
            <Icon />
          Cadastre-se
          </NavLin>
        </Li>
      </Ul>
      </Nav>

     </Div>
    </Main>
  )
}

export default Header
