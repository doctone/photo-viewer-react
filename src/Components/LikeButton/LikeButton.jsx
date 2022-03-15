import React from 'react';

export function LikeButton({likes, setLikes}){
    return <>
    <button onClick={() => {
        setLikes(likes + 1)
    }}>Like Me!</button>
    <p>Number of likes : {likes}</p>
    </>
}