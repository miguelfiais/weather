import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    >div:first-child{
        padding: 20px;
    }
    h1{
        color: #E7E7EB;
        text-align: center;
    }
    svg{
        width: 200px;
        height: auto;
        color: #fff;
        display: ${props => props.city ? "none" : "block"};
        margin: 0 auto;
    }
    @media (max-width: 500px) {
        h1{
            font-size: 1.5em;
        }
    }
`
export const Form = styled.div`
    max-width: 400px;
    width: 100%;
    display: flex;
    gap: 10px;
    margin: 20px auto;
    input{
        width: 75%;
        padding-left: 10px;
        border: 1px solid #E7E7EB;
        background-color: transparent;
        font-weight: 500;
        font-size: 16px;
        color: #616475;
        
    }
    button{
        width: 25%;
        background-color: #3C47E9;
        font-weight: 600;
        font-size: 16px;
        color: #E7E7EB;
    }
    input, button{
        height: 40px;
        border-radius: 8px; 
    }
`