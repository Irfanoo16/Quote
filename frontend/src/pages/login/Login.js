import React, { useEffect } from 'react';
import './Login.css';
import { useState } from 'react';
import Authimg from '../../assets/images/auth-img (1).jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate()
    let buttonStyle = { padding: '.3rem 2rem', background: '#0077b6', color: 'white', border: 'none' }

    const [authStatus, setAuthStatus] = useState(false);


    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);

    const handleRegistration = async (event) => {
        event.preventDefault()
        if (authStatus) {
            setAuthStatus(!authStatus)
            const response = await axios.post('https://quote-3.onrender.com/register', register, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setRegister({
                name: '',
                email: '',
                password: '',
            })
        } else {
            const response = await axios.post('https://quote-3.onrender.com/login', login, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });


            if (response.data.status === 'success') {
                localStorage.setItem('status', true)
                localStorage.setItem('id', response.data.id)
                localStorage.setItem('name', response.data.name)
                localStorage.setItem('email', response.data.email)
                localStorage.setItem('password', response.data.password)
                navigate('/home')

            }
            else {
                console.log('i am enter');
                setError('Please enter valid credentials');
            }

        }

    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRegister((preVal) => ({
            ...preVal,
            [name]: value
        }))
    }
    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLogin((preVal) => ({
            ...preVal,
            [name]: value
        }))
    }

    return (
        <div className='log'>
            <div className='form' style={{ display: 'flex', gap: '2.5rem' }}>
                <img src={Authimg} />

                <form className='form-detial' onSubmit={handleRegistration}>
                    {(authStatus === false) ? (
                        <>
                            <h4>Login</h4>
                            <input type='Email' placeholder='Email' required value={login.email} onChange={handleLoginChange} name="email"></input>
                            <input type='Password' placeholder='Password' required value={login.password} onChange={handleLoginChange} name="password"></input>
                            <button type='submit' style={buttonStyle}>login</button>
                            {
                                error !== null ? <span style={{ color: "red", fontSize: "11px" }}>{error}</span> : null
                            }
                            <p style={{ fontSize: '.8rem' }}>Don't have a account <span style={{ color: '#0077b6', cursor: 'pointer' }} onClick={() => setAuthStatus(!authStatus)}> Sign in </span></p></>

                    ) :
                        (
                            <>
                                <h4>Registration</h4>
                                <input type='Name' placeholder='Name' value={register.name} onChange={handleChange} required name="name"></input>
                                <input type='Email' placeholder='Email' value={register.email} onChange={handleChange} required name="email"></input>
                                <input type='Password' placeholder='Password' value={register.password} onChange={handleChange} required name="password"></input>
                                <button style={buttonStyle} type='submit'>login</button>
                                <p style={{ fontSize: '.8rem' }}>have a account <span style={{ color: '#0077b6', cursor: 'pointer' }} onClick={() => setAuthStatus(!authStatus)}> Sign up </span></p>
                            </>
                        )}
                </form>
            </div>

        </div >
    )
}