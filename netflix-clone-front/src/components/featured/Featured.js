import React from 'react';
import './featured.scss';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';

const Featured = ({ type }) => {
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
        <img src='https://cdn.pixabay.com/photo/2014/10/02/00/15/gas-mask-469217__340.jpg' alt='featured'></img>
        <div className='info'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/The-matrix-logo.svg/800px-The-matrix-logo.svg.png?20160129235253' alt='featured'></img>
          <span className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</span>
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