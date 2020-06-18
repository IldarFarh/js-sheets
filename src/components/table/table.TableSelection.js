
export class TableSelection {
  static className = 'selected'
  constructor() {
    this.group = []
    this.current = null
  }

  clear() {
    this.group
        .forEach(el => el.removeClass(TableSelection.className))
    this.group = []
  }
  select($el) {
    this.clear()
    this.group.push($el)
    this.current = $el
    $el.addClass(TableSelection.className)
  }
  selectGroup($el) {}
}
