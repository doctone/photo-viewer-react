import React from 'react';

export function PhotoViewer({imageUrl, alt, setImage}){
    return (
        <div className="image-thumbnail">
            <img src={imageUrl} alt={alt} onClick={() => {setImage(imageUrl)}}/>
        </div>
    )
}