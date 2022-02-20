// DO NOT DELETE
import * as React from "react";

function DogImage(props) {
    return (
    <div>
        <img
            className='dogImage'
            src={props.url}
            alt="犬の画像"
        />
    </div>
    )
};

export default DogImage;
