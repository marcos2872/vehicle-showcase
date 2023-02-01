import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { VscAccount } from '@react-icons/all-files/vsc/VscAccount'
import { Popover } from '@headlessui/react'

const { Button, Panel } = Popover

export const Main = styled.main`
display: flex;
flex-direction: row;
height: 70px;
width: 100%;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
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
width: 70px;
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
export const Menu = styled(Popover)`
`
export const MenuButon = styled(Button)`
display: flex;
flex-direction: row;
align-items: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
gap: 5px;
border: 0 none;
outline: 0;
color: #525252;
`
export const MenuPanel = styled(Panel)`
display: flex;
flex-direction: column;
background-color: #ffff;
opacity: 0.9;
box-shadow: 2px 2px 5px gray;
border-radius: 10px;
width: 200px;
height: 400px;
position: absolute;
top: 60px;
right: 10px;
padding-left: 10px;
padding-top: 10px;
gap: 20px;
`
export const ButtonComun = styled.button`
display: flex;
align-items: center;
gap: 10px;
border: 0 none;
outline: 0;
`
