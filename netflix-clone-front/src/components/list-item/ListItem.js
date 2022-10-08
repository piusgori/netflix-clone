import React, { useState } from 'react';
import './listItem.scss';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons';

const ListItem = ({ index }) => {

  const [isHovered, setIsHovered] = useState(false);
  const trailer = 'https://player.vimeo.com/external/624316893.sd.mp4?s=762a00cd52c988b3415d5dafd2716b79568451a1&profile_id=164&oauth2_token_id=57447761';

  return (
    <div style={{left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='listItem'>
      <img alt='each' src='https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246__340.jpg'></img>
      {isHovered && <>
        <video src={trailer} autoPlay progress loop></video>
        <div className='itemInfo'>
          <div className='icons'>
            <PlayArrow className='icon'></PlayArrow>
            <Add className='icon'></Add>
            <ThumbUpOutlined className='icon'></ThumbUpOutlined>
            <ThumbDownOutlined className='icon'></ThumbDownOutlined>
          </div>
          <div className='itemInfoTop'>
            <span>1 hour 14 mins</span>
            <span className='limit'>+16</span>
            <span>1999</span>
          </div>
          <div className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </div>
          <div className='genre'>
            Action
          </div>
        </div>
      </>}
    </div>
  )
}

export default ListItem