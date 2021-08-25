import './furnImgModal.scss';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imageSliderActions } from '../../../store/store';
import { furnImages } from '../../../store/store';

const FurnImgModal = (props) => {

    const curImage = useSelector(prevImage => prevImage.imageSlide.initialImage)
    const dispatch = useDispatch()
    const modalRef = useRef()


    const nextSlide = () => {
        dispatch(imageSliderActions.nextSlide())
    }

    const prevSlide = () => {
        dispatch(imageSliderActions.previousSlide())
    }

    let visibility = props.visibilityHandler ? 'visible' : 'hidden';

    const modalCloseHandler = (e) => {
        e.preventDefault()
        //Lifting the state up to parent component by help of this props I passed from parent component
        props.visibilityHandler()
    }

    const escapePressHandler = (e) => {
        if (modalRef.current === e.target) {
            props.visibilityHandler()
        }
    }

    return (
        //   {/*clicking on OVERLAY will trigger the modalCloseHandler function(In Parent component) and it will make OVERLAY disappear bcz
        //   clicking on OVERLAY again will setShowModal to TRUE */}
        <section className='furniture__modal' ref={modalRef} onClick={escapePressHandler} style={{ visibility: visibility }}>
            {furnImages.map((image, index) => {
                return (
                    <figure className={index === curImage ? 'activemodal' : 'slidemodal'} key={index}>
                        {index === curImage && (
                            <img src={image.image} alt={image.description} className='slider__image-modal' />
                        )}
                    </figure>
                )
            })}
            <button onClick={modalCloseHandler} className="close-modal">&times;</button>
            <FaArrowAltCircleLeft className='slider__arrow modal__arrow-left' onClick={prevSlide} />
            <FaArrowAltCircleRight className='slider__arrow modal__arrow-right' onClick={nextSlide} />
        </section>
    )
}

export default FurnImgModal;