import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Count from '../../components/count'
import { getApi }  from '../../actions/home'
import Header from '../../components/Header'
import TodoTextInput from '../../components/TodoTextInput'
import * as HomeAction from '../../actions/home'

import style from './style.less'

class Home extends Component {
  constructor(props){
    super(props)
  }

  showDetail(){
    const { home,actions,dispatch } = this.props

    console.log(home);

    getApi("hello")
  }

  render() {
    const { home,actions } = this.props
    return (
      <div>
        <Header></Header>
        {home[0].text}
        <Count {...actions}/>
      </div>
    )
  }
}

Home.propTypes = {
  home: PropTypes.array,
  actions: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HomeAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
