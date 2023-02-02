import React from 'react';
import './Navbar.css';
import img from '../img/image.jpeg'
import { Link } from 'react-router-dom';

function Navbar() {
    const user = false;
    return (
        <div className='Navbar'>
            <div className="topleft">
                <i className=" topicon fa-brands fa-facebook"></i>
                <i className=" topicon fa-brands fa-twitter"></i>
                <i className=" topicon fa-brands fa-instagram"></i>
            </div>
            <div className="topcenter">
                <ul className='toplist'>
                    <li href='/' className='toplistitem'>
                        <Link to='/' className='Link' >    Home</Link>
                    </li>
                    <li className='toplistitem' > <Link to='/Sidebar' className='Link' >About</Link></li>
                    <li className='toplistitem' > <Link to='/' className='Link' > Contact</Link></li>
                    <li className='toplistitem' > <Link to='/Write' className='Link' >Write</Link></li>
                    <li className='toplistitem' > {user && "Logout"}</li>
                </ul>
            </div>
            <div className="topright">
                {user ? (<img src={img} alt="" className="topimg" />) : (
                    <ul className="toplist">
                        <li className="toplistitem">   <Link to='/Login' className='Link' >Login</Link></li>
                    </ul>
                )}
                <i className=" topsearch fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    );
}

export default Navbar;