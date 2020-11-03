import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Frame from '../layout/frame'
import Hello from './page-hello'

// 路由匹配定义
const routeConfig = [
  { path: "/", component: Hello }
]

class RouterUrl extends Component {
  render() {
    return(
      <Router>
        <Frame>
          <Switch>
            { routeConfig.map((item, i) => <Route exact key={i} path={item.path} component={item.component} />) }
            <Route path="*">没有匹配到页面</Route>
            <Redirect from="/hello" to="/" />
          </Switch>
        </Frame>
      </Router>
    )
  }
}

ReactDom.render(<RouterUrl />, document.getElementById('app'))