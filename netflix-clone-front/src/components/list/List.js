import React, { useRef, useState } from 'react';
import './list.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../list-item/ListItem';

const List = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(prevSlideNumber => prevSlideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        } else if (direction === 'right' && slideNumber < 5) {
            setSlideNumber(prevSlideNumber => prevSlideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

  return (
    <div className='list'>
        <span className='listTitle'>Continue to watch</span>
        <div className='wrapper'>
            <ArrowBackIosOutlined style={{display: !isMoved && 'none'}} onClick={() => handleClick('left')} className='sliderArrow left'></ArrowBackIosOutlined>
            <div ref={listRef} className='container'>
                <ListItem index={0}></ListItem>
                <ListItem index={1}></ListItem>
                <ListItem index={2}></ListItem>
                <ListItem index={3}></ListItem>
                <ListItem index={4}></ListItem>
                <ListItem index={5}></ListItem>
                <ListItem index={6}></ListItem>
                <ListItem index={7}></ListItem>
                <ListItem index={8}></ListItem>
                <ListItem index={9}></ListItem>
            </div>
            <ArrowForwardIosOutlined onClick={() => handleClick('right')} className='sliderArrow right'></ArrowForwardIosOutlined>
        </div>
    </div>
  )
}

export default List;