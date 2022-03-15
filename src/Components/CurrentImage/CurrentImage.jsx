import React from "react";
import './CurrentImage.css'

export function CurrentImage({currentImage, image2}){
    return (
        <div className="current-image">
            <img src={currentImage} />
            <img src={image2} />
        </div>
    )
}