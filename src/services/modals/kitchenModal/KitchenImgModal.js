import './kitchenImgModal.scss';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { kitchenIMGslideActions } from '../../../store/store';
import { kitchenImages } from '../../../store/store';


const KitchenImgModal = () => {
    const showModal = useSelector(prevState => prevState.kitchenSlide.showModal);
    const curImage = useSelector(prevImage => prevImage.kitchenSlide.initialImage)
    const dispatch = useDispatch()
    const modalRef = useRef()

    const nextSlide = () => {
        dispatch(kitchenIMGslideActions.nextSlide())
    }

    const prevSlide = () => {
        dispatch(kitchenIMGslideActions.previousSlide())
    }

    let visibility = showModal ? 'visible' : 'hidden';

    const modalCloseHandler = (e) => {
        e.preventDefault()
        dispatch(kitchenIMGslideActions.modalToggler())
    }

    const escapePressHandler = (e) => {
        if (modalRef.current === e.target) {
            dispatch(kitchenIMGslideActions.modalToggler())

        }
    }

    return (
        <section className='kitchen__modal' ref={modalRef} onClick={escapePressHandler} style={{ visibility: visibility }}>
            {kitchenImages.map((image, index) => {
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

export default KitchenImgModal;