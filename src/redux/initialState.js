import {storage} from '@core/utils'
import {defaultStyles} from '../constants'

export const defaultState = {
  colState: {},
  rowState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  header: 'New Table',
  currentStyle: defaultStyles
}

const normalize = state => ({
  ...state,
  currentStyle: defaultStyles,
  currentText: ''
})

export const initialState = storage('sheet-state')
  ? normalize(storage('sheet-state'))
  : defaultState
