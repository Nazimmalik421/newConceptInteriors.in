import './form.scss'
import { useState } from 'react';

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    const nameInputHandler = (e) => {
        setName(e.target.value)
        // console.log(e.target.value)
    }

    const emailInputHandler = (e) => {
        setEmail(e.target.value)
        // console.log(e.target.value)
    }

    const contactInputHandler = (e) => {
        setContact(e.target.value)
        // console.log(e.target.value)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        if (name.trim().length !== '' && email.trim().length !== '') {
        }
        setName('')
        setEmail('')
        setContact('')


        setFormSubmitted(true)
        setTimeout(() => {
            setFormSubmitted(false);
        }, 5000);
    }


    return (
        <div className='form__area'>
            <div className="form__container">
                <form action="https://formsubmit.co/saad.saifi28@gmail.com" method='POST' onSubmit={formSubmitHandler} className='form'>
                    <h1 className='form__heading'>Let's Connect</h1>
                    <div className='input__name-wrapper'>
                        <input placeholder='Name' onChange={nameInputHandler} value={name} required type="text" name="name" id="" className='input__name input-fields' />
                    </div>
                    <div className='input__email-wrapper'>
                        <input placeholder='Email' required onChange={emailInputHandler} value={email} type="email" name="email" id="" className='input__email input-fields' />
                    </div>
                    <div className='input__contact-wrapper'>
                        <input placeholder='Contact Number(optional)' onChange={contactInputHandler} value={contact} type="number" name="contact" id="" className='input__mobile input-fields' />
                    </div>
                    <button className='btn form__submit'>Submit</button>
                </form>


                {formSubmitted && <div className='card form__submission'>
                    <p>Thank you! We will be in touch soon!</p>
                </div>}

            </div>
        </div >
    )
}

export default Form;
