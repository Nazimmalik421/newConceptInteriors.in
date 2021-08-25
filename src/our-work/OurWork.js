import './ourwork.scss'

const galleryImages = [
    { image: require('./../img/gallery/gal-1.jpeg').default, description: 'gallery 1', id: 'G1' },
    { image: require('./../img/gallery/gal-2.jpeg').default, description: 'gallery 2', id: 'G2' },
    { image: require('./../img/gallery/gal-3.jpeg').default, description: 'gallery 3', id: 'G3' },
    { image: require('./../img/gallery/gal-4.jpeg').default, description: 'gallery 4', id: 'G4' },
    { image: require('./../img/gallery/gal-5.jpeg').default, description: 'gallery 5', id: 'G5' },
    { image: require('./../img/gallery/gal-6.jpeg').default, description: 'gallery 6', id: 'G6' },
    { image: require('./../img/gallery/gal-7.jpeg').default, description: 'gallery 7', id: 'G7' },
    { image: require('./../img/gallery/gal-8.jpeg').default, description: 'gallery 8', id: 'G8' },
    { image: require('./../img/gallery/gal-9.jpeg').default, description: 'gallery 9', id: 'G9' },
    { image: require('./../img/gallery/gal-10.jpeg').default, description: 'gallery 10', id: 'G10' },
    { image: require('./../img/gallery/gal-11.jpeg').default, description: 'gallery 11', id: 'G11' },
    { image: require('./../img/gallery/gal-12.jpeg').default, description: 'gallery 12', id: 'G12' },
    { image: require('./../img/gallery/gal-13.jpeg').default, description: 'gallery 13', id: 'G13' },
    { image: require('./../img/gallery/gal-14.jpeg').default, description: 'gallery 14', id: 'G14' },
]

const OurWork = () => {
    return (
        <section className='ourwork gallery' id='work-section'>
            <h1 className='ourwork__heading-1'>Our <span>Work</span></h1>
            <h1 className='ourwork__project-heading'><span>more than </span>200 projects <span>and counting... </span> </h1>
            {galleryImages.map((image, index) => <figure className={`gallery__item gallery__item--${index + 1}`} key={image.id}>
                <img src={image.image} alt={image.description} className='gallery__img' />
            </figure>)}
        </section>
    )
}

export default OurWork;