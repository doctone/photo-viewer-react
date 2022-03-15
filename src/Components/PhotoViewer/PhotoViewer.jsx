import React from "react";
import { Photo } from "../Photo/Photo";

export function PhotoViewer({imageUrls, setImage, setImage2, currentImage, image2, selection}){
    return (
        <div className="photo-container">
            { imageUrls.map((imageUrl, index) => (
            <Photo 
                imageUrl = {imageUrl}
                setPhoto={selection ? setImage : setImage2}
                key={index} 
                currentImage={currentImage}
                image2 = {image2}/>
        ))};
        </div>
    )
}