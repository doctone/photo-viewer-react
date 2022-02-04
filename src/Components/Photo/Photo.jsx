import React from 'react';
import './Photo.css';


export function Photo({imageUrl, alt, setImage, currentImage}){

    return (
        <div className={`image-thumbnail ${imageUrl === currentImage ? "selected" : "" }`}>
            <img src={imageUrl} alt={alt} onClick={() => {setImage(imageUrl)}}/>
        </div>
    )
}