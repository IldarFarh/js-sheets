import {SheetComponent} from '@core/SheetsComponents'

export class Formula extends SheetComponent {
  static className = 'sheets__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    })
  }

  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    console.log('Formula: onInput', event)
  }
}
