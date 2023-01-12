import { useState } from "react"
import BurgerIcon from '../../assets/icon-hamburger.svg'
import CloseMenu from '../../assets/icon-close.svg'
import Logo from '../../assets/logo.svg'
import * as C from './Styles'

export const MobileNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <>
            <C.Burger>
                <img 
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                    src={BurgerIcon} 
                    alt="hamburger menu" 
                />
            </C.Burger>
            <C.MenuContainer menuIsOpen={menuIsOpen}>
                <C.MenuHeader>
                    <img 
                        src={Logo} 
                        className="logo" 
                        alt="Logo" 
                    />
                    <img
                        onClick={() => setMenuIsOpen(!menuIsOpen)}
                        src={CloseMenu}
                        className="close"
                        alt="fechar menu" />
                </C.MenuHeader>
                <C.mobileMenuNav>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </C.mobileMenuNav>
            </C.MenuContainer>
        </>
    )
}