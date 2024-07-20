import React from 'react';

//image
import Logo from '../../assets/images/logo.webp';

export default function Footer() {
    return (
        <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', position: 'fixed', bottom: '0', left: '0', right: '0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', boxShadow: '0px 0px 1.8px 0px rgba(0, 0, 0, 0.4)', borderRadius: '.2rem', minWidth: '95%', padding: '.6rem', background: 'white' }}>Powerd by <img style={{ width: '2rem' }} src={Logo} /></div>
        </div>
    )
}
