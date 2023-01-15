import styled from "styled-components";

export const Header = styled.header`
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6.5rem;

    @media (max-width: 500px) {
        padding: 1rem;
    }
`

export const Nav = styled.nav`
    ul {
        display: flex;
        column-gap: 2.5rem;
        font-size: 1.6rem;
    }

    ul li a {
        font-size: 1.8rem;
    }

    ul li a::after {
        content: '';
        width: 0;
        height: 2px;
        display: block; 
        margin: .5rem auto;
        background-color: ${props => props.theme.colors.white};
        transition: width .2s ease;
    }
 
    ul li a:hover::after {
        width: 100%;
    }

    @media (max-width: 768px) {
        display: none;
    }
`