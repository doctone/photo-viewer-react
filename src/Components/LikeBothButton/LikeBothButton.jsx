import React from 'react';
import './LikeBothButton.css';

export function LikeBothButton({likes1, likes2, setLikes1, setLikes2}){
    return <>
    <button className='like-both' onClick={ () => {
        setLikes1(likes1 + 1)
        setLikes2(likes2 + 1)
    }}>Like both</button></>
}