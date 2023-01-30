import React, { useContext, useEffect, useState } from 'react'
import { Div, Icon, Li, Logo, ButtonComun, Main, Menu, MenuButon, MenuPanel, Nav, NavLin, Ul } from './header.styled'
import logo from '../../../public/chave-do-carro.png'
import { IUser } from '../../interfaces/IUser'
import { BiRun, BiPlusCircle, BiPencil } from 'react-icons/bi'
import Context from '../../context'

const Header: React.FC = () => {
  const [url, setUrl] = useState('')
  const [user, setUser] = useState<IUser>()
  const { edit, setEdit } = useContext(Context)

  useEffect(() => {
    const pathname = window.location.pathname
    setUrl(pathname)

    const storage = localStorage.getItem('verzelUser')
    if (storage) {
      const user = JSON.parse(storage) as IUser
      setUser(user)
    }
  }, [])
  return (
    <Main>
      <Div>
        <Logo src={logo} />
        <Nav>
          <Ul>
            <Li>
              <NavLin to='/' style={{ color: `${url === '/' ? '#4b7bc3' : '#525252'}` }}>
                Comprar carro
              </NavLin>
            </Li>
            <Li>
              <NavLin to='/about' style={{ color: `${url === '/about' ? '#4b7bc3' : '#525252'}` }}>
                Sobre nós
              </NavLin>
            </Li>
            <Li>
              {!user?.token
                ? (
                  <NavLin
                    to="/register"
                    style={{ color: `${url === '/register' ? '#4b7bc3' : '#525252'}` }}
                  >
                    <Icon />
                    Cadastre-se
                  </NavLin>
                  )
                : (
                  <Menu>
                    <MenuButon>
                      <Icon />
                      {user?.name}
                    </MenuButon>
                    <MenuPanel>
                      <ButtonComun
                      onClick={() => {
                        localStorage.removeItem('verzelUser')
                        setUser(undefined)
                      }}
                      >
                        <BiRun />
                        Sair
                      </ButtonComun>
                      {user.role === 'admin' && (
                        <>
                          <ButtonComun>
                            <BiPlusCircle />
                            Adicionar Carro
                          </ButtonComun>
                          <ButtonComun
                          onClick={() => {
                            setEdit((prev: boolean) => !prev)
                          }}
                          >
                            <BiPencil />
                            {edit ? 'Parar de Editar' : 'Editar'}
                          </ButtonComun>
                        </>
                      )}
                    </MenuPanel>
                  </Menu>
                  )}
            </Li>
          </Ul>
        </Nav>

      </Div>
    </Main>
  )
}

export default Header
