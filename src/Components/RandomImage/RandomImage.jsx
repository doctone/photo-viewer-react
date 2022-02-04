import React from "react";
import './Random.css'

export function RandomImage({images, setImage}){
    const numberOfImages = images.length;
    return (
        <div>
            <button onClick={() => setImage(images[Math.floor(Math.random()*images.length)])}>Select Random Image</button>
        </div>
    )
}