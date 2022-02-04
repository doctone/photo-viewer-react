import React from "react";
import './CurrentImage.css'

export function CurrentImage({currentImage}){
    return (
        <div className="current-image">
            <img src={currentImage} />
        </div>
    )
}