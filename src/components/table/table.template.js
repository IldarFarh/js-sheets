const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function createCol(literal) {
  return `
    <div class="column" data-type="resizable">
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
  const cells = new Array(colsCount)
      .fill('')
      .map(createCell)
      .join('')
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i + 1))
  }

  return rows.join('')
}
