import {SheetComponent} from '@core/SheetsComponents'
import {createTable} from './table.template'
import {$} from '@core/dom'
import {resizeHandler} from './table.recize'
import {shouldResize, isCell, matrix, nextSelector} from './table.functions'
import {TableSelection} from './table.TableSelection'

export class Table extends SheetComponent {
  static className = 'sheets__table'

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown'],
      ...options
    })
  }
  resize
  toHTML() {
    return createTable(20)
  }

  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
    this.$on('formula:done', text => {
      this.selection.current.text(text)
    })
    this.$on('formula:enter', () => {
      this.selection.current.focus()
    })
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    } else if (isCell(event)) {
      if (event.shiftKey) {
        const $cells = matrix($(event.target), this.selection.current)
            .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else this.selection.select($(event.target))
    }
  }

  onKeydown(event) {
    const keys = [
      'Tab',
      'Enter',
      'ArrowLeft',
      'ArrowRight',
      'ArrowDown',
      'ArrowUp'
    ]

    const {key} = event

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault()
      const id = this.selection.current.id(true)
      const $next = this.$root.find(nextSelector(key, id))
      this.selection.select($next)
    }
  }
}
