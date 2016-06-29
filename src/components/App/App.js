import React, { Component } from 'react'
import { observer } from 'mobx-react'
//import DevTools from 'mobx-react-devtools' // use <DevTools />
import {css} from 'aphrodite'
import {styles} from './styles.css'
import {viewportToPixel} from '../../util'

@observer
class App extends Component {
  render() {
    return <div className={css(styles.grey)}>
        <button onClick={this.onReset} className={css(styles.orange,styles.hover)}>
          Seconds passed: {this.props.store.timer}
        </button>
      </div>
  }

  onReset = () => {
    this.props.store.resetTimer()
  }
}

export default App
