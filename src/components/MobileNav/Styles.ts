import styled from "styled-components";
import { MobileMenuProps } from "../../types/styled";

export const Burger = styled.div`
    display: none;
    cursor: pointer;

    img {
        width: 3rem;
        height: 2.5rem;
    }

    @media (max-width: 768px) {
        display: block;
    }
`

export const MenuContainer = styled.div<MobileMenuProps>`
    position: fixed;
    right: ${props => props.menuIsOpen ? '0' : '-100%'};
    top: 0;
    height: 100vh;
    width: 100%;
    border: 2px solid black;
    background-color: ${props => props.theme.colors.black};

    transition: right .3s ease-in-out;
`

export const MenuHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .close {
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
    }

    .logo {
        width: 15rem;
    }
`

export const mobileMenuNav = styled.nav`
    margin-top: 8rem;
    padding: 0 1.5rem;

    ul {
        display: flex;
        flex-direction: column;
        gap: 2.2rem;
    }

    ul li a {
        font-family: 'Josefin Sans';
        font-size: 2.5rem;
        color: ${props => props.theme.colors.darkGray};
        text-transform: uppercase;
    }
`