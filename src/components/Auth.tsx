import classes from './Auth.module.css'
import React from 'react'
import type { FC } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '@store/index'
const Auth: FC = () => {
  const dispatch = useDispatch()
  const loginHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()
    dispatch(authActions.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth
