import React, { useEffect, useState } from 'react';
import './featured.scss';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import axios from 'axios';

const Featured = ({ type }) => {

  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const config = { headers: { token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTI2Y2JhZWU2Yjk5YzdiNWU5ZWY2ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjYzNDY2MDQsImV4cCI6MTY2Njc3ODYwNH0._VRhNSofwwHG-fkFdBgiFyQcKYXHgQxtCtCuTXwHpPU' } };
        const res = await axios.get(`movies/random?type=${type}`, content);
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomContent();
  }, [type])

  return (
    <div className='featured'>
        {type && <div className='category'>
          <span>{type === 'movie' ? "Movies" : 'Series'}</span>
          <select name='genre' id='genre'>
            <option>Genre</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-Fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>}
        <img src={content.img} alt='featured'></img>
        <div className='info'>
          <img src={content.imgTitle} alt='featured'></img>
          <span className='desc'>{content.description}</span>
          <div className='buttons'>
            <button className='play'>
              <PlayArrow></PlayArrow>
              <span>Play</span>
            </button>
            <button className='more'>
              <InfoOutlined></InfoOutlined>
              <span>Info</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Featured