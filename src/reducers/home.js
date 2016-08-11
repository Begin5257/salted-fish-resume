import { handleActions } from 'redux-actions'

const initialState = [{
  count: 0,
  text: "这是一个描述",
  submit: ''
}]

export default handleActions({
  'add click' (state,action) {
    return [{
      count: state.map(home => {
        home.count++
      }),
      text: action.payload
    },...state]
  },
  'submit cv' (state) {
    return [{
      submit: {
        text: state[0].text
      }
    }]
  }
}, initialState)
