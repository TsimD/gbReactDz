import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chats/chatsReducer";
import {messagesReducer} from "./reducers/messages/messagesReducer";
import thunk from "redux-thunk";
import {postsReducer} from "./reducers/posts/postsReducer";
import {registerReducer} from "./reducers/register/registrReducer";
import {loginingReducer} from "./reducers/register/logining/loginingReducer";



export const reducer = combineReducers({

  chats: chatsReducer,
  messages: messagesReducer,
  posts: postsReducer,
  register: registerReducer,
  logining: loginingReducer

})



export const store = createStore(reducer, applyMiddleware(thunk));
