import React from 'react';
import './watch.scss';
import { ArrowBackOutlined } from '@material-ui/icons';

const Watch = () => {
  return (
    <div className='watch'>
        <div className='back'>
            <ArrowBackOutlined></ArrowBackOutlined>
            Home
        </div>
        <video className='video' autoPlay progress controls src='https://player.vimeo.com/external/624316893.sd.mp4?s=762a00cd52c988b3415d5dafd2716b79568451a1&profile_id=164&oauth2_token_id=57447761'></video>
    </div>
  )
}

export default Watch;