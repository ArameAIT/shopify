import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Pages from './pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Pages />
  </Provider>
)
