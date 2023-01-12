import * as C from './Styles'
import Logo from '../../assets/logo.svg'
import { MobileNav } from '../MobileNav/MobileNav'


export const Header = () => {
    return (
        <C.Header>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <C.Nav>
                <ul>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Events</a></li>
                    <li><a href='#'>Products</a></li>
                    <li><a href='#'>Support</a></li>
                </ul>
            </C.Nav>
            
            <MobileNav />
        </C.Header>
    )
}