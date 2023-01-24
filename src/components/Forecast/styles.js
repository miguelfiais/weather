import styled from "styled-components";

export const BoxForecast = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    li:first-child{
        display: none;
    }
`
export const ItemForecast = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: #1E213A;
    gap: 20px;
    div{
        display: flex;
        gap: 15px;
    }
`