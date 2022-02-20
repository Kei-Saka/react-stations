// DO NOT DELETE
import * as React from "react";

export const DogImage = (props) => {
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
