import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import Header from './components/structure/header'
import Body from './components/structure/body'


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <Body />
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
