import React, {useEffect} from "react";
import './mainAbout.scss';
import {MdOutlineReadMore} from 'react-icons/md';
import img from '../../../Assets/GambarGaleri/img.jpg';
import img2 from '../../../Assets/GambarGaleri/img1.jpg';
import img3 from '../../../Assets/GambarGaleri/img2.jpg';
import img4 from '../../../Assets/GambarGaleri/img3.jpg';
import img5 from '../../../Assets/GambarGaleri/img4.jpg';
import img6 from '../../../Assets/GambarGaleri/img5.jpg';
import img7 from '../../../Assets/GambarGaleri/img6.jpg';
import img8 from '../../../Assets/GambarGaleri/img7.jpg';
import img9 from '../../../Assets/GambarGaleri/img8.jpg';
import img10 from '../../../Assets/GambarGaleri/img9.jpg';
import img11 from '../../../Assets/GambarGaleri/img10.jpg';
import img12 from '../../../Assets/GambarGaleri/img11.jpg';
import imgAbout from '../../../Assets/GambarGaleri/about.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        id:1,
        imgSrc: img,
        name: "Gambar 1",
    },
    {
        id:2,
        imgSrc: img2,
        name: "Gambar 2",
    },
    {
        id:3,
        imgSrc: img3,
        name: "Gambar 3",
    },
    {
        id:4,
        imgSrc: img4,
        name: "Gambar 4",
    },
    {
        id:5,
        imgSrc: img5,
        name: "Gambar 5",
    },
    {
        id:6,
        imgSrc: img6,
        name: "Gambar 6",
    },
    {
        id:7,
        imgSrc: img7,
        name: "Gambar 7",
    },
    {
        id:8,
        imgSrc: img8,
        name: "Gambar 8",
    },
    {
        id:9,
        imgSrc: img9,
        name: "Gambar 9",
    },
    {
        id:10,
        imgSrc: img10,
        name: "Gambar 10",
    },
    {
        id:11,
        imgSrc: img11,
        name: "Gambar 11",
    },
    {
        id:12,
        imgSrc: img12,
        name: "Gambar 12",
    }
]

const MainAbout = () => {
    // effect
    useEffect = () => {
        Aos.init({duration: 2000})
    }

    return (
        <section className="main container section">
            <div className="about">
                <h3 data-aos="fade-up" className="title">
                    About Travel.
                </h3>
                <div data-aos="fade-up" className="secTitle">
                    <div className="aboutImg">
                        <img src={imgAbout} alt="Gambar" />
                    </div>

                    <div className="conAbout">
                        <div data-aos="fade-right" className="des">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, fugiat sequi alias voluptatibus eligendi fugit quibusdam corporis nihil, quaerat harum veniam est delectus. Magnam voluptatem at aspernatur cum. Cum, eligendi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus saepe assumenda nesciunt velit incidunt, commodi fuga odit amet earum molestiae vitae asperiores a molestias ipsam, nostrum aspernatur, rerum libero voluptate?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus rerum cumque nulla, voluptatum quia quidem quisquam autem expedita, placeat velit accusantium deleniti molestiae accusamus quo. Temporibus, earum. Numquam, eum consectetur.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam aliquam numquam est modi. Recusandae, unde eum eveniet libero neque molestias possimus quas voluptas quidem animi ab quam nostrum doloribus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae rem mollitia laborum magnam impedit, numquam iste blanditiis nobis cum iure eos! Earum fugit nostrum odit deleniti quasi explicabo suscipit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta inventore, suscipit exercitationem nisi nobis voluptatum earum asperiores esse ut blanditiis sequi molestias doloribus expedita amet animi quaerat odio quasi.
                        </div>
                        <div data-aos="fade-up" className="desfooter flex">
                            <MdOutlineReadMore className="icon"/>
                            <span>MORE</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="galeri">
                <h3 data-aos="fade-up" className="title">
                    Galeri Travel.
                </h3>
                
                <div className="imgGal">
                    {
                        data.map(({id, imgSrc, name}) => {
                            return (
                                <div data-aos="fade-up" key={id} className="galeriDestination">                            
                                    <div className="imgDiv">
                                        <img src={imgSrc} alt={name} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default MainAbout