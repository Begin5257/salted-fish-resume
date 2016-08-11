import React, { Component,PropTypes } from 'react'
import TodoTextInput from '../../components/TodoTextInput'
import CvTextarea from '../../components/CvTextarea'

class Count extends Component {
  constructor(props){
    super(props)
  }

  handleSave(text) {
    if (text.length) {
      this.props.addClick(text)
    }
  }

  render() {
    const { addClick,submitCv } = this.props
    return (
      <div>
        <TodoTextInput
          newTodo
          onSave={::this.handleSave}
          placeholder="What needs to be done?" />
        <CvTextarea
          placeholder="hello"
          onSave={::this.handleSave}
        />
        <button type="button" onClick={() => submitCv()}>点我➕1</button>
      </div>
    )
  }
}

export default Count
