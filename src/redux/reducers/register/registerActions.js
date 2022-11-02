import  * as types from '../actionTypes'

export const registerStart=()=>({
  type: types.LOADING_REGISTER
})

export const registerError=(e)=>({
  type: types.ERROR_REGISTER,
  payload: e.toString()

})

export const registerSuccess=(user)=>({
  type: types.SUCCESS_REGISTER,
  payload: user
})
