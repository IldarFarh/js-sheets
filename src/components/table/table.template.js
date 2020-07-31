const CODES = {
  A: 65,
  Z: 90
}

function createCell(row) {
  return function(_, col) {
    return `
      <div
        class="cell"
        data-col="${col}"
        data-id="${row}:${col}"
        data-type="cell"
        contenteditable
      ></div>
    `
  }
}

function createCol(literal, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${literal}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function createRow(content, row = '') {
  const resize = row ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${row}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(index + CODES.A)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A +1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('')
  rows.push(createRow(cols))

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(createCell(row))
        .join('')
    rows.push(createRow(cells, row + 1))
  }

  return rows.join('')
}
