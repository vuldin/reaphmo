import React from 'react'
import { render } from 'react-dom'
import Store from './Store'
import App from './App'

const store = new Store()
render(<App store={store} />,document.getElementById('root'))
