import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { VscAccount } from '@react-icons/all-files/vsc/VscAccount'

export const Main = styled.main`
display: flex;
flex-direction: row;
height: 70px;
width: 100%;
align-items: center;
justify-content: center;
`
export const Div = styled.div`
display: flex;
width: 85%;
height: 60px;
border-color: 1px solid red;
align-items: center;
justify-content: space-between;
`
export const Logo = styled.img`
width: 80px;
height: 60px;
`
export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-around;
`
export const Ul = styled.ul`
display: flex;
flex-direction: row;
gap: 50px;
`
export const Li = styled.li`
`
export const NavLin = styled(NavLink)`
display: flex;
flex-direction: row;
align-items: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
gap: 5px;
`
export const Icon = styled(VscAccount)`
width: 20px;
height: 20px;
`
