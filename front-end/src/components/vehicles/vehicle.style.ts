import styled from 'styled-components'

export const Main = styled.main`
display: flex;
min-height: 100vh;
width: 90%;
justify-content: center;
margin-bottom: 20px;
`
export const Cars = styled.div`
display:flex;
grid-row: auto;
flex-direction: row;
flex-wrap: wrap;
align-self: start;
gap: 20px;
`
export const NotFound = styled.div`
display: flex;
flex-direction: column;
width: 80%;
padding: 50px;
align-items: center
`
export const ImageNot = styled.img`
width: 200px;
height: 200px;
`
export const Text = styled.h1`
font-size: xx-large;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-align: center;
`
export const Suggestion = styled.h1`
font-size: x-large;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-align: center;
color: #525252;
`
