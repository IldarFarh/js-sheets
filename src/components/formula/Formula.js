import {SheetComponent} from '@core/SheetsComponents'

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
    <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    const text = event.target.textContent.trim()
    this.$emit('formula:done', text)
  }

  onKeydown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      this.$emit('formula:enter')
    }
  }
}
