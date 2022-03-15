import React from 'react';
import './LikeBothButton.css';

export function LikeBothButton({likes1, likes2, setLikes1, setLikes2, setImage, setImage2, images}){
    return <>
    <button className='like-both' onClick={ () => {
        setLikes1(likes1 + 1)
        setLikes2(likes2 + 1)
        setImage(images[Math.floor(Math.random()*images.length)]);
        setImage2(images[Math.floor(Math.random()*images.length)]);
    }}>Like both</button></>
}