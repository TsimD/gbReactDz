import  * as types from '../actionTypes'
import {registerError, registerStart, registerSuccess} from "./registerActions";
import {auth} from "../../../servise/firebase";

const initialState ={
  loading:false,
  error: null,
  currentUser:null,
}


export const registerReducer =(state = initialState, action) =>{
  switch (action.type){
    case types.LOADING_REGISTER:
      return {
        ...state,
        loading: true
      }
    case types.ERROR_REGISTER:
      return {
        ...state,
        error: action.payload
      }
    case types.SUCCESS_REGISTER:
      return {
        ...state,
        loading:false,
        currentUser: action.payload
      }


    default:
      return state
  }
}


export const registerInitiate=(email, password, nickname)=>{
  return(dispatch)=>{
    dispatch(registerStart())
    auth
      .createUserWithEmailAndPassword(email, password)
    .then(({user})=>{
      user.updateProfile({
        nickname
      })
      dispatch(registerSuccess(user))
    })
    .catch((e)=>dispatch(registerError(e.toString())))

  }
}

