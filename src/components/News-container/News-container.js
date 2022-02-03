import React from 'react';
import './News-container.css';
import {NewsItem} from '../News-item/News-item'

export function NewsContainer({content}){
    return(
        <>
            <div className="newsContainer">
                {
                    content.map((item, index)=>{
                        return(
                            <NewsItem 
                            key={index} 
                            title={item.fields.headline}
                            text={item.fields.trailText}
                            image={item.fields.thumbnail}
                            link={item.webUrl}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default NewsContainer;