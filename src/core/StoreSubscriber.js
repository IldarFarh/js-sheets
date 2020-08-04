import {isEqual} from '@core/utils'

export class StoreSubscriber {
  constructor(store) {
    this.store = store
    this.sub
    this.prevState = {}
  }

  suscribeComponents(components) {
    this.prevState = this.store.getState()
    this.sub = this.store.subscribe(state => {
      Object.keys(state).forEach(key => {
        if (!isEqual(this.prevState[key], state[key])) {
          console.log(state[key]);
        }
      })
    })
  }

  unsubscribeFromStore() {
    this.sub.unsubscribe()
  }
}
