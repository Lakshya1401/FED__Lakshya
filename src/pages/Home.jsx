import React from 'react';
import Header from './Header.js';
import Post from './Post.js';
import SideBar from './SideBar.js';
import '../pages/Home.css';

function Home() {
    return (
        <>
            <Header />
            <div className='Home' >

                <Post />
                <SideBar />

            </div>

        </>
    );
}

export default Home;

