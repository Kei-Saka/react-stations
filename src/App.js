// DO NOT DELETE

// import * as React from 'react'
import React, { useState } from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/maltese/n02085936_2422.jpg');
  function handleClick(e) {
    // e.preventDefault();
    console.log('changeImage');
    setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg');
  }
  return (
    <div>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} />
      <button onClick={handleClick}>更新</button>
    </div>
  )
}
