import React, { Component } from 'react';

import Swiper from 'react-id-swiper';

class BannerComponent extends Component {

    render() {
        const params = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: true,
            autoplay: 2000,
            autoplayDisableOnInteraction: false
        }
        return (
            <Swiper {...params}>
                <div>
                    <a href="">
                        <img src={`${process.env.PUBLIC_URL}/images/banner_01.jpg`} alt=""/>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={`${process.env.PUBLIC_URL}/images/banner_02.jpg`} alt=""/>
                    </a>
                </div>
            </Swiper>
        );
    }
}

export default BannerComponent;