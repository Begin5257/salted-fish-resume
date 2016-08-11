import React ,{ Component } from 'react'
import style from './style.less'

class CvTextarea extends Component {
  constructor(props,context){
    super(props,context)
    this.state = {
      text: ''
  }

  cvChange(e){
    const text = e.target.value.trim()

    this.setState({
      text: text
    })
  }

  render() {
    return (
      <textarea
        placeholder={this.props.placeholder}
        value={this.state.text}
        onBlur={::this.cvBlur}
        onChange={::this.cvChange}
      />
    )
  }
}

export default CvTextarea
