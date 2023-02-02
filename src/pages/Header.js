import React from 'react';
import './Header.css';
import background from '../img/background.jpg'


function Header() {

    return (
        <div className="Header">
            <div className="headertitle">
                <span className="headertitleSm">Create Your</span>
                <span className="headertitleLg">Blog</span>
                <span className="headertitleSm mr">now</span>
            </div>

            <img src={background} alt="" className="headerimg" />
            
        </div>
    )
}

export default Header;