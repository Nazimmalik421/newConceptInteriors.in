import './navbar.scss';
import logo from '../img/logo.png'

const Navbar = () => {

    return (
        <div className='nav-section'>
            <nav className='navbar'>
                <a href="#home" className='navbar__company-logo logo'><img src={logo} className='logo' alt="Company logo" /></a>
                <a href="#home" className='navbar__company-name'>New Concept Interiors</a>
            </nav>
            <ul className='nav'>
                <li className='nav__item'><a href="#home" className='nav__link link-home'>Home</a></li>
                <li className='nav__item'><a href="#service-section" className='nav__link link-service'>Our services</a></li>
                <li className='nav__item'><a href="#work-section" className='nav__link link-work'>Our work</a></li>
                <li className='nav__item'><a href="#contact-section" className='nav__link link-contactus'>Contact us</a></li>
            </ul>

        </div>
    )
}

export default Navbar;
