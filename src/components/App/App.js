import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import { styles } from './styles.css'

@observer
class App extends Component {
  render() {
    return <div className={css(styles.grey)}>
      <button onClick={this.onReset} className={css(styles.orange,styles.hover)}>
        <span className={'fa fa-first-order'}></span><span>Seconds passed: {this.props.store.timer}</span>
      </button>
    </div>
  }

  onReset = () => {
    this.props.store.resetTimer()
  }
}

export default App
