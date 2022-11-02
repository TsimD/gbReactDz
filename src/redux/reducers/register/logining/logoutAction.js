import  * as types from '../../actionTypes'

export const logoutStart=()=>({
  type: types.LOGOUT_LOADING
})

export const logoutError=(e)=>({
  type: types.LOGOUT_ERROR,
  payload: e.toString()

})

export const logoutSuccess=()=>({
  type: types.LOGOUT_SUCCESS,

})