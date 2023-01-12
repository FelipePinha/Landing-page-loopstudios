import styled from "styled-components";

export const InteractiveSection = styled.section`
    display: flex;
    padding: 5rem;
    justify-content: center;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 3.5rem;
    
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export const ImgContainer = styled.div`
    width: 70rem;

    img {
        width: 100%;
    }

     @media (max-width: 1000px) {
        width: 30rem;
     }
`

export const Info = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    width: 45rem;
    padding: 2rem;
    background-color: ${props => props.theme.colors.white};

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    position: absolute;
    left: 35rem;
    bottom: 0;

    h2 {
        font-size: 3rem;
        
    }
    p {
        color: ${props => props.theme.colors.darkGray};
        font-size: 1.6rem;
        font-weight: 600;
    }

    @media (max-width: 1000px) {
        position: static;
        text-align: center; 
        height: 20rem;
        width: 35rem;
    }

`