import { createAction } from 'redux-actions'

export const addClick = createAction('add click')
export const submitCv = createAction('submit cv')


export function getApi(e){
  console.log(e)
  fetch('http://localhost:3000/posts')
    .then(response =>
      console.log(response)
    )
}
