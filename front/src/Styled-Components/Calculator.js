import styled from "styled-components"


export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    height: 80vh;
    background-color:#F4EBD0;
    

`
export const Calculadora =styled.div`

    padding-top:40px;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    border-radius:9px;
    
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    width: 350px;
    height: auto;
    background-color: #D6AD60;

`

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
    font-family: ${(props)=> props.theme.fontFamily? props.theme.fontFamily:"arial" };


`

export const HR = styled.hr`
    margin: 20px;
    border: 0;
    height: 3px;
    background-image: linear-gradient(to right, transparent, black, transparent);  
    width: 100%;

`

export const Botao = styled.button`
    /* text-align:center; */

    display: flex;
    justify-content:center;
    align-items:center;

    height: auto;
    width: 21%;
    
    border: 3px solid black;
    border-radius: 9px; 

    font-size: 3rem;
    font-family: ${(props)=> props.theme.fontFamily? props.theme.fontFamily: "arial" };
    background-color: ${(props)=> props.bgcolor? props.bgcolor: "#B68D40"};
`

export const H1 = styled.h1`
    margin-top: 70px;
    font-family: ${(props)=> props.theme.fontFamily? props.theme.fontFamily: "Courier New" };

`

export const H2= styled.h2`
    font-family: ${(props)=> props.theme.fontFamily? props.theme.fontFamily: "arial" };

`

export const H3= styled.h3`
    font-family: ${(props)=> props.theme.fontFamily? props.theme.fontFamily: "arial" };

`


export const Theme = {
    "fontFamily": 'Graphik,-apple-system,system-ui,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif',

}
