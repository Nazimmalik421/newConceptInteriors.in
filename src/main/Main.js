import './main.scss'
import Images from '../imagesData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useState } from 'react';

// const nextSlide = () => {setCurImage(curImage === length - 1 ? 0 : curImage + 1)}
// const prevSlide = () => {setCurImage(curImage === 0 ? length - 1 : curImage - 1)}

const ImageSlider = () => {

    const [curImage, setCurImage] = useState(4)
    const maxImageNumber = Images.length;

    const nextSlide = () => {
        setCurImage(curImage === maxImageNumber - 1 ? 0 : curImage + 1)
    }

    const prevSlide = () => {
        setCurImage(curImage === 0 ? maxImageNumber - 1 : curImage - 1)
    }

    return (
        <section className='slider' id='home'>
            {/* <div className='slider__fig-container'> */}
            {/* <div className='slider__image-item'> */}
            {Images.map((image, index) => {
                return (
                    <figure className={index === curImage ? 'slide active' : 'slide'} style={{ transform: `translateX(${100 * (index - curImage)}%)` }} key={index}>
                        {index === curImage && (
                            <img src={image.image} alt={image.description} className='slider__image' />
                        )}
                    </figure>
                )
            })}
            {/* </div> */}
            {/* </div> */}
            <FaArrowAltCircleLeft className='slider__arrow slider__arrow-left' onClick={prevSlide} />
            <FaArrowAltCircleRight className='slider__arrow slider__arrow-right' onClick={nextSlide} />

        </section>
    )

}

export default ImageSlider;