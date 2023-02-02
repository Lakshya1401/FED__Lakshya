import { Link } from 'react-router-dom'
import '../pages/login.css'

export default function login() {
    return (
        <div className='login'>
            <span className="logintittle">Login</span>
            <form action="" className="loginform">
                <label>Email</label>
                <input type='text' className='logininput' placeholder='Enter your Email...' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password' className="logininput" />

                <button className="loginbutton">Login</button>
            </form>

            <button className="registerbutton">
                <Link to='/register' className='Link'>
                    Register</Link></button>

        </div>
    )
}
