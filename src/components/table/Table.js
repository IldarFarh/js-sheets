import {SheetComponent} from '@core/SheetsComponents'
import {createTable} from './table.template'

export class Table extends SheetComponent {
  static className = 'sheets__table'

  toHTML() {
    return createTable(20)
  }
}
