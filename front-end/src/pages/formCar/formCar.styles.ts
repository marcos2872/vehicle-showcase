import styled from 'styled-components'

export const Main = styled.div`
display: flex;
max-width: 100%;
min-height: 100vh;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50%;
height: 100vh;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
gap: 20px;
`

export const Title = styled.h1`
font-weight: 500;
font-size: large;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
position: absolute;
top: 20px;
`
export const InputValeu = styled.input`
color: #7b7f85;
width: 80%;
height: 40px;
outline: 0;
border: 2px solid #e9e9e9;
border-radius: 6px;
padding-left: 5px;
`
export const Enviar = styled.button`
width: 30%;
max-width: 200px;
border-radius: 6px;
background-color: ${(props) => props.disabled ? '#e9e9e9' : '#3274da'};;
color: ${(props) => props.disabled ? '#878e96' : '#ffffff'};
`
export const Label = styled.label`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 90%;
font-weight: 500;
font-size: large;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
color: #7b7f85;
`
export const Body = styled.div`
display: flex;
flex-direction: column;
min-width: 390px;
height: 470px;
gap: 10px;
box-shadow: 2px 2px 5px gray; 
border-radius: 5px;
margin-bottom: 2px;
align-items: center;
cursor: pointer;
`
export const Image = styled.img`
width: 390px;
min-height: 260px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`
export const ExchangeContainer = styled.div`
display: flex;
align-items: center;
width: 390px;
height: 20px;
justify-content: space-around;
`

export const Data = styled.div`
display: flex;
flex-direction: column;
width: 90%;
margin-top: 5px;
margin-bottom: 5px;
`
export const TitlePreview = styled.h1`
font-weight: 500;
font-size: 1.5rem;
`
export const Text = styled.p`
font-weight: 500;
font-size: 1rem;
color: #525252;
margin-top: 5px;
`
export const Price = styled.h1`
font-weight: 400;
font-size: x-large;
margin-top: 40px;
color: #3274da;
`
