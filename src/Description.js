// DO NOT DELETE
import * as React from "react";
import { useState } from "react";
import DogImage from './DogImage';

const Description = (props) => {
    const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/maltese/n02085936_2422.jpg');
    const handleClick = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(
                (result) => {
                    setDogUrl(result.message);
                },
                (error) => {
                    error;
                }
            );
    }
    return (
        <div className="content">
            <div className="description">
                <p>{props.description}</p>
            </div>
            <div className='image'>
                <DogImage url={dogUrl} />
                <button className='updateButton' onClick={handleClick}>更新</button>
            </div>
        </div>
    )
};

export default Description;
