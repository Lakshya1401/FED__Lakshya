import React from 'react';
import './SideBar.css'
import sidebarImg from '../img/image.jpeg';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebaritem">
        <span className="sidebarTitle">
          About Us
        </span>

        <img src={sidebarImg} alt="" className="sidebarimg" />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem omnis accusantium dolorum at? Quis nobis nemo,
          illum distinctio sequi ratione recusandae officiis quisquam adipisci cum nisi, possimus, magnam culpa.</p>

      </div>

      <div className="sidebaritem">
        <span className="sidebarTitle">CATEGORY</span>
        <ul className="sidebarList">
          <li className="sidebarlistitem">Tech</li>
          <li className="sidebarlistitem">Life</li>
          <li className="sidebarlistitem">Sport</li>
          <li className="sidebarlistitem">Nation</li>
        </ul>
      </div>

      <div className="sidebaritem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarsocial">
          <i className=" sidebaricon fa-brands fa-facebook"></i>
          <i className=" sidebaricon fa-brands fa-twitter"></i>
          <i className=" sidebaricon fa-brands fa-instagram"></i>
        </div>
      </div>

    </div>
  )
}
