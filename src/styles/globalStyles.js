import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        outline: none;
    }
    body{
        overflow: hidden;
    }
    button{
        border: none;
    }
    button:hover{
        opacity: 0.8;
    }
    button:active{
        opacity: 0.6;
    }
`
export default Global