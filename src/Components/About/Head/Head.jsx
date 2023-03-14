import React from "react";
import './head.scss';
import {MdPeopleAlt} from 'react-icons/md';
import {FaAudioDescription} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import video3 from '../../../Assets/Video/video3.mp4';

const Head = () => {
    return (
        <section className="head">
            <div className="overlay">

            </div>

            <video src={video3} muted autoPlay loop type="video/mp4"></video>

            <div className="homeConten container">
                <div className="contac">
                    <div className="textDiv">
                        <span className="smallText">
                            Contact Us
                        </span>

                        <h1 className="hometitle">
                            Enter your Question
                        </h1>
                    </div>

                    <div className="cardDiv grid">
                        <div className="formName">
                            <label htmlFor="name">Your Name:</label>
                            <div className="input flex">
                                <input type="text" placeholder="Enter your Name" />
                                <MdPeopleAlt className="icon" />
                            </div>
                        </div>

                        <div className="formEmail">
                            <label htmlFor="email">Your Email:</label>
                            <div className="input flex">
                                <input type="email" placeholder="Enter your Email" />
                                <AiOutlineMail className="icon" />
                            </div>
                        </div>

                        <div className="formDes">
                            <label htmlFor="des">Enter Your Comman:</label>
                            <div className="input flex">
                                <input type="text" placeholder="Enter your Question" />
                                <FaAudioDescription className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="textDes">
                    <h2>About Travel.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eveniet debitis vel unde delectus quae sapiente porro, quaerat eius beatae officiis totam nostrum temporibus, laborum eos sunt sed deserunt fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo facilis consectetur minima eaque ducimus dicta delectus deserunt natus molestiae dolore aut, error saepe soluta nulla molestias veniam, iste veritatis.</p>
                </div>
            </div>
        </section>
    )
}

export default Head;