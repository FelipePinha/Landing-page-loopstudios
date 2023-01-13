import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    min-width: 33rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 3.2rem;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
    }

    @media (max-width: 700px) {
        h1 {
            margin: auto;
        }
    }
`

export const Button = styled.button`
    font-family: 'Josefin Sans', sans-serif;
    width: 12rem;
    padding: 1rem;
    font-weight: 700;
    border: 1px solid ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.white};
    }

    @media (max-width: 700px) {
        display: none;
    }
`