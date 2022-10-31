import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer";
import thunk from "redux-thunk";
import {postsReducer} from "./reducers/postsReducer";



export const reducer = combineReducers({

  chats: chatsReducer,
  messages: messagesReducer,
  posts: postsReducer

})



export const store = createStore(reducer, applyMiddleware(thunk));
