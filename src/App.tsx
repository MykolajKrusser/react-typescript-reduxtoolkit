import React from 'react'
import logo from './logo.svg'
import './App.css'
import List from '@components/List'
import Counter from '@components/Counter'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <List title={'Hello'} descr={'sdfsadf sdfsdaf fdd'} />
        <Counter/>
      </header>
    </div>
  )
}

export default App
