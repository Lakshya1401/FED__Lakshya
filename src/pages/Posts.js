import React from 'react'
import './posts.css';
import background from '../img/background.jpg'


export default function Posts() {
    return (
        <div className='  posts'>
            <img src={background} alt="" className="postimg" />
            <div className="postinfo">
                <div className="postcat">
                    <span className="postcat">Tech</span>
                    <span className="postcat">Life</span>
                </div>
                <p className='postitle'>Lorem ipsum dolor sit amet</p>
                <hr />
                <span className="postdate">1 hour ago</span>
            </div>
            <p className="postdiscription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dolore sequi distinctio earum quidem laborum! Quae ducimus nostrum, nemo est,
                corporis veritatis accusamus assumenda consequuntur officiis nam quis temporibus animi?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dolore sequi distinctio earum quidem laborum! Quae ducimus nostrum, nemo est,
                corporis veritatis accusamus assumenda consequuntur officiis nam quis temporibus animi?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dolore sequi distinctio earum quidem laborum! Quae ducimus nostrum, nemo est,
                corporis veritatis accusamus assumenda consequuntur officiis nam quis temporibus animi?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dolore sequi distinctio earum quidem laborum! Quae ducimus nostrum, nemo est,
                corporis veritatis accusamus assumenda consequuntur officiis nam quis temporibus animi?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dolore sequi distinctio earum quidem laborum! Quae ducimus nostrum, nemo est,
                corporis veritatis accusamus assumenda consequuntur officiis nam quis temporibus animi?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dolore sequi distinctio earum quidem laborum! Quae ducimus nostrum, nemo est,
                corporis veritatis accusamus assumenda consequuntur officiis nam quis temporibus animi?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dolore sequi distinctio earum quidem laborum! Quae ducimus nostrum, nemo est,
                corporis veritatis accusamus assumenda consequuntur officiis nam quis temporibus animi?
            </p>
        </div>
    )
}
