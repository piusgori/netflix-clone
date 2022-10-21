import React, { useEffect, useState } from 'react';
import './home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from 'axios';

const Home = ({ type }) => {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  const getRandomLists = async () => {
    try {
      const config = { headers: { token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTI2Y2JhZWU2Yjk5YzdiNWU5ZWY2ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjYzNDY2MDQsImV4cCI6MTY2Njc3ODYwNH0._VRhNSofwwHG-fkFdBgiFyQcKYXHgQxtCtCuTXwHpPU' } }
      const response = await axios.get(`list${type ? `?type=${type}` : ""}${genre ? `&genre=${genre}` : ""}`, config);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRandomLists();
    //eslint-disable-next-line
  }, [type, genre])

  return (
    <div className='home'>
        <Navbar></Navbar>
        <Featured type={type}></Featured>
        <List></List>
        <List></List>
        <List></List>
    </div>
  )
}

export default Home