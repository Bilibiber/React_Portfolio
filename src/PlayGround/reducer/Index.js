import CounterReducer from './ReduxCounter'
import isLoggedReducer from './isLogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  CounterReducer,
  ReduxUser: isLoggedReducer,
})

export default allReducers
