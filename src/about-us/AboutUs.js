import './aboutUs.scss';
import addressIcon from '../img/svg/location.png'
import contactIcon from '../img/svg/phoneringing.png'
import whatsappIcon from '../img/svg/whatsapp.png'
import emailIcon from '../img/svg/email.png'
import Form from './Form';

const AboutUs = () => {
    return (
        <>
            <div className='address__content' id='contact-section'>
                {/* <div className="content__icon__wrapper"> */}
                <div className="address__icon icon-wrapper">
                    <img src={addressIcon} alt="location icon" className='form-icon' />
                </div>
                <address className='address'>B-7, Kirti Nagar, Delhi - 110015, B Block,
                    Furniture Market, Near Nawab Furniture.
                </address>
                {/* </div> */}
                <div className="contact__icon icon-wrapper">
                    <img src={contactIcon} alt="mobile icon" className='form-icon' />
                </div>
                <div className="contact__number">
                    Sadiqeen Saifi
                    <br />
                    <em>+91-9811691409</em>
                    <br />
                    <em>+91-8368830831</em>

                </div>
                <div className="whatsapp__icon icon-wrapper">
                    <img src={whatsappIcon} alt="whatsapp icon" className='form-icon' />
                </div>
                <div className="whatsapp__number">
                    New concept interiors
                    <br />
                    <em>+91-9811691409</em>
                </div>
                <div className="email__icon icon-wrapper">
                    <img src={emailIcon} alt="whatsapp icon" className='form-icon' />
                </div>
                <div className="email__address">
                    Email:
                    {/* <br /> */}
                    <em>  info@newconceptinteriors.in</em>
                    <em>  Secondary:    saad.saifi28@gmail.com</em>
                </div>
                <div className='google-map'>
                    <iframe title='google map location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631.5573914050469!2d77.13479675084898!3d28.63861139240726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0317d7d46d1f%3A0x63ee2384a6d2b9d2!2sWHS%20Block%202%2C%20Block%20C%2C%20Ware%20Housing%20Scheme%2C%20Kirti%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110015!5e1!3m2!1sen!2sin!4v1625486528162!5m2!1sen!2sin"
                        className='google__frame' width="600px" height="450px" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>

            </div>
            <Form />
        </>
    )
}

export default AboutUs;