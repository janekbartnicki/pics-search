import React from "react";
import './ImageList.css';
import ImageCard from "./ImageCard";

export default function ImageList(props) {
    const imagesList = props.images.map((image) => {
        return <ImageCard image={image} key={image.id}/>;
    })
    
    return <div className="image-list">{imagesList}</div>
}