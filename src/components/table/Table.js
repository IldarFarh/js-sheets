import {SheetComponent} from '@core/SheetsComponents'
import {createTable} from './table.template'
import {$} from '@core/dom'
import {resizeHandler} from './table.recize'
import {shouldResize, isCell} from './table.functions'
import {TableSelection} from './table.TableSelection'

export class Table extends SheetComponent {
  static className = 'sheets__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
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
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    } else if (isCell(event)) {
      console.log(event)
      if (event.shiftKey) {
        this.selection.selectGroup($(event.target))
      } else this.selection.select($(event.target))
    }
  }
}
