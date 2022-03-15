import React, { useState } from "react";
import { LikeBothButton } from "../LikeBothButton/LikeBothButton";
import { LikeButton } from "../LikeButton/LikeButton";
import './CurrentImage.css'

export function CurrentImage({currentImage, image2, setUrl, setImage, setImage2, images}){
    const [likesForImage1, setLikes1] = useState(0);
    const [likesForImage2, setLikes2] = useState(0);
    return (
        <>
        <div className="current-image">
            <div className="main left">
                <img src={currentImage} onClick={() => setUrl(currentImage)} />
                <LikeButton likes={likesForImage1} setLikes={setLikes1} setImage={setImage} images={images}/>
            </div>
            <div className="main right">
                <img src={image2} onClick={() => setUrl(image2)}/>
                <LikeButton likes={likesForImage2} setLikes={setLikes2} setImage={setImage2} images={images}/>
            </div>

        </div>
        <LikeBothButton 
            likes1={likesForImage1}
            likes2={likesForImage2}
            setLikes1={setLikes1}
            setLikes2={setLikes2}
            images={images}
            setImage={setImage}
            setImage2={setImage2}/>
        </>
    )
}