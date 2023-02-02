import '../profile/profile.css';
import Sidebar from '../SideBar.js';
import profil from '../../img/image.jpeg'

export default function Profile() {
    return (
        <div className='profile'>
            <div className="settingwrapper">
                <img src={profil} alt="" className="profileimg" />
                <div className="info">
                    <p className='head'>Name</p>
                    <span className="Name">Nikhil</span>
                    
                    <p className='head'>Gender</p>
                    <span className="Name">Male</span>
                    <p className='head'>Contact Number</p>
                    <span className="Name">9599094256</span>
                    <p className='head'>email</p>
                    <span className="Name">nk95999094257@gmail.com</span>
                </div>

                <div className="titleUpdate">
                <i className= " settingUpdate fa-solid fa-pen"></i>
                </div>

            </div>
            <Sidebar />
        </div>
    )
}
