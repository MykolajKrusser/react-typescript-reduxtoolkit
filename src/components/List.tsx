import React, { useState } from 'react'
import type { FC } from 'react'
import type { ListObj, List as ListItems } from '@interfaces/interface'
import type { ListStateReducer } from '@interfaces/InitState'
import classes from './List.module.css'
import Api from '@api/api'

import { useSelector, useDispatch } from 'react-redux'
import { listAddActions } from '@store/list'

const List: FC<ListObj> = (props) => {
  const array = useSelector((state: ListStateReducer) => state.list.items)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const listHandler = () => {
    setLoading(true)
    void Api.GetList().then((resp: ListItems[]) => {
      setLoading(false)
      dispatch(listAddActions.addItems({ list: resp }))
    })
  }
  const clearHandler = () => {
    dispatch(listAddActions.clearItems())
  }
  return (
    <div className={classes.counter}>
      <h1>{props.title}</h1>
      <p>{props.descr}</p>
      <div>
        <button onClick={listHandler}>Show list of users</button>
        <button onClick={clearHandler}>Clear</button>
      </div>
      {
        loading
          ? <div>Loading</div>
          : <ul className={classes.list}>
            {
              array.map((item: ListItems) => {
                return <li key={item.id + item.name}>{item.name}</li>
              })
            }
          </ul>
      }
    </div>
  )
}

export default List
