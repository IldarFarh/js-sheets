import {SheetComponent} from '@core/SheetsComponents'
import {$} from '@core/dom'

export class Formula extends SheetComponent {
  static className = 'sheets__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options
    })
  }

  toHTML() {
    return `
    <div class="info">fx</div>
    <div id='formula' class="input" contenteditable spellcheck="false"></div>
    `
  }

  init() {
    super.init()

    this.$formula = this.$root.find('#formula')
    this.$on('table:select', (element) => {
      this.$formula.text(element.text())
    })
  }

  onInput(event) {
    this.$emit('formula:done', $(event.target).text())
  }

  onKeydown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      this.$emit('formula:enter')
    }
  }
}
