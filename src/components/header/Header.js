import {SheetComponent} from '@core/SheetsComponents'

export class Header extends SheetComponent {
  static className = 'sheets__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      subscribe: ['header'],
      ...options
    })
  }

  toHTML() {
    return `<input id='title' type="text" class="input" value="New table" />
    <div>
      <div class="button">
        <i class="material-icons">delete</i>
      </div>
      <div class="button">
        <i class="material-icons">exit_to_app</i>
      </div>
    </div>`
  }

  storeChanged({header}) {
    this.$root.find('#title').text(header)
  }
}
