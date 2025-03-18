// write the book component code here
import React from "react";
import '../index.css';

const EntityCard = ({id, image, name, genre, author}) => {
    return (
        <div className="card">
            <h3>{id}</h3>
            <img src={image} className="imagess"/>
            <h2>{name}</h2>
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>Author:</strong> {author}</p>
        </div>
    )
}

export default EntityCard;