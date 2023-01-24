import styled from "styled-components";

export const Container = styled.div`
    h2{
        text-align: center;
        margin: 40px 0;
    }
`
export const BoxDestaques = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 300px);
    align-items: center;
    justify-content: center;
    gap: 20px;
`