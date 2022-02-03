import React from 'react';
import './News-item.css';
import cat from '../../assets/images/cat.jpeg'


export function NewsItem({title, text, image, link}){
    return(
        <div className="newsItem">
            <h2>{title}</h2>
            <div className="imageWrap">
                <img src={image} alt="cat" />
            </div>
            <p>{text}...</p>
            <a href={link}>Read more</a>
        </div>
    )
}

export default NewsItem;