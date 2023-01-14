import * as C from './styles'
import Logo from '../../assets/logo.svg'
import Facebook from '../../assets/icon-facebook.svg'
import Twitter from '../../assets/icon-twitter.svg'
import Pinterest from '../../assets/icon-pinterest.svg'
import Instagram from '../../assets/icon-instagram.svg'

export const Footer = () => {
    return (
        <C.FooterContainer>
            <C.FooterMenu>
                <img src={Logo} alt="logo" />
                <C.Nav>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Carrers</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </C.Nav>
            </C.FooterMenu>
            <C.Links>
                <C.SocialMedia>
                    <img src={Facebook} alt="facebook" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Pinterest} alt="pinterest" />
                    <img src={Instagram} alt="instagram" />
                </C.SocialMedia>
                <C.Copyright>
                    <p>&copy; 2023 Loopstudios. All rights reserved</p>
                </C.Copyright>
            </C.Links>
        </C.FooterContainer>
    )
}