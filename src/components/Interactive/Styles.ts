import styled from "styled-components";

export const InteractiveSection = styled.section`
    display: flex;
    padding: 5rem;
    justify-content: center;
`

export const Container = styled.div`
    width: 80%;
    position: relative;
    padding: 3rem;
    
    @media (max-width: 980px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`

export const ImgContainer = styled.div`
    width: 60rem;

    img {
        width: 100%;
    }

     @media (max-width: 980px) {
        width: 30rem;
     }
`

export const Info = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    width: 50rem;
    padding: 2rem;
    background-color: ${props => props.theme.colors.white};

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    position: absolute;
    left: 45rem;
    bottom: 0;

    h2 {
        font-size: 3rem;
        font-weight: 500;
        
    }
    p {
        color: ${props => props.theme.colors.darkGray};
        font-size: 1.6rem;
        font-weight: 600;
    }

    @media (max-width: 980px) {
        position: static;
        text-align: center; 
        height: 20rem;
        width: 35rem;
    }

`