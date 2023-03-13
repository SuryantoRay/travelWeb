import React, {useEffect} from "react";
import './main.css';
import './main.scss';
import img from '../../Assets/Gambar/img1.jpeg';
import img2 from '../../Assets/Gambar/img2.jpeg';
import img3 from '../../Assets/Gambar/img3.jpeg';
import img4 from '../../Assets/Gambar/img4.jpeg';
import img5 from '../../Assets/Gambar/img5.jpeg';
import img6 from '../../Assets/Gambar/img6.jpeg';
import img7 from '../../Assets/Gambar/img7.jpeg';
import img8 from '../../Assets/Gambar/img8.jpeg';
import img9 from '../../Assets/Gambar/img9.jpeg';
import img10 from '../../Assets/Gambar/img10.jpeg';
import img11 from '../../Assets/Gambar/img11.jpeg';
import img12 from '../../Assets/Gambar/img12.jpeg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiClipboardCheck } from 'react-icons/hi';
// data 

import Aos from 'aos';
import 'aos/dist/aos.css'; 

const data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Goa Jomblang',
        location: 'Jawa Tengah',
        grade: 'Wisata Goa',
        fees: 'Rp. 500.000',
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Candi Borobudur',
        location: 'Jawa Tengah',
        grade: 'Wisata Kebudayaan',
        fees: 'Rp. 50.000',
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',

    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Candi Prambanan',
        location: 'Yogyakarta',
        grade: 'Wisata Kebudayaan',
        fees:'Rp. 50.000',
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',
    },

    { 
        id: 4,
        imgSrc: img4,
        destTitle: 'Kawah Ijen',
        location: 'Jawa Timur',
        grade: 'Wisata Gunung',
        fees: 'Rp. 7.500',
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Gunung Bromo', 
        location: 'Malang',
        grade: 'Wisata Gunung',
        fees: 'Rp. 35.000',
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Green Canyon Cukang Taneuh',
        location: 'Jawa Barat',
        grade: 'Wisata Laut',
        fees: 'Rp. 200.000',
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Air Terjun Tumpak Sewu',
        location: 'Jawa Timur',
        grade: 'Wisata Air Terjun',
        fees: 'Rp. 10.000',
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Ubud',
        location: 'Bali',
        grade: 'Wisata Budaya', 
        fees: 'Rp. 60.000',
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Taman Nasional Bali Barat',
        location: 'Bali',
        grade: 'Wisata Alam',
        fees: 'Rp. 15.000',
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',
    },

    {
        id: 10,
        imgSrc: img10,
        destTitle: 'Labuan Bojo',
        location: 'Nusa Tenggara Timur',
        grade: 'Wisata Alam',
        fees: 'Rp. 150.000',
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',
    },

    {
        id: 11,
        imgSrc: img11,
        destTitle: 'Tangkahan Eco Park',
        location: 'Sumatera',
        grade: 'Wisata Alam',
        fees: 'Rp. 550.000', 
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',
    },

    {
        id: 12,
        imgSrc: img12,
        destTitle: 'Danau Toba',
        location: 'Sumatera Utara',
        grade: 'Wisata Alam',
        fees: 'Rp. 50.000',
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',
    },
]

const Main = () => {
    // effect
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])


    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    data.map(({ id, imgSrc, destTitle, location, grade, fees, desctiption }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{desctiption}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main