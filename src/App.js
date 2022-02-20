// DO NOT DELETE

// import * as React from 'react'
import * as React from 'react';
import './App.css'
import { Header } from './Header'
import { Description } from './Description'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div className='container'>
      <Header
        title={'Dogアプリ'}
      />
      <Description
        description = {'犬の画像を表示するサイトです'}
        text={'更新'}
      />
    </div>
  )
}
