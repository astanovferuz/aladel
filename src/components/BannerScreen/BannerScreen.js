import React from 'react';
import bannerPic from '../../assets/aladelbanner.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const BannerScreen = () => {
    return(
        <div className='custom_banner'>
            <div className='custom_banner_cta'>
                <div>
                    <h1 className='custom_banner_headline'>Debt Collection Redefined</h1>
                    <h4 className='custom_banner_subheadline'>We identify the relationship as the essence of business relationships</h4>
                    <button className='custom_banner_btn'>Contact Us Today</button>
                </div>
            </div>
            <img className='custom_banner_img' src={bannerPic} alt="bannerScreen" />
        </div>
    )
}

export default BannerScreen;