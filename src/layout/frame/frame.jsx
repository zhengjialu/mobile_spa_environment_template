import React, { Component } from 'react'
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router'
import routeUrl from '../../router'

@observer
class Frame extends Component {
  @observable MenuShow = false

  @action onChange = value => {
    let label = '';
    routeUrl.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              this.props.history.push(cItem.url)
              label += ` ${cItem.label}`;
            }
          });
        } else {
          this.props.history.push(dataItem.url)
        }
      }
    });

    console.log(label);
    this.MenuShow = false
  }

  @action handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.MenuShow = !this.MenuShow
  }

  onMaskClick = () => {
    this.MenuShow = false
  }

  render() {
    const menuEl = (
      <Menu
        className="foo-menu"
        data={routeUrl}
        value={['1', '1-1']}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    );
    const loadingEl = (
      <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );

    return (
      <div className="frame">
        <div className={`frame-nav ${this.MenuShow ? 'menu-active' : ''}`}>
          <NavBar
            leftContent="Menu"
            mode="light"
            icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
            onLeftClick={this.handleClick}
            className="top-nav-bar"
          >
            Here is title1
          </NavBar>
          <div className="frame-menu">
            {this.MenuShow ? routeUrl ? menuEl : loadingEl : null}
            {this.MenuShow ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
          </div>
        </div>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default withRouter(Frame)