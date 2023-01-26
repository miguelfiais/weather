import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 20px;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`