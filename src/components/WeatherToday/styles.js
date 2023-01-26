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
    >p{
        font-weight: 700;
    }
    >div{
        width: 100%;
        display: flex;
        gap: 25px;
        align-items: center;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            p{
                font-weight: 600;
            }
            img{
                width: 100px;
            }
        }
    }
    @media (max-width: 500px) {
        padding: 10px;
    }
   
`
export const Temp = styled.p`
    font-weight: 300;
    font-size: 100px;
    line-height: 169px;
    color: #E7E7EB;
    span{
        font-size: 36px;
    }
    @media (max-width: 500px) {
        font-size: 70px;
        span{
            font-size: 24px;
        }
    }
    @media (max-width: 300px) {
        font-size: 60px;
        span{
            font-size: 24px;
        }
    }
`