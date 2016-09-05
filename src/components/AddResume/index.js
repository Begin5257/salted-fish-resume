import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import CvLayer from '../../components/Layer'
import * as HomeAction from '../../actions/home'

import style from './style.less'

class AddResume extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { home,actions } = this.props
    return (
      <div>
        <Header></Header>
        <CvLayer {...actions}></CvLayer>
      </div>
    )
  }
}

AddResume.propTypes = {
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
)(AddResume)
