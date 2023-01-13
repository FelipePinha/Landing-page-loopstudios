import styled from "styled-components";

export const imagesContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 186px);
    align-content: center;
    gap: 7.5rem;
`

export const Image = styled.div`
    width: 19.99rem;
    position: relative;
    cursor: pointer;  

    img {
        width: 20rem;
    }
`

export const overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all .3s ease;

    p {
        position: absolute;
        bottom: 2rem;
        left: 25%;
        color: ${props => props.theme.colors.white};
        font-size: 2.5rem;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 500;
    }

    &:hover {
        background: rgba(255, 255, 255, .6);

        p {
            color: ${props => props.theme.colors.black};
        }
    }
`