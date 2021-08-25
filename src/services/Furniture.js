import Card from "../card/Card";
import FurnImgModal from "./modals/furnitureModal/FurnImgModal";
import { useSelector, useDispatch } from "react-redux";
import { imageSliderActions } from "../store/store";

const service = {
    id: 's1',
    servicetype: 'Furniture',
    serviceDescription: 'We have the furniture for every room you have got! Be creative with our wide range of furniture variety.',
};

const FurnitureService = () => {
    const showModal = useSelector(prevState => prevState.imageSlide.showModal)
    const dispatch = useDispatch()

    const toggleModalHandler = () => {
        dispatch(imageSliderActions.modalToggler())
    }

    return (
        <>
            <Card className='service__container-furniture'>
                <h3 key={service.id} className='service__heading'>{service.servicetype}</h3>
                <p className='service__description'>{service.serviceDescription}</p>
                <button className="service__btn btn" onClick={toggleModalHandler}>See more</button>
            </Card>
            {/* Only if the showModal is TRUE then render the POPUP Modal. */}

            {showModal && <FurnImgModal visibilityHandler={toggleModalHandler} />}
        </>
    )
}

export default FurnitureService;