import  * as types from '../../actionTypes'

export const loginStart=()=>({
  type: types.LOADING_LOGIN
})

export const loginError=(e)=>({
  type: types.ERROR_LOGIN,
  payload: e.toString()

})

export const loginSuccess=(user)=>({
  type: types.SUCCESS_LOGIN,
  payload: user
})