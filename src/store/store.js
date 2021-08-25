import { configureStore, createSlice } from '@reduxjs/toolkit';

export const furnImages = [
    { image: require('./../img/furniture/furniture-1.jpeg').default, description: 'furniture 1', id: 'f1' },
    { image: require('./../img/furniture/furniture-2.jpeg').default, description: 'furniture 2', id: 'f2' },
    { image: require('./../img/furniture/furniture-3.jpeg').default, description: 'furniture 3', id: 'f3' },
    { image: require('./../img/furniture/furniture-4.jpeg').default, description: 'furniture 4', id: 'f4' },
    { image: require('./../img/furniture/furniture-5.jpeg').default, description: 'furniture 5', id: 'f5' },
    { image: require('./../img/furniture/furniture-6.jpeg').default, description: 'furniture 6', id: 'f6' },
    { image: require('./../img/furniture/furniture-7.jpeg').default, description: 'furniture 7', id: 'f7' },
    { image: require('./../img/furniture/furniture-8.jpeg').default, description: 'furniture 8', id: 'f8' },
    { image: require('./../img/furniture/furniture-9.jpeg').default, description: 'furniture 9', id: 'f9' },
    { image: require('./../img/furniture/furniture-10.jpeg').default, description: 'furniture 10', id: 'f10' },
    { image: require('./../img/furniture/furniture-11.jpeg').default, description: 'furniture 11', id: 'f11' },
    { image: require('./../img/furniture/furniture-12.jpeg').default, description: 'furniture 12', id: 'f12' },
    { image: require('./../img/furniture/furniture-13.jpeg').default, description: 'furniture 13', id: 'f13' },
    { image: require('./../img/furniture/furniture-14.jpeg').default, description: 'furniture 14', id: 'f14' },
    { image: require('./../img/furniture/furniture-15.jpeg').default, description: 'furniture 15', id: 'f15' },
    { image: require('./../img/furniture/furniture-16.jpeg').default, description: 'furniture 16', id: 'f16' },
    { image: require('./../img/furniture/furniture-17.jpeg').default, description: 'furniture 17', id: 'f17' },
    { image: require('./../img/furniture/furniture-18.jpeg').default, description: 'furniture 18', id: 'f18' },
    { image: require('./../img/furniture/furniture-19.jpeg').default, description: 'furniture 19', id: 'f19' },
    { image: require('./../img/furniture/furniture-21.jpeg').default, description: 'furniture 21', id: 'f21' },
    { image: require('./../img/furniture/furniture-22.jpeg').default, description: 'furniture 22', id: 'f22' },
    { image: require('./../img/furniture/furniture-23.jpeg').default, description: 'furniture 23', id: 'f23' },
    { image: require('./../img/furniture/furniture-24.jpeg').default, description: 'furniture 24', id: 'f24' },
    { image: require('./../img/furniture/furniture-25.jpeg').default, description: 'furniture 25', id: 'f25' },
    { image: require('./../img/furniture/furniture-26.jpeg').default, description: 'furniture 26', id: 'f26' },
    { image: require('./../img/furniture/furniture-27.jpeg').default, description: 'furniture 27', id: 'f27' },
    { image: require('./../img/furniture/furniture-28.jpeg').default, description: 'furniture 28', id: 'f28' },
    { image: require('./../img/furniture/furniture-29.jpeg').default, description: 'furniture 29', id: 'f29' },
    { image: require('./../img/furniture/furniture-30.jpeg').default, description: 'furniture 30', id: 'f30' },
    { image: require('./../img/furniture/furniture-31.jpeg').default, description: 'furniture 31', id: 'f31' },
    { image: require('./../img/furniture/furniture-32.jpeg').default, description: 'furniture 32', id: 'f32' },
    { image: require('./../img/furniture/furniture-33.jpeg').default, description: 'furniture 33', id: 'f33' },
    { image: require('./../img/furniture/furniture-34.jpeg').default, description: 'furniture 34', id: 'f34' },
    { image: require('./../img/furniture/furniture-35.jpeg').default, description: 'furniture 35', id: 'f35' },
    { image: require('./../img/furniture/furniture-36.jpeg').default, description: 'furniture 36', id: 'f36' },
    { image: require('./../img/furniture/furniture-37.jpeg').default, description: 'furniture 37', id: 'f37' },
    { image: require('./../img/furniture/furniture-38.jpeg').default, description: 'furniture 38', id: 'f38' },
]

const furnImageNumber = furnImages.length;

const imageSlider = createSlice({
    name: 'imageSlide',
    initialState: { initialImage: 3, showModal: false },
    reducers: {
        nextSlide(prevState, action) {
            prevState.initialImage = prevState.initialImage === furnImageNumber - 1 ? 0 : prevState.initialImage + 1
        },
        previousSlide(prevState, action) {
            prevState.initialImage = prevState.initialImage === 0 ? furnImageNumber - 1 : prevState.initialImage - 1
        },
        modalToggler(prevState, action) {
            prevState.showModal = prevState.showModal ? false : true
        }
    }
})

export const kitchenImages = [
    { image: require('./../img/kitchen/kitchen-1.jpeg').default, description: 'kitchen 1', id: 'KM1' },
    { image: require('./../img/kitchen/kitchen-2.jpeg').default, description: 'kitchen 2', id: 'KM2' },
    { image: require('./../img/kitchen/kitchen-3.jpeg').default, description: 'kitchen 3', id: 'KM3' },
    { image: require('./../img/kitchen/kitchen-4.jpeg').default, description: 'kitchen 4', id: 'KM4' },
    { image: require('./../img/kitchen/kitchen-5.jpeg').default, description: 'kitchen 5', id: 'KM5' },
]

const kitchenImageNumber = kitchenImages.length;

const kitchenImageSlider = createSlice({
    name: 'kitchenImageSlide',
    initialState: { initialImage: 0, showModal: false },
    reducers: {
        nextSlide(prevState) {
            prevState.initialImage = prevState.initialImage === kitchenImageNumber - 1 ? 0 : prevState.initialImage + 1
        },
        previousSlide(prevState) {
            prevState.initialImage = prevState.initialImage === 0 ? kitchenImageNumber - 1 : prevState.initialImage - 1
        },
        modalToggler(prevState) {
            prevState.showModal = prevState.showModal ? false : true
        }
    }
})

export const corianImages = [
    { image: require('./../img/corian/corian-1.jpeg').default, description: 'corian 1', id: 'C1' },
    { image: require('./../img/corian/corian-2.jpeg').default, description: 'corian 2', id: 'C2' },
    { image: require('./../img/corian/corian-3.jpeg').default, description: 'corian 3', id: 'C3' },
    { image: require('./../img/corian/corian-4.jpeg').default, description: 'corian 4', id: 'C4' },
    { image: require('./../img/corian/corian-5.jpeg').default, description: 'corian 5', id: 'C5' },
    { image: require('./../img/corian/corian-6.jpeg').default, description: 'corian 6', id: 'C6' },
    { image: require('./../img/corian/corian-7.jpeg').default, description: 'corian 7', id: 'C7' },
    { image: require('./../img/corian/corian-8.jpeg').default, description: 'corian 8', id: 'C8' },
    { image: require('./../img/corian/corian-9.jpeg').default, description: 'corian 9', id: 'C9' },
    { image: require('./../img/corian/corian-10.jpeg').default, description: 'corian 10', id: 'C10' },
    { image: require('./../img/corian/corian-11.jpeg').default, description: 'corian 11', id: 'C11' },
    { image: require('./../img/corian/corian-12.jpeg').default, description: 'corian 12', id: 'C12' },
    { image: require('./../img/corian/corian-13.jpeg').default, description: 'corian 13', id: 'C13' },
    { image: require('./../img/corian/corian-14.jpeg').default, description: 'corian 14', id: 'C14' },
    { image: require('./../img/corian/corian-15.jpeg').default, description: 'corian 15', id: 'C15' },
    { image: require('./../img/corian/corian-16.jpeg').default, description: 'corian 16', id: 'C16' },
    { image: require('./../img/corian/corian-17.jpeg').default, description: 'corian 17', id: 'C17' },
    { image: require('./../img/corian/corian-18.jpeg').default, description: 'corian 18', id: 'C18' },
    { image: require('./../img/corian/corian-19.jpeg').default, description: 'corian 19', id: 'C19' },
    { image: require('./../img/corian/corian-20.jpeg').default, description: 'corian 20', id: 'C20' },
    { image: require('./../img/corian/corian-21.jpeg').default, description: 'corian 21', id: 'C21' },
    { image: require('./../img/corian/corian-22.jpeg').default, description: 'corian 22', id: 'C22' },
    { image: require('./../img/corian/corian-23.jpeg').default, description: 'corian 23', id: 'C23' },
    { image: require('./../img/corian/corian-24.jpeg').default, description: 'corian 24', id: 'C24' },
    { image: require('./../img/corian/corian-25.jpeg').default, description: 'corian 25', id: 'C25' },
    { image: require('./../img/corian/corian-26.jpeg').default, description: 'corian 26', id: 'C26' },
    { image: require('./../img/corian/corian-27.jpeg').default, description: 'corian 27', id: 'C27' },
    { image: require('./../img/corian/corian-28.jpeg').default, description: 'corian 28', id: 'C28' },
    { image: require('./../img/corian/corian-29.jpeg').default, description: 'corian 29', id: 'C29' },
    { image: require('./../img/corian/corian-30.jpeg').default, description: 'corian 30', id: 'C30' },
    { image: require('./../img/corian/corian-31.jpeg').default, description: 'corian 31', id: 'C31' },
    { image: require('./../img/corian/corian-32.jpeg').default, description: 'corian 32', id: 'C32' },
    { image: require('./../img/corian/corian-33.jpeg').default, description: 'corian 33', id: 'C33' },
    { image: require('./../img/corian/corian-34.jpeg').default, description: 'corian 34', id: 'C34' },
    { image: require('./../img/corian/corian-35.jpeg').default, description: 'corian 35', id: 'C35' },
    { image: require('./../img/corian/corian-36.jpeg').default, description: 'corian 36', id: 'C36' },
    { image: require('./../img/corian/corian-37.jpeg').default, description: 'corian 37', id: 'C37' },
    { image: require('./../img/corian/corian-38.jpeg').default, description: 'corian 38', id: 'C38' },
    { image: require('./../img/corian/corian-39.jpeg').default, description: 'corian 39', id: 'C39' },
]

const corianImageNumber = corianImages.length;

const corianImageSlider = createSlice({
    name: 'corianImageSlide',
    initialState: { initialImage: 3, showModal: false },
    reducers: {
        nextSlide(prevState) {
            prevState.initialImage = prevState.initialImage === corianImageNumber - 1 ? 0 : prevState.initialImage + 1
        },
        previousSlide(prevState) {
            prevState.initialImage = prevState.initialImage === 0 ? corianImageNumber - 1 : prevState.initialImage - 1
        },
        modalToggler(prevState) {
            prevState.showModal = prevState.showModal ? false : true
        }
    }
})

const store = configureStore({
    reducer: { imageSlide: imageSlider.reducer, kitchenSlide: kitchenImageSlider.reducer, corianSlide: corianImageSlider.reducer }
})

export const imageSliderActions = imageSlider.actions;
export const kitchenIMGslideActions = kitchenImageSlider.actions;
export const corianIMGslideActions = corianImageSlider.actions;

export default store;