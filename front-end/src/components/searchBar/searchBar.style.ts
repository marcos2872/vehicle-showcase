import styled from 'styled-components'
import { IoSearchOutline } from '@react-icons/all-files/io5/IoSearchOutline'

export const Main = styled.main`
display: flex;
flex-direction: row;
height: 65px;
width: 100%;
align-items: center;
justify-content: center;
background-color: #3274da;
border-radius: 3px;
/* position: absolute; */
/* top: 70px; */
`
export const InputComtainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #ffffff;
width: 80%;
height: 40px;
border-radius: 3px;
`
export const Input = styled.input`
color: #7b7f85;
width: 90%;

border: 0 none;
outline: 0;
`
export const IconsSearch = styled(IoSearchOutline)`
width: 30px;
height: 30px;
background-color: #ffffff;
color: #7b7f85;
`
