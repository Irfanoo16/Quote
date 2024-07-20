import React, { useState } from 'react';
import './ProfileCard.css';

// icon
import { IoCloseSharp } from "react-icons/io5";

export default function ProfileCard({ ProfileCard, handleProfile }) {

    const [card, setCard] = useState({ name: localStorage.getItem('name'), email: localStorage.getItem('email'), password: localStorage.getItem('password') });
    const [swipeCard, setSwipe] = useState(false);
    const [closeProfile, setCloseProfile] = useState(false);

    const handleChange = (e) => {
        let { name, value } = e.target;

        setCard((preVal) => ({
            ...preVal,
            [name]: value
        }))
    }

    return (
        <div className='main'>


            {
                ProfileCard === true && (
                    // (swipeCard === false) ? (
                    //     <div className='profile-card'>
                    //         <div className='contect' style={{ padding: '1rem' }}>
                    //             {/* <img src={Profile} style={{ marginBottom: '.5rem', width: '2.5rem', height: '2.5rem', display: 'inline-block', borderRadius: '50%', objectFit: 'cover' }} /> */}
                    //             <p style={{ margin: '.5rem .3rem' }}>
                    //                 <strong>Quote Bank</strong>
                    //             </p>
                    //             <p style={{ margin: '.8rem .4rem', fontSize: '.8rem' }}>@Quote Bank</p>
                    //         </div>
                    //         <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', margin: '.5rem 0' }}>
                    //             <button style={{ width: '5rem', height: '2rem', border: 'none', borderRadius: '.2rem', background: '#0077b6', color: 'white', cursor: 'pointer' }} onClick={() => { setSwipe(!swipeCard) }}>Edit</button>
                    //         </span>
                    //     </div>

                    // ) :
                    (
                        <div className='profile-card'>
                            <IoCloseSharp onClick={() => handleProfile()} />
                            <div className='contect' style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
                                <input type='name' value={card.name} onChange={handleChange} required='name' placeholder='Name' style={{ padding: '.4rem .2rem', border: 'none', outline: 'none', margin: '.5rem .3rem' }} />
                                <input type='email' value={card.email} onChange={handleChange} required='email' placeholder='Email' style={{ padding: '.4rem .2rem', border: 'none', outline: 'none', margin: '.5rem .3rem' }} />
                                <input type='password' value={card.password} onChange={handleChange} required='password' placeholder='Password' style={{ padding: '.4rem .2rem', border: 'none', outline: 'none', margin: '.5rem .3rem' }} />


                            </div>
                            <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', marginBottom: '.5rem' }}>
                                <button style={{ width: '5rem', height: '2rem', border: 'none', borderRadius: '.2rem', background: '#0077b6', color: 'white', cursor: 'pointer' }} onClick={() => { setSwipe(!swipeCard) }}>Save</button>
                            </span>
                        </div>
                    )

                )
            }
            {
            }
        </div>

    )
}