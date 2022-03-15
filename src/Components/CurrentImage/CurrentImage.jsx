import React, { useState } from "react";
import { LikeBothButton } from "../LikeBothButton/LikeBothButton";
import { LikeButton } from "../LikeButton/LikeButton";
import './CurrentImage.css'

export function CurrentImage({currentImage, image2}){
    const [likesForImage1, setLikes1] = useState(0);
    const [likesForImage2, setLikes2] = useState(0);
    return (
        <>
        <div className="current-image">
            <div className="main left">
                <img src={currentImage} />
                <LikeButton likes={likesForImage1} setLikes={setLikes1}/>
            </div>
            <div className="main right">
                <img src={image2} />
                <LikeButton likes={likesForImage2} setLikes={setLikes2}/>
            </div>

        </div>
        <LikeBothButton likes1={likesForImage1} likes2={likesForImage2} setLikes1={setLikes1} setLikes2={setLikes2}/>
        </>
    )
}