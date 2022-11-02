import  * as types from '../../actionTypes'
import {auth} from "../../../../servise/firebase";
import {loginError, loginStart, loginSuccess} from "./loginingAction";
import {logoutError, logoutStart, logoutSuccess} from "./logoutAction";




const initialState ={
  loading:false,
  error: null,
  currentUser:null,
}


export const loginingReducer =(state = initialState, action) =>{
  switch (action.type){
    case types.LOADING_LOGIN:
      return {
        ...state,
        loading: true
      }
    case types.ERROR_LOGIN:
      return {
        ...state,
        error: action.payload
      }
    case types.SUCCESS_LOGIN:
      return {
        ...state,
        loading:false,
        currentUser: action.payload
      }


    default:
      return state
  }
}



export const loginInitiate=(email, password)=>{

  return(dispatch)=>{
    dispatch(loginStart())
    auth
    .signInWithEmailAndPassword(email, password)
    .then(({user})=>{
      dispatch(loginSuccess(user))
    })
    .catch((e)=>dispatch(loginError(e.toString())))

  }
}

export const logoutInitiate=(email, password)=>{
  return(dispatch)=>{
    dispatch(logoutStart())
    auth
    .signOut()
    .then(({user})=>{
      dispatch(logoutSuccess())
    })
    .catch((e)=>dispatch(logoutError(e.toString())))

  }
}