import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

//CardStyle
import { Card } from '../../components/card/Style';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Quote() {
    let params = useParams();

    let navigate = useNavigate()
    let [list, setList] = useState([]);

   

   const getQuote = async () => {
        try {
            let response = await axios.post('https://quotebankservice.onrender.com/liked/list', params, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setList(response.data);
        } catch (error) {
            console.error('Error fetching quotes:', error);
        }
    };
    useEffect(() => {
        let access = JSON.parse(localStorage.getItem('status'));
        if (access === false) {
            navigate('/');
        }
        getQuote();
    }, [navigate]); // Add 'navigate' as a dependency

    return (
        <>
            <Header />

            <div id='quote'>

                {list.map(
                    (item, index) => {
                        return (
                            <Card key={index} name={item.quote} />
                        )
                    })
                }
            </div>

            <Footer />
        </>

    )
}
