import styled from "styled-components";
import ImageHero from '../../assets/desktop/image-hero.jpg'

export const Section = styled.section`
    min-width: 100%;
    height: 100vh;

    background-image: url(${ImageHero});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`

export const MsgContainer = styled.div`
    width: 100%;
    height: 39rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 5.5rem;

    
    @media (max-width: 500px) {
        justify-content: center;
        padding: 3.2rem;
    }
`

export const Msg = styled.div`
    width: 40rem;
    height: 18rem;
    padding: 1.5rem;
    border: 2px solid ${props => props.theme.colors.white};


    h1 {
        display: flex;
        flex-direction: column;
        font-size: 3.5rem;
        color: ${props => props.theme.colors.white};
        font-weight: 400;
    }

`