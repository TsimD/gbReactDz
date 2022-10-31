import {GET_POSTS, GET_POSTS_ERROR, GET_POSTS_LOADING} from "./actionTypes";

const initialState = {

  posts: [],
  loading: false,
  error: null
}


export const postsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }

    case GET_POSTS_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        posts: action.payload
      }

    default:
      return state
  }
}

//thunk
export const getPosts = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_POSTS_LOADING
    })
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await response.json();
      dispatch({
        type: GET_POSTS,
        payload: data
      })
    }catch (error){
      dispatch({
        type: GET_POSTS_ERROR,
        payload: error.toString()

      })
    }

  }
}