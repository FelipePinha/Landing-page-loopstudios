import styled from "styled-components";

export const Section = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 5rem;
    align-items: center;
    gap: 5rem;
    margin: auto;
`

export const MobileButton = styled.button`
    font-family: 'Josefin Sans', sans-serif;
    width: 12rem;
    padding: 1rem;
    font-weight: 700;
    border: 1px solid ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};
    transition: all .3s ease-in-out;
    display: none;

    @media (max-width: 700px) {
        display: block;
    }
`