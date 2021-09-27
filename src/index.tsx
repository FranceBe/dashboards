import App from 'containers/App'
import React from 'react'
import ReactDOM from 'react-dom'
import Favicon from 'react-favicon'
import { HashRouter as Router } from 'react-router-dom'
import { GlobalStyle } from 'styles/global-styles'

const MainApp = () => (
  <Router>
    <Favicon url="https://cdn.iconscout.com/icon/free/png-256/dashboard-1739866-1481441.png" />
    <GlobalStyle />
    <App />
  </Router>
)

ReactDOM.render(<MainApp />, document.getElementById('root'))
