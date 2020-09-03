import {
  TABLE_RESIZE,
  CHANGE_TEXT,
  CHANGE_HEADER,
  CURRENT_STYLE,
  APPLY_STYLE
} from './types';

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  }
}

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data
  }
}

export function changeHeader(data) {
  return {
    type: CHANGE_HEADER,
    data
  }
}

export function currentStyles(data) {
  return {
    type: CURRENT_STYLE,
    data
  }
}

export function applyStyle(data) {
  return {
    type: APPLY_STYLE,
    data
  }
}
