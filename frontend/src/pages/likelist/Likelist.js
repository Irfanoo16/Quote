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
        let response = await axios.post('https://quote-3.onrender.com/liked/list', params, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setList(response.data)
    }

    useEffect(() => {
        let access = JSON.parse(localStorage.getItem('status'));
        if (access === false) {
            navigate('/');
        }
        getQuote()
    }, []);

    const [change, setChange] = useState(true);
    const HandleChange = () => {
        setChange(false);
    }

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
