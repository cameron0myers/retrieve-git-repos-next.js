import { combineReducers } from 'redux'

import app, { initialAppState } from './repos'

export default combineReducers({
  app
})

export const initialState = {
  app: initialAppState
}
