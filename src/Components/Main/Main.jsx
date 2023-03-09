import React from "react";
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

const data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Goa Jomblang',
        location: 'Jawa Tengah',
        grade: 'Wisata Goa',
        fees: 'Rp. 500.000.00',
        desctiption: 'Goa Jomblang termasuk salah satu wisata ikonik di Jawa Tengah. Di wisata ini Kamu akan diajak turun ke perut bumi sedalam 80 meter. Turunnya pun terbilang menantang, pasalnya bukan turun dengan tangga melainkan teknik tali tunggal berbekal keamanan lengkap. Tidak hanya itu, yang menjadikan tempat ini begitu dikenal di dunia adalah masuk dan jatuhnya cahaya matahari dari celah-celah dan lubang goa sehingga menciptakan keindahan alami yang menakjubkan.',
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Candi Borobudur',
        location: 'Jawa Tengah',
        grade: 'Wisata Kebudayaan',
        fees: 'Rp. 50.000.00',
        desctiption: 'Kemegahan dan sejarah Candi Borobudur telah dikenal dunia sejak lama. UNESCO bahkan menetapkan Borobudur sebagai warisan dunia pada 1991. Kamu bisa mengunjunginya sebelum subuh untuk menyaksikan sisi lain keindahan Borobudur.',
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Candi Prambanan',
        location: 'Yogyakarta',
        grade: 'Wisata Kebudayaan',
        fees:'Rp. 50.000.00',
        desctiption: 'Sama seperti Borobudur, nilai sejarah dan arsitektur membuat candi Prambanan masuk sebagai warisan dunia pada 1991 oleh UNESCO. Kamu juga bisa menyaksikan pertunjukan sendratari Ramayana.',
    },

    { 
        id: 4,
        imgSrc: img4,
        destTitle: 'Kawah Ijen',
        location: 'Jawa Timur',
        grade: 'Wisata Gunung',
        fees: 'Rp. 7.500.00',
        desctiption: 'Bergeser ke Jawa Timur, kawah yang berada di Banyuwangi ini termasuk tempat wisata yang mendunia. Selain keindahan kawahnya, Kawah Ijen dikenal karena fenomena alam Api Biru yang hanya bisa dilihat saat malam hari. Fenomena api biru hanya ada dua di dunia, Islandia dan Indonesia.',
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Gunung Bromo', 
        location: 'Malang',
        grade: 'Wisata Gunung',
        fees: 'Rp. 35.000.00',
        desctiption: 'Negeri di atas awan mungkin ungkapan yang tepat menggambarkan pemandangan Bromo. Selain melihat megahnya gunung Bromo dari ketinggian, kamu juga bisa melihat kawah Bromo.',
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Green Canyon Cukang Taneuh',
        location: 'Jawa Barat',
        grade: 'Wisata Laut',
        fees: 'Rp. 200.000.00',
        desctiption: 'Cukang Taneuh yang berada di Pangandaran, Jawa Barat ini disebut sebagai Grand Canyon-nya Indonesia. Di sini kamu bisa menikmati keindahan batu karang dengan sungai berkelok dan dipadati tumbuhan hijau sambil body rafting.',
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Air Terjun Tumpak Sewu',
        location: 'Jawa Timur',
        grade: 'Wisata Air Terjun',
        fees: 'Rp. 10.000.00',
        desctiption: 'Disebut sebagai air terjun Niagaranya Jawa Timur, air terjun Tumpak Sewu dikenal dunia berkat media sosial Instagram yang banyak membagikan keindahan air terjun Tumpak Sewu dari berbagai sisi.',
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Ubud',
        location: 'Bali',
        grade: 'Wisata Budaya', 
        fees: 'Rp. 60.000.00',
        desctiption: 'Disebut sebagai jantung Bali, Ubud mendunia karena kaya akan seni, sejarah, dan keindahan alamnya. Banyak lokasi wisata alam yang bisa Kamu jelajahi di Ubud.',
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Taman Nasional Bali Barat',
        location: 'Bali',
        grade: 'Wisata Alam',
        fees: 'Rp. 15.000.00',
        desctiption: 'Taman nasional bali barat memiliki beberapa jenis hutan, sabana, dan pantai. Baik darat dan lautnya layak kamu eksplor, termasuk Pulau Menjangan.',
    },

    {
        id: 10,
        imgSrc: img10,
        destTitle: 'Labuan Bojo',
        location: 'Nusa Tenggara Timur',
        grade: 'Wisata Alam',
        fees: 'Rp. 150.000.00',
        desctiption: 'Labuan Bajo dengan Taman Nasional Komodonya telah mendunia sejak lama. Pulau Labuan Bajo sendiri memiliki tempat wisata menarik seperti Goa Batu Cermin, Air Terjun Cunca Wulang, Wae Rebo, Sawah Lingko, Gua Rangko, Pulau Padar, Pink Beach, Pulau Komodo.',
    },

    {
        id: 11,
        imgSrc: img11,
        destTitle: 'Tangkahan Eco Park',
        location: 'Sumatera',
        grade: 'Wisata Alam',
        fees: 'Rp. 550.000', 
        desctiption: 'Tangkahan eco park merupakan bagian dari kawasan Taman Nasional Gunung Leuser. Pamornya yang mendunia disebut wisatawan asing sebagai The Hidden Paradise of Sumatera. Kamu bisa melihat penangkaran gajah dan bermain di alam.',
    },

    {
        id: 12,
        imgSrc: img12,
        destTitle: 'Danau Toba',
        location: 'Sumatera Utara',
        grade: 'Wisata Alam',
        fees: 'Rp. 50.000.00',
        desctiption: 'Danau yang terbentuk dari letusan gunung berapi menjadi ikon bagi wisata Sumatera. Danau alami yang terletak di dataran tinggi dengan pulau vulkanik di tengahnya, yakni pulau Samosir.',
    },
]

const Main = () => {
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    data.map(({ id, imgSrc, destTitle, location, grade, fees, desctiption }) => {
                        return (
                            <div key={id} className="singleDestination">

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