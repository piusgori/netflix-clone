import React from 'react';
import './watch.scss';
import { ArrowBackOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {

  const location = useLocation();
  const { movie } = location;

  return (
    <div className='watch'>
        <Link to='/'><div className='back'>
            <ArrowBackOutlined></ArrowBackOutlined>
            Home
        </div></Link>
        <video className='video' autoPlay progress controls src={movie.video}></video>
    </div>
  )
}

export default Watch;