import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './style.less'

class Header extends Component {

  render() {
    const style = {
      marginRight: "30px"
    }
    return (
      <header>
        <Link to="/" style={style}>home</Link>
        <Link to="/routetest" style={style}>routetest</Link>
        <Link to="/home" style={style}>home</Link>
        <Link to="/addresume" style={style}>Add</Link>
      </header>
    )
  }
}

export default Header
