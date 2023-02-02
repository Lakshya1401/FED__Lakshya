import Sidebar from './SideBar.js';
import Singlepost from './Singlepost.js';
import './Singlepage.css';

export default function Singlepage() {
    return (
        <div className="singlepage">
            <Singlepost/>
            <Sidebar/>
        </div>
    )
}
