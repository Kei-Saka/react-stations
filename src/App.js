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
  // function handleClick() {
  //   // e.preventDefault();
  //   console.log('changeImage');
  //   // setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg');
  //   fetch("https://dog.ceo/api/breeds/image/random").then(function(response) {
  //     setDogUrl(response);
  //     console.log(dogUrl);
  //   });
  // }

  /* 理解しつつも最後はSlack頼りになってしまった */
  const handleClick = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      /* 本文のテキストをJSONとして解釈した結果で解決するプロミスを返す。 */
      .then(res => res.json())
      .then(
        (result) => {
          /* APIのJSONのmessageプロパティから都度変更されるurlを取得し、書き換え */
          setDogUrl(result.message);
        },
        /* コンポーネント内のバグを隠蔽しないために、ここでエラーハンドリングするのが重要 */
        (error) => {
          error;
        }
      );
  }
  return (
    <div className='container'>
      <header className='header'>Dogアプリ</header>
      <p className='siteInfo'>犬の画像を表示するサイトです。</p>
      <img className='dogImage' src={dogUrl} />
      <button className='updateButton' onClick={handleClick}>更新</button>
    </div>
  )
}
