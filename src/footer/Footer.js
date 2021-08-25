import './footer.scss'

const Footer = () => {

    return (
        <footer className='footer'>
            {/* <ul class="nav">
                <li class="nav__item"><a href="#" class="nav__link">Find your dream home</a></li>
                <li class="nav__item"><a href="#" class="nav__link">Request propsal</a></li>
                <li class="nav__item"><a href="#" class="nav__link">Download home planner</a></li>
                <li class="nav__item"><a href="#" class="nav__link">Contact us</a></li>
                <li class="nav__item"><a href="#" class="nav__link">Submit your property</a></li>
                <li class="nav__item"><a href="#" class="nav__link">Come work with us</a></li>
            </ul> */}
            <p className="copyright">
                {/* Built with ♥ by Mohd Nazim */}
                &copy; Copyright 2021 by New Concept Interiors
            </p>
            <p className="intro">
                Designed and Built with ♥ by: <a href="https://twitter.com/Nazim__Malik" rel="noopener noreferrer" target='_blank' className='profile__link'>Nazim Malik</a>
            </p>
        </footer>
    )
}

export default Footer;