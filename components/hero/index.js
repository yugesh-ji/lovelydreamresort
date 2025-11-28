import React from 'react'
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = (props) => {
    return (
        <section className="wpo-hero-slider">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        loop={true}
                        speed= {1800}
                        parallax= {true}
                        navigation
                    >
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-1.jpg'})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div data-swiper-parallax="300" className="slide-title">
                                                <h2>Find Your Perfect Place To Stay</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div data-swiper-parallax="500" className="slide-btns">
                                                <a href="room.html" className="theme-btn">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpg'})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div data-swiper-parallax="300" className="slide-title">
                                                <h2>Find Your Perfect Place To Stay</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div data-swiper-parallax="500" className="slide-btns">
                                                <a href="room.html" className="theme-btn">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-3.jpg'})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div data-swiper-parallax="300" className="slide-title">
                                                <h2>Find Your Perfect Place To Stay</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div data-swiper-parallax="500" className="slide-btns">
                                                <a href="room.html" className="theme-btn">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Hero;