import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Counter from '@components/Counter'
import Header from '@components/Header'
import Auth from '@components/Auth'
import UserProfile from '@components/UserProfile'
import type { isAuthReducer } from '@interfaces/InitState'

const App: React.FC = () => {
  const isAuth = useSelector((state: isAuthReducer) => state.auth.isAuth)
  console.log(isAuth)
  return (
    <Fragment>
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      <Counter/>
    </Fragment>
  )
}

export default App
