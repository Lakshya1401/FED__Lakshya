import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar.js';
import Profile from './pages/profile/Profile.js';
import Single from './pages/Singlepage.js'
import Write from './pages/Write.js'
import Register from './pages/Register.js'
import Login from './pages/login.js';
import Sidebar from './pages/SideBar'
import { BrowserRouter as Router,  Route,  Routes } from 'react-router-dom';


function App() {

  const user = false;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Write' element={user ? <Write /> : <Register />} />
        <Route exact path='/Single' element={<Single />} />
        <Route exact path='/register' element={user ? <Home /> : <Register />} />
        <Route exact path='/Login' element={user ? <Home /> : <Login />} />
        <Route exact path='/Profile' element={user ? <Profile /> : <Register />} />
        <Route exact path='/Sidebar' element={<Sidebar/>} />
        
      </Routes>

    </Router>
  );
}

export default App;
