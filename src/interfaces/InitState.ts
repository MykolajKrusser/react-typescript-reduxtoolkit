import type { List } from '@interfaces/interface'
export interface InitCounterState {
  count: number
  showCounter: boolean
}

export interface InitCounterStateReducer {
  counter: {
    count: number
    showCounter: boolean
  }
}

export interface isAuth {
  isAuth: boolean
}

export interface isAuthReducer {
  auth: {
    isAuth: boolean
  }
}

export interface ListState {
  items: []
}
export interface ListStateReducer {
  list: {
    items: List[]
  }
}
