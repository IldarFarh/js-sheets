import {storage} from '@core/utils'

export const defaultState = {
  colState: {},
  rowState: {},
  dataState: {},
  currentText: ''
}

export const initialState = storage('sheet-state')
  ? storage('sheet-state')
  : defaultState
