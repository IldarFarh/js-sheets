const CODES = {
  A: 65,
  Z: 90
}

function toChar(_, index) {
  return String.fromCharCode(index + CODES.A)
}

function getWidth(state, index) {
  return (state[index] || 120) + 'px'
}

function getHeight(state, index) {
  return (state[index] || 24) + 'px'
}

function createCell(row, state) {
  return function(_, col) {
    const id = `${row}:${col}`
    const width = getWidth(state.colState, col)
    const data = state.dataState[id] || ''
    return `
      <div
        class="cell"
        data-col="${col}"
        data-id="${id}"
        data-type="cell"
        contenteditable
        style="width: ${width}"
      >${data}</div>
    `
  }
}

function createCol(literal, index, state) {
  const width = getWidth(state, index)
  return `
    <div
      class="column"
      data-type="resizable"
      data-col="${index}"
      style="width: ${width}"
    >
      ${literal}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function createRow(content, row = '', state = {}) {
  const height = getHeight(state, row)
  const resize = row ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
    <div
      class="row"
      data-type="resizable"
      data-row=${row}
      style="height: ${height}"
    >
      <div class="row-info">
        ${row}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

export function createTable(rowsCount = 15, state = {}) {
  const colsCount = CODES.Z - CODES.A +1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map((col, index) => createCol(col, index, state.colState))
      .join('')
  rows.push(createRow(cols))

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(createCell(row, state))
        .join('')
    rows.push(createRow(cells, row + 1, state.rowState))
  }

  return rows.join('')
}
