import './corianImgModal.scss';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { corianIMGslideActions } from '../../../store/store';
import { corianImages } from '../../../store/store';


const CorianImgModal = () => {
    const showModal = useSelector(prevState => prevState.corianSlide.showModal);
    const curImage = useSelector(prevImage => prevImage.corianSlide.initialImage)
    const dispatch = useDispatch()
    const modalRef = useRef()

    const nextSlide = () => {
        dispatch(corianIMGslideActions.nextSlide())
    }

    const prevSlide = () => {
        dispatch(corianIMGslideActions.previousSlide())
    }

    let visibility = showModal ? 'visible' : 'hidden';

    const modalCloseHandler = (e) => {
        e.preventDefault()
        dispatch(corianIMGslideActions.modalToggler())
    }

    const escapePressHandler = (e) => {
        if (modalRef.current === e.target) {
            dispatch(corianIMGslideActions.modalToggler())
        }
    }

    return (
        <section className='corian__modal' ref={modalRef} onClick={escapePressHandler} style={{ visibility: visibility }}>
            {corianImages.map((image, index) => {
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

export default CorianImgModal;