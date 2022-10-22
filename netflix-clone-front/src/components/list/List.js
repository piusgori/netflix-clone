import React, { useRef, useState } from 'react';
import './list.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../list-item/ListItem';

const List = ({ list }) => {

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
        <span className='listTitle'>{list.title}</span>
        <div className='wrapper'>
            <ArrowBackIosOutlined style={{display: !isMoved && 'none'}} onClick={() => handleClick('left')} className='sliderArrow left'></ArrowBackIosOutlined>
            <div ref={listRef} className='container'>
                {list.content.map((item, index) => <ListItem key={index} item={item} index={index}></ListItem>)}
            </div>
            <ArrowForwardIosOutlined onClick={() => handleClick('right')} className='sliderArrow right'></ArrowForwardIosOutlined>
        </div>
    </div>
  )
}

export default List;