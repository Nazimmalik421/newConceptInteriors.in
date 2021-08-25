import './services.scss'
import FurnitureService from './Furniture'
import KitchenService from './Kitchen'
import CorianService from './Corian'

const Services = () => {

    return (
        <section className='service' id='service-section'>
            <h1 className='service__heading-1'>Our <span>Services</span></h1>
            <h4 className='service__excellence'>We are an Interior Designing firm. Who believes in excellence, quality and honesty,
                yes we design beautiful home interiors!</h4>
            <div className='service__furn-img-wrap'>
                {/* <img src={furnPicture} alt="furniture cover picture" className='service__furniture' /> */}
            </div>
            <div className='service__kitch-img-wrap'>
                {/* <img src={kitchenPicture} alt="kitchen cover picture" className='service__kitchen' /> */}
            </div>
            <div className='service__corian-img-wrap'>
                {/* <img src={corianPicture} alt="corian cover picture" className='service__corian' /> */}
            </div>

            <FurnitureService />
            <KitchenService />
            <CorianService />
        </section>
    )

}

export default Services;