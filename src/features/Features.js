import starValue from '../img/svg/star-value.png'
import saving from '../img/svg/saving.png'
import guarantee from '../img/svg/guarantee.png'
import trust from '../img/svg/handshake.png'
import './features.scss';
const Features = () => {

    return (
        <section className='features'>
            <div className="feature">
                <div className="feature__icon">
                    <img src={starValue} className='icon' alt='value icon' />
                </div>
                <h4 className="heading-4 heading-4--dark">VALUE</h4>
                <p className="feature__text">
                    We treat our clients in a way that we would like to be treated.
                    We never hesitate to go extra-mile or dig deeper for the satifaction & happiness of our client.
                </p>
            </div>

            <div className="feature">
                <div className="feature__icon">
                    <img src={saving} className='icon' alt='saving icon' />
                </div>
                <h4 className="heading-4 heading-4--dark">SAVING</h4>
                <p className="feature__text">
                    Our In-house production & In-house diverse team members makes sure that, every step has been taken to keep the waste to minimal.
                    Which at last benefits out client.
                </p>
            </div>

            <div className="feature">
                <div className="feature__icon">
                    <img src={guarantee} className='icon' alt='guarantee icon' />
                </div>
                <h4 className="heading-4 heading-4--dark">QUALITY</h4>
                <p className="feature__text">
                    Even though, our rates are fairly lower than the others. We still guarantee you that our work speaks for itself and we don't compromise
                    when it comes to the quality.
                </p>
            </div>
            <div className="feature">
                <div className="feature__icon">
                    <img src={trust} className='icon' alt='trust icon' />
                </div>
                <h4 className="heading-4 heading-4--dark">TRUST</h4>
                <p className="feature__text">
                    In the end it is all about trust.
                    We gain our client's trust in no time and we are committed to fullfill their expections and maintain the relations for longer term.
                </p>
            </div>
        </section>
    )
}

export default Features;