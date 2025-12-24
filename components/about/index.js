import React from 'react'
import Link from 'next/link'

const About = () => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    
    return(
        <section className="wpo-about-section-s2 section-padding">
            <div className="container-fluid">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-12 offset-xl-6 offset-lg-4 offset-md-2">
                            <div className="wpo-about-content">
                                <div className="about-title">
                                    <span>Lovely Dream Resort · Inderpuri, Rohtas</span>
                                    <h2>Restaurant, Rooms & Events Under One Roof</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <div className="about-info-wrap">
                                        <div className="about-info-left">
                                            <p>Fresh local cuisine · Spacious banquet halls</p>
                                            <ul>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><span><i className="fa fa-star" aria-hidden="true"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="about-info-right">
                                            <p>Inderpuri</p>
                                            <h3>Rohtas</h3>
                                        </div>
                                        <Link onClick={ClickHandler} className="theme-btn" href="/contact">Reserve a Table / Stay</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;