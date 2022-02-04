import React from "react";
import './Random.css'

export function RandomImage({images, setImage}){
    return (
        <div className="random-button">
            <button onClick={() => setImage(images[Math.floor(Math.random()*images.length)])}>Select Random Image</button>
        </div>
    )
}