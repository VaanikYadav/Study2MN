import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Task2 from './views/task2'
import Start from './views/start'
import Task1 from './views/task1'
import Znd from './views/znd'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Task2} exact path="/task2" />
        <Route component={Start} exact path="/start" />
        <Route component={Task1} exact path="/task1" />
        <Route component={Znd} exact path="/znd" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
