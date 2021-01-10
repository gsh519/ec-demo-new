import React from 'react'
import Router from './Router'
import './assets/reset.css'
import './assets/style.css'
import {Header} from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <main className='c-main'>
        <Router />
        <h1 style={{textAlign: 'center', marginTop: 50, fontSize: 18}}>このサイトはデモアプリです。実際に購入することはできません。</h1>
      </main>
    </>
  )
}

export default App