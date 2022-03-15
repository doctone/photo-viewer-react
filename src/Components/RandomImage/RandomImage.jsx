import React from "react";
import './Random.css'

export function RandomImage({images, setImage, setImage2}){
    return (
        <div className="random-button">
            <button onClick={() => {
                setImage(images[Math.floor(Math.random()*images.length)]);
                setImage2(images[Math.floor(Math.random()*images.length)])}
            }>
                Select Random Image</button>
            
        </div>
    )
}