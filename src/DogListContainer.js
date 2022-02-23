// DO NOT DELETE
import * as React from 'react';
import { useState, useEffect } from 'react';

export const DogListContainer = () => {
    const [breeds, setBreeds] = useState();
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then(
                (result) => {
                    setBreeds(result.message);
                },
                (error) => {
                    error;
                }
            );
    }, []);
    return (
        <div className='dogListContainer'>
            <p className='dogBreeds'></p>
        </div>
    )
};

// 拝借
