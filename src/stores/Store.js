import { observable } from 'mobx'

class Store {
  @observable timer = 0

  constructor() {
    setInterval(() => {
      this.timer += 1
    }, 1000)
  }

  resetTimer() {
    this.timer = 0
  }
}

export default Store
