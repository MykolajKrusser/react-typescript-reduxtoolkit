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
