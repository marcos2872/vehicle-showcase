import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { BiXCircle, BiPencil } from 'react-icons/bi'

export const Main = styled.div`
display: flex;
flex-direction: column;
min-width: 280px;
height: 270px;

box-shadow: 2px 2px 5px gray; 
border-radius: 5px;
margin-bottom: 2px;
align-items: center;
cursor: pointer;
`
export const Body = styled(NavLink)`
display: flex;
flex-direction: column;
min-width: 280px;
height: 270px;

box-shadow: 2px 2px 5px gray; 
border-radius: 5px;
margin-bottom: 2px;
align-items: center;
cursor: pointer;
`
export const Image = styled.img`
width: 280px;
height: 160px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`
export const Data = styled.div`
display: flex;
flex-direction: column;
width: 90%;
margin-top: 5px;
margin-bottom: 5px;
`
export const Title = styled.h1`
font-weight: 500;
font-size: large;
`
export const Text = styled.p`
font-weight: 500;
font-size: smaller;
color: #525252;
`
export const Price = styled.h1`
font-weight: 400;
font-size: x-large;
margin-top: 20px;
color: #3274da;
`
export const EditContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
min-width: 280px;
position: fixed;
padding: 10px;

`
export const Delete = styled(BiXCircle)`
width: 20px;
height: 20px;
border: 0 none;
outline: 0;
`
export const Edit = styled(BiPencil)`
width: 20px;
height: 20px;
border: 0 none;
outline: 0;
`
