
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
    $el.focus().addClass(TableSelection.className)
  }
  selectGroup($group = []) {
    this.clear()
    this.group = $group
    this.group.forEach(el => el.addClass(TableSelection.className))
  }
}
