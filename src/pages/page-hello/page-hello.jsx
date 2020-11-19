import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { action, observable } from 'mobx'
import Store from './store'
import { Button } from 'antd-mobile'

const store = new Store()

@observer
class Hello extends Component {
  componentDidMount() {
    store.testIo()
  }

  @action onClick() {
    store.content = 'hello world !!!'
  }

  render() {
    return (
      <div className="page-hello">
        {' '}
        {store.content}{' '}
        <Button type="link" onClick={this.onClick}>
          点击{' '}
        </Button>{' '}
      </div>
    )
  }
}

export default Hello
