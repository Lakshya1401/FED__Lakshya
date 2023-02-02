import { Link } from 'react-router-dom'
import '../pages/register.css'

export default function Register() {
    return (
        <div className='register'>
            <span className="registertittle">register</span>
            <form action="" className="registerform">
                <label>UserName</label>
                <input type='text' className='registerinput' placeholder='Enter your UserName...' />
                <label>Email</label>
                <input type='text' className='registerinput' placeholder='Enter your Email...' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password' className="registerinput" />

                <button className="Registerbutton">Register</button>
            </form>


            <button className="Loginbutton"><Link to='/login' className='Link'>
                Login</Link></button>

        </div>
    )
}

