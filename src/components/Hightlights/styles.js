import styled from "styled-components";

export const Container = styled.div`
    h2{
        margin: 40px 0;
        font-weight: 700;
        font-size: 24px;
        color: #E7E7EB;
    }
`
export const BoxDestaques = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 300px);
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media (max-width: 700px) {
        grid-template-columns: repeat(2, 250px);
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 200px);
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`