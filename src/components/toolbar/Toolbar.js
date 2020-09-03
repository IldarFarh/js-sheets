import {SheetStateComponent} from '@core/SheetStateComponent'
import {createToolbar} from './Toolbar.template'
import {$} from '@core/dom'
import {defaultStyles} from '../../constants'

export class Toolbar extends SheetStateComponent {
  static className = 'sheets__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      subscribe: ['currentStyle'],
      ...options
    })
  }

  prepare() {
    this.initState(defaultStyles)
  }

  get template() {
    return createToolbar(this.state)
  }

  toHTML() {
    return this.template
  }

  storeChanged({currentStyle}) {
    this.setState(currentStyle)
  }

  onClick(event) {
    const $target = $(event.target)
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value)
      this.$emit('toolbar:applyStyle', value)
      this.setState(value)
    }
  }
}
