import React, { useState } from 'react';


export function PhotoViewer({imageUrl, alt, setImage}){
    const [isActive, setActive] = useState('false');

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <div className={!isActive ? 'clicked-image image-thumbnail' : 'image-thumbnail'}>
            <img src={imageUrl} alt={alt} onClick={() => {
                toggleClass();
                setImage(imageUrl);
                }}/>
        </div>
    )
}