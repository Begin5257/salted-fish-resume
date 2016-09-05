import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import { Link } from 'react-router'

class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    const style = {
      marginRight: "30px"
    }
    return (
      <header>
        <h1>
          TODOS
        </h1>
        <Link to="/" style={style}>home</Link>
        <Link to="/routetest" style={style}>routetest</Link>
        <Link to="/home" style={style}>home</Link>
        <TodoTextInput
          newTodo
          onSave={::this.handleSave}
          placeholder="What needs to be done?" />
      </header>
    )
  }
}

export default Header
