
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'
import home from './home'

export default combineReducers({
  routing,
  todos,
  home
})
