import React, { useEffect, useState } from 'react';
import './listItem.scss';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({ index, itemId }) => {

  const [isHovered, setIsHovered] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const config = { headers: { token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTI2Y2JhZWU2Yjk5YzdiNWU5ZWY2ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjYzNDY2MDQsImV4cCI6MTY2Njc3ODYwNH0._VRhNSofwwHG-fkFdBgiFyQcKYXHgQxtCtCuTXwHpPU' } };
        const response = await axios.get(`movies/find/${itemId}`, config);
        setItem(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getMovie();
  }, [itemId]);

  return (
    <Link to={{ pathname: '/watch', movie: item }}>
      <div style={{left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='listItem'>
        <img alt='each' src={item.img}></img>
        {isHovered && <>
          <video src={item.trailer} autoPlay progress loop></video>
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className='icon'></PlayArrow>
              <Add className='icon'></Add>
              <ThumbUpOutlined className='icon'></ThumbUpOutlined>
              <ThumbDownOutlined className='icon'></ThumbDownOutlined>
            </div>
            <div className='itemInfoTop'>
              <span>{item.duration}</span>
              <span className='limit'>{item.limit}</span>
              <span>{item.year}</span>
            </div>
            <div className='description'>{item.description}</div>
            <div className='genre'>{item.genre}</div>
          </div>
        </>}
      </div>
    </Link>
  )
}

export default ListItem