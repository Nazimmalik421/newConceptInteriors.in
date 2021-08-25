import './review.scss'

const Reviews = () => {
    return (
        <>
            <div className='review__image'>
                <div className="review__image-1">
                    {/* <img src='../img/review-kitchen.jpg' alt="kitchen" width='760' height='600' className='review__image-1' /> */}
                </div>
                <div className="review__image-2">
                </div>
            </div>
            <div className='review__comment'>
                <h3 className='heading-3'>Happy <span>Clients</span></h3>
                <h2 className="heading-2">&ldquo;Quick to deal with any challenge&rdquo;</h2>
                <p className="review__text">
                    It was really peaceful to work with them and they were always ready to go extra mile.
                    I will definitely work with them in future.
                </p>
                <a href='#contact-section' className="btn btn__review">Let's Connect</a>
            </div>
        </>
    )
}

export default Reviews;