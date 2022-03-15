import React from 'react';

export function LikeButton({likes, setLikes, setImage, images}){
    return <>
    <button onClick={() => {
        setLikes(likes + 1);
        setImage(images[Math.floor(Math.random()*images.length)]);

    }}>Like Me!</button>
    <p>Number of likes : {likes}</p>
    </>
}