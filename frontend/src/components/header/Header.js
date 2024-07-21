import React, { useState } from 'react';
import ProfileCard from '../profileCard/ProfileCard';
import './Header.css';
import { Link } from 'react-router-dom';

//icon
import { CiLogout } from "react-icons/ci";
import { FaRegHeart } from 'react-icons/fa'; // Unlike-icon
import { RiAccountCircleLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

//image
import Logo from '../../assets/images/logo.webp';



function Header() {
    const [dropDown, setDropdown] = useState(true);

    const [Profile, setProfile] = useState(false);

    const handleProfile = () => {
        setProfile(false)
        let quote = document.getElementById('quote');
        if (quote) {
            quote.style.filter = "blur(0px)"
        }
    }

    // exclamatory ! - !true = false; !false = true
    return (
        <>
            <div className='header'>
                <Link to='/home'>
                    <img src={Logo} alt='img.png' style={{ width: '3rem' }} />
                </Link>
                <div className='account' onClick={() => {
                    setDropdown(false)
                    let category = document.getElementById('category');
                    let quote = document.getElementById('quote');
                    if (category) {
                        category.style.filter = "blur(3px)"
                    }
                    if (quote) {
                        quote.style.filter = "blur(3px)"
                    }
                }}>
                    <RiAccountCircleLine style={{ width: '2.5rem', height: '2.5rem', display: 'inline-block', borderRadius: '50%', objectFit: 'cover' }} />
                </div>
            </div >

            <ProfileCard ProfileCard={Profile} handleProfile={handleProfile} />


            {
                dropDown === false && (
                    <div className='account-bar'>
                        <span style={{ cursor: 'pointer' }} onClick={() => {
                            setDropdown(true)
                            let category = document.getElementById('category');
                            let quote = document.getElementById('quote');
                            if (category) {
                                category.style.filter = "blur(0px)"
                            }
                            if (quote) {
                                quote.style.filter = "blur(0px)"
                            }
                        }}><IoCloseSharp style={{ marginRight: '12rem', marginTop: '.2rem' }} /> </span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
                            <span className='profile-content' onClick={() => {
                                setDropdown(!dropDown)

                            }} >
                            </span>
                            <Link to='/Likelist' style={{ textDecoration: 'none', color: 'black' }}>
                                <span className='profile-content'><FaRegHeart style={{ fontSize: '1.5rem' }} />Liked</span>
                            </Link>
                            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                                <span className='profile-content'><CiLogout style={{ fontSize: '1.5rem' }} />Logout</span>
                            </Link>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Header


