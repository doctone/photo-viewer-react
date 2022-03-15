import React from "react";
import { Photo } from "../Photo/Photo";

export function PhotoViewer({imageUrls, setImage, currentImage, image2}){
    return (
        <div className="photo-container">
            { imageUrls.map((imageUrl, index) => (
            <Photo 
                imageUrl = {imageUrl}
                setImage={setImage}
                key={index} 
                currentImage={currentImage}
                image2 = {image2}/>
        ))};
        </div>
    )
}