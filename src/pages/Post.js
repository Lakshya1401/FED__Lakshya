import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import Posts from './Posts.js'

export default function Post() {
  return (
    <div className='post'>
      <Link to='/Single' className='Link'> <Posts /> </Link>
      <Link to='/Single' className='Link'> <Posts /> </Link>
      <Link to='/Single' className='Link'> <Posts /> </Link>
      <Link to='/Single' className='Link'> <Posts /> </Link>
      <Link to='/Single' className='Link'> <Posts /> </Link>
      <Link to='/Single' className='Link'> <Posts /> </Link>
      <Link to='/Single' className='Link'> <Posts /> </Link>
      <Link to='/Single' className='Link'> <Posts /> </Link>
      <Link to='/Single' className='Link'> <Posts /> </Link>
    </div>
  )
}
