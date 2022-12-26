import React from 'react';
import BannerScreen from '../BannerScreen/BannerScreen';
import { Footer } from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'
import ScreenTwo from '../ScreenTwo/ScreenTwo';

const Main = () => {
    return(
        <>
        <div className='main'>
            <Navbar />
            <BannerScreen />
        </div>
        <ScreenTwo />
        <Footer />
        </>
    )
}

export default Main;