import React from 'react';
import './Photo.css';


export function Photo({imageUrl, alt, setPhoto, currentImage, image2}){

    return (
        <div className={`image-thumbnail ${imageUrl === currentImage || imageUrl === image2 ? "selected" : "" }`}>
            <img 
            src={imageUrl} 
            alt={alt} 
            onClick={() => {setPhoto(imageUrl)}}/>
        </div>
    )
}