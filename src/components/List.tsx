import React from 'react'
import type { FC } from 'react'
import type { ListObj } from '@interfaces/interface'

const List: FC<ListObj> = (props) => {
  const array: number[] = [1, 2, 3, 4, 5]
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {
          array.map((item: number) => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

export default List
