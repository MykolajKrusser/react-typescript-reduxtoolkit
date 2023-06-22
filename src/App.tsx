import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Counter from '@components/Counter'
import Header from '@components/Header'
import Auth from '@components/Auth'
import UserProfile from '@components/UserProfile'
import type { isAuthReducer } from '@interfaces/InitState'
import List from '@components/List'

const App: React.FC = () => {
  const isAuth = useSelector((state: isAuthReducer) => state.auth.isAuth)
  return (
    <Fragment>
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      <Counter/>
      <List title={'Good Morning'} descr={'Howdy'}/>
    </Fragment>
  )
}

export default App
