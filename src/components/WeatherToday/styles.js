import styled from "styled-components";

export const Container = styled.div`
    background: #1E213A;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    div{
        display: flex;
        align-items: center;
        gap: 25px;
        img{
            width: 100px;
        }
    }
    h2{
        margin-top: -50px;
    }
`
export const Temp = styled.p`
    font-weight: 500;
    font-size: 100px;
    line-height: 169px;
    color: #E7E7EB;
    span{
        font-size: 36px;
    }
`