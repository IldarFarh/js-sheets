import {TABLE_RESIZE, CHANGE_TEXT} from './types'

export function rooReducer(state, action) {
  let field
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState'
      if (!state[field]) state[field] = {}
      state[field][action.data.id] = action.data.value
      return {...state}
    case CHANGE_TEXT:
      if (!state.dataState) state.dataState = {}
      // if (action.data.value)
      state.dataState[action.data.id] = action.data.value
      return {...state, currentText: action.data.value}
    default: return state
  }
}
