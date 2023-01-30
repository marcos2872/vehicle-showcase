import styled from 'styled-components'

export const Main = styled.main`
display: flex;
flex-direction: column;
max-width: 100%;
min-height: 100vh;
`
export const Container = styled.div`
display: flex;
margin-top: 10%;
`

export const DivImage = styled.div`
display: flex;
width: 40%;
align-items: center;
justify-content: center;
`
export const ImagePresentation = styled.img`
width: 300px;
height: 300px;
`
export const DivForm = styled.div`
display: flex;
flex-direction: column;
width: 60%;
align-items: center;
justify-content: center;
gap: 20px;
`
export const FormRegister = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 300px;
max-width: 900px;
gap: 20px;
`
export const InputValeu = styled.input`
color: #7b7f85;
width: 70%;
height: 40px;
outline: 0;
border: 2px solid #e9e9e9;
border-radius: 6px;
`
export const Submit = styled.button`
background-color: ${(props) => props.disabled ? '#e9e9e9' : '#3274da'};;
color: ${(props) => props.disabled ? '#878e96' : '#ffffff'};
width: 50%;
height: 40px;
border-radius: 6px;
`
export const Conflict = styled.p`
color: #de5247;
font-size: medium;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-weight: 500;
position: absolute;
margin-bottom: -210px;
`
