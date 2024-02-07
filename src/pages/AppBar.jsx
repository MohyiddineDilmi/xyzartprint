import React from 'react';
import './app-bar.css'
import { Link } from 'react-router-dom';
import logoPath from '../assets/xyz-art-print-logo.svg';

// const sections = ['About Us', 'Technologies', 'Services', 'Contact Us'];

function AppBar () {
  return (
        <nav className='app-bar-container'>
            <div className="logo">
                <Link to="/">
                    <img src={logoPath} alt='air-borne-logo'/>
                </Link>
            </div>
        </nav>
       
  );
}

export default AppBar;
