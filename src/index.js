import '../node_modules/normalize.css/normalize.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import React from 'react'
import { render } from 'react-dom'
import Store from './stores/Store'
import App from './components/App/App'

const store = new Store()
render(<App store={store} />, document.getElementById('root'))
