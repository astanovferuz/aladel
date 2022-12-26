import React from 'react';
import screenTwo from '../../assets/screen2.png'
import screenThree from '../../assets/screen3.jpg'
import screenFour from '../../assets/screen4.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ScreenTwo = () => {
    return(
        <>
            <div className='custom_new_screen'>
                <div className='custom_left_screen'>
                    <h1 className='custom_half_headline'>Powered by a team of experienced debt collection experts</h1>
                </div>
                <div className='custom_right_screen'>
                <AnimationOnScroll animateIn="animate__bounceIn">
                <img className='custom_half_img' src={screenTwo} alt="experts" />
                </AnimationOnScroll>
                </div>
            </div>
            <div className='custom_new_screen'>
            <div className='custom_right_screen'>
            <AnimationOnScroll animateIn="animate__bounceIn">
            <img className='custom_half_img' src={screenThree} alt="experts" />
            </AnimationOnScroll>
            </div>
                <div className='custom_left_screen'>
                    <h1 className='custom_half_headline'>Timely revovery of your funds</h1>
                </div>
            </div>
            <div className='custom_new_screen'>
                <div className='custom_left_screen'>
                    <h1 className='custom_half_headline'>Only ethical techniques</h1>
                </div>
                <div className='custom_right_screen'>
                <AnimationOnScroll animateIn="animate__bounceIn">
                <img className='custom_half_img' src={screenFour} alt="experts" />
                </AnimationOnScroll>
                </div>
            </div>
        </>
    )
}

export default ScreenTwo;