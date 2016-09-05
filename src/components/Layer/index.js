import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoTextInput from '../../components/TodoTextInput'

import * as HomeAction from '../../actions/home'

import style from './style.less'

class CvLayer extends Component {
  constructor(props, context){
    super(props, context)
  }

  handleSave(text) {
    if (text.length) {
      this.props.addClick(text)
    }
  }

  render() {
    const { home,actions,submitCv } = this.props
    return (
      <div>
        <div className={style.cover}></div>
        <div className={style.layerContainer}>
          <TodoTextInput
            newTodo
            onSave={::this.handleSave}
            placeholder="Beginning" />
          <TodoTextInput
            newTodo
            onSave={::this.handleSave}
            placeholder="前端工程师🦁️" />
          <TodoTextInput
            newTodo
            onSave={::this.handleSave}
            placeholder="还有比我更酷的宝宝吗?" />
          <TodoTextInput
            newTodo
            onSave={::this.handleSave}
            placeholder="没有了😢" />
          <button type="button" onClick={() => submitCv()}>点我➕1</button>
        </div>
      </div>
    )
  }
}

export default CvLayer
