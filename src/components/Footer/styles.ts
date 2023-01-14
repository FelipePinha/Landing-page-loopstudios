import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${props => props.theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.2rem 10rem;
    /* width: 100; */

    @media (max-width: 830px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const FooterMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    img {
        width: 12rem;
    }

    @media (max-width: 830px) {
        text-align: center;
    }
`

export const Nav = styled.nav`
    ul {
        display: flex;
        gap: 2.5rem;
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

    @media (max-width: 830px) {
        ul {
            flex-direction: column;
            gap: 1.2rem;
        }
    }
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;

    

    @media (max-width: 830px) {
        align-items: center;
        text-align: center;

        .copyright p {
            font-size: 1rem;
        }
    }
`

export const SocialMedia = styled.div`
    display: flex;
    gap: 1.5rem;

    img {
        cursor: pointer;
        width: 2rem;
    }
`

export const Copyright = styled.div`
    p{
        color: ${props => props.theme.colors.darkGray};
    }

    @media (max-width: 830px) {
        p {
            font-size: 1rem;
        }
    }
`