import Card from "../card/Card";
import CorianImgModal from "./modals/corianModal/CorianImgModal";
import { useSelector, useDispatch } from "react-redux";
import { corianIMGslideActions } from "../store/store";

const service =
{
    id: 's3', servicetype: 'Solid Surface / Corian',
    serviceDescription: 'Want a temple at your home? No worries, we make cutomized and beautiful temples for homes with premium materials.'
}

const CorianService = () => {
    const showModal = useSelector(prevState => prevState.corianSlide.showModal)
    const dispatch = useDispatch()

    const toggleModalHandler = () => {
        dispatch(corianIMGslideActions.modalToggler())
    }

    return (
        <>
            <Card className='service__container-corian'>
                <h3 key={service.id} className='service__heading'>{service.servicetype}</h3>
                <p className='service__description'>{service.serviceDescription}</p>
                <button onClick={toggleModalHandler} className="service__btn btn">See more</button>
            </Card>
            {showModal && <CorianImgModal />}
        </>
    )
}

export default CorianService;