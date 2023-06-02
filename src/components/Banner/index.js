import './Banner.css'
import { Link } from 'react-router-dom';
import React from 'react';

function Banner() {
    return (
        <header className="banner">
            <Link to='/'><img src="/images/banner.png" alt="Banner principal da página"/></Link>
        </header>
    )
}

export default Banner;