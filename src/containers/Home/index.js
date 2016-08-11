import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Count from '../../components/count'
import TodoTextInput from '../../components/TodoTextInput'
import * as HomeAction from '../../actions/home'

import style from './style.less'

class Home extends Component {
  constructor(props){
    super(props)
  }

  showDetail(){
    const { home,actions } = this.props

    console.log(home);
  }

  render() {
    const { home,actions } = this.props
    return (
      <div>
        <h1 onClick={::this.showDetail}>Home </h1>
        <Link to="/" style={{marginRight:"30px"}}>home</Link>
        <Link to="/routetest">routetest</Link>
        <Link to="/home">🐒嗷嗷嗷哦</Link>
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
