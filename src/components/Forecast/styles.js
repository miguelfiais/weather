import styled from "styled-components";

export const BoxForecast = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
        gap: 20px;
        p:last-child{
            color: #A09FB1;
        }
    }
`
export const Text = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #E7E7EB;
`