import {SheetComponent} from '@core/SheetsComponents'

export class Toolbar extends SheetComponent {
  static className = 'sheets__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    })
  }

  toHTML() {
    return `<div class="button">
    <i class="material-icons">format_align_left</i>
  </div>
  <div class="button">
    <i class="material-icons">format_align_center</i>
  </div>
  <div class="button">
    <i class="material-icons">format_align_right</i>
  </div>
  <div class="button">
    <i class="material-icons">format_bold</i>
  </div>
  <div class="button">
    <i class="material-icons">format_italic</i>
  </div>
  <div class="button">
    <i class="material-icons">format_underline</i>
  </div>`
  }

  onClick(event) {
    console.log(event.target)
  }
}
