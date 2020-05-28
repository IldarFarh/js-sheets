import {SheetComponent} from '@core/SheetsComponents'
import {createTable} from './table.template'
// import {$} from '@core/dom'
import {resizeHandler} from './table.recize'
import {shouldResize} from './table.functions'

export class Table extends SheetComponent {
  static className = 'sheets__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    if (shouldResize()) {
      resizeHandler(this.$root, event)
    }
  }
}
