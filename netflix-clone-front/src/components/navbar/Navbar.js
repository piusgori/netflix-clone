import React, { useState } from 'react';
import './navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className='container'>
            <div className='left'>
                <img alt='netflix logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png'></img>
                <Link className='link' to='/'><span>Home</span></Link>
                <Link className='link' to='/series'><span>Series</span></Link>
                <Link className='link' to='/movies'><span>Movies</span></Link>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
                <Search className='icon'></Search>
                <span>KID</span>
                <Notifications className='icon'></Notifications>
                <img alt='profile' src='https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg'></img>
                <div className='profile'>
                    <ArrowDropDown className='icon'></ArrowDropDown>
                    <div className='options'>
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar