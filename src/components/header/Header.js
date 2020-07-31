import {SheetComponent} from '@core/SheetsComponents'

export class Header extends SheetComponent {
  static className = 'sheets__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    })
  }

  toHTML() {
    return `<input type="text" class="input" value="New table" />
    <div>
      <div class="button">
        <i class="material-icons">delete</i>
      </div>
      <div class="button">
        <i class="material-icons">exit_to_app</i>
      </div>
    </div>`
  }
}
