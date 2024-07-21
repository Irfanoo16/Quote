import React, { useEffect } from 'react';
import './Home.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link, useNavigate } from 'react-router-dom';

//images
import Adventure from '../../assets/images/Adventure.jpg';
import Time from '../../assets/images/Time.jpg';
import Motivation from '../../assets/images/Motivation.jpg';
import Friendship from '../../assets/images/Friendship.jpg';
import Music from '../../assets/images/Music.jpg';
import Travel from '../../assets/images/Travel.jpg';
import Funny from '../../assets/images/Funny.jpg';
import Family from '../../assets/images/Family.jpg';
import Money from '../../assets/images/Money.jpg';
import Love from '../../assets/images/Love.jpg';
import Positive from '../../assets/images/Positive.jpg';
import Happiness from '../../assets/images/Happiness.jpg';

function Home() {
    let navigate = useNavigate();
    useEffect(() => {
        let access = JSON.parse(localStorage.getItem('status'));
        if (access === false) {
            navigate('/');
        }
    }, []);


    let titleCard = [
        {
            label: "Adventure",
            value: Adventure,
            uniqueId: "ADV"
        },
        {
            label: "Time",
            value: Time,
            uniqueId: "TIM"

        },
        {
            label: "Motivation",
            value: Motivation,
            uniqueId: "MOT"

        },
        {
            label: "Friendship",
            value: Friendship,
            uniqueId: "FRD"

        },
        {
            label: "Music",
            value: Music,
            uniqueId: "MUS"

        },
        {
            label: "Travel",
            value: Travel,
            uniqueId: "TRV"

        },
        {
            label: "Funny",
            value: Funny,
            uniqueId: "FUN"

        },
        {
            label: "Money",
            value: Money,
            uniqueId: "MON"

        },
        {
            label: "Family",
            value: Family,
            uniqueId: "FAM"

        },
        {
            label: "Love",
            value: Love,
            uniqueId: "LOV"

        },
        {
            label: "Positive",
            value: Positive,
            uniqueId: "POS"

        },
        {
            label: "Happiness",
            value: Happiness,
            uniqueId: "HAP"

        },

    ]
    return (
        <>
            <Header />
            <div className='category' id='category'>
                <span style={{ fontSize: 'xx-large', fontFamily: 'fantasy', marginBottom: '2rem' }}>Category</span>

                <div className='category-card' style={{ textAlign: 'center' }}>

                    {
                        titleCard.map(
                            (item, index) => {
                                return (
                                    <Link key={index} to={'/Quote/' + item.uniqueId} style={{ textDecoration: 'none' }}>
                                        <span>
                                            <img src={item.value} alt='img.png' style={{ width: '10rem', height: '6.6rem' }} />
                                            <p style={{ color: 'black' }}>{item.label}</p>
                                        </span>
                                    </Link>
                                )
                            })
                    }
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Home