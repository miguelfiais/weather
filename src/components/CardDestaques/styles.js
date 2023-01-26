import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background: #1E213A;
    padding: 10px;
`
export const Title = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #E7E7EB;
`
export const Info = styled.p`
    font-weight: 500;
    font-size: 19px;
    color: #E7E7EB;
    span{
        font-weight: 700;
        font-size: 36px;
        color: #E7E7EB;
        text-align: right;
    }
`