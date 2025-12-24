import React from 'react'
import Link from 'next/link'
import Services from '../../api/service'


const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <span className="footer-logo-text">Lovely Dream Resort</span>
                                </div>
                                <p>Lovely Dream Resort · Inderpuri, Rohtas — restaurant, rooms, banquets, and lawns for every celebration.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s1">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0,5).map((service, sitem) => (
                                        <li key={sitem}><Link onClick={ClickHandler} href="/service/[slug]" as={`/service/${service.slug}`}>{service.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Important Link</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/destination">Venues & Lawns</Link></li>
                                    <li><Link onClick={ClickHandler} href="/room">Rooms & Suites</Link></li>
                                    <li><Link onClick={ClickHandler} href="/service">Dining & Events</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-placeholder"></i>Inderpuri, Rohtas, Bihar</li>
                                        <li><i className="fi flaticon-phone-call"></i>+91 99999 99999</li>
                                        <li><i className="fi flaticon-send"></i>hello@lovelydreamresort.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> 2025 Lovely Dream Resort, Inderpuri · Rohtas. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;