import {SheetComponent} from '@core/SheetsComponents'
import {createTable} from './table.template'
import {$} from '@core/dom'
import {resizeHandler} from './table.recize'
import {shouldResize, isCell, matrix, nextSelector} from './table.functions'
import {TableSelection} from './table.TableSelection'
import * as actions from '@/redux/actions'

export class Table extends SheetComponent {
  static className = 'sheets__table'

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options
    })
  }
  resize
  toHTML() {
    return createTable(20, this.store.getState())
  }

  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init()
    this.selectCell(this.$root.find('[data-id="0:0"]'))
    this.$on('formula:done', text => {
      this.selection.current.text(text)
      this.updateDataState(text)
    })
    this.$on('formula:enter', () => {
      this.selection.current.focus()
    })
  }

  selectCell($cell) {
    this.selection.select($cell)
    this.updateDataState($cell.text())
  }

  async resizeTable(event) {
    try {
      const data = await resizeHandler(this.$root, event)
      this.$dispatch(actions.tableResize(data))
    } catch (e) {
      console.warn('Resize error', e.message);
    }
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      this.resizeTable(event)
    } else if (isCell(event)) {
      if (event.shiftKey) {
        const $cells = matrix($(event.target), this.selection.current)
            .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else {
        this.selectCell($(event.target))
      }
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
      this.selectCell($next)
    }
  }

  updateDataState(value) {
    this.$dispatch(actions.changeText({
      id: this.selection.current.id(),
      value
    }))
  }

  onInput(event) {
    this.updateDataState($(event.target).text())
  }
}
