import React, {useEffect} from "react";
import './footer.css';
import './footer.scss';
import video2 from '../../Assets/Video/video2.mp4';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {TbBrandTripadvisor} from 'react-icons/tb';
import {FiChevronRight} from 'react-icons/fi';
import {AiFillYoutube} from 'react-icons/ai';

import {FiSend} from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    // effect
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contacDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a data-aos="fade-right" href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon"/> Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. 
                            Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. 
                            Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga 
                            melainkan teknik tali tunggal berbekal keamanan lengkap.
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <TbBrandTripadvisor className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* Group one */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Payment
                            </li>
                        </div>

                        {/* Group one */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> TripAdvisor
                            </li>
                        </div>

                        {/* Group one */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Jawa
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Sulawesi
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Sumatera 
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Kalimantan
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Papua
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS SURYANTO - LAGUBOTI 2023</small>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer