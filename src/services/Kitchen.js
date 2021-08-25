import KitchenImgModal from './modals/kitchenModal/KitchenImgModal';
import { useSelector, useDispatch } from 'react-redux';
import { kitchenIMGslideActions } from '../store/store'
import Card from '../card/Card'

const service = {
    id: 's2',
    servicetype: 'Modular Kitchens',
    serviceDescription: 'We provide tailor made and stylish modular Kitchens for your home which fullfills all your requirements.'
};

const KitchenService = () => {
    const showModal = useSelector(prevState => prevState.kitchenSlide.showModal);
    const dispatch = useDispatch()

    const toggleModalHandler = () => {
        dispatch(kitchenIMGslideActions.modalToggler())
    }

    return (
        <>
            <Card className='service__container-kitchen'>
                <h3 key={service.id} className='service__heading'>{service.servicetype}</h3>
                <p className='service__description'>{service.serviceDescription}</p>
                <button onClick={toggleModalHandler} className="service__btn btn">See more</button>
            </Card>
            {showModal && <KitchenImgModal />}
        </>
    )
}

export default KitchenService;