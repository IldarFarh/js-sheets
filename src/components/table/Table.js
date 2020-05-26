import {SheetComponent} from '@core/SheetsComponents'
import {createTable} from './table.template'
import {$} from '@core/dom'

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
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()
      document.onmousemove = e => {
        if (event.target.dataset.resize === 'col') {
          const delta = e.pageX - coords.right
          const value = coords.width + delta
          $parent.$el.style.width = value + 'px'
        } else {
          const delta = e.pageY - coords.bottom
          const value = coords.height + delta
          $parent.$el.style.height = value + 'px'
        }
      }
      document.onmouseup = e => {
        document.onmousemove = null
      }
    }
  }
}
