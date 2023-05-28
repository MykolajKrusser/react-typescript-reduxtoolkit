import type { FC } from 'react'
import type { InitState } from '../interfaces/InitState'
import React from 'react'
import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/index'

const Counter: FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state: InitState) => state.counter)
  const showCounter = useSelector((state: InitState) => state.showCounter)

  const toggleCounterHandler: () => void = () => {
    dispatch(counterActions.toggle())
  }

  const increment: () => void = () => {
    dispatch(counterActions.increment())
  }

  const incrementBy: () => void = () => {
    dispatch(counterActions.incrementBy({ payload: 5 }))
  }

  const decrement: () => void = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={ classes.counter }>
      <h1>Redux Counter</h1>
      { (Boolean(showCounter)) && <div className={classes.value}>-- {counter} --</div> }
      <div>
        <button onClick={increment}>+</button>
        <button onClick={incrementBy}>+5</button>
        <button onClick={decrement}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
