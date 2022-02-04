import React, { useState } from 'react';

export function PhotoViewer({imageurl, alt}){
    // const [image, setImage] = useState('Please select an image');
    return (
        <div>
            <img src={imageurl} alt={alt} />
        </div>
    )
}