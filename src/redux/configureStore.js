import {combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

const config = {
  key: 'root',
  storage
}



export const reducer = combineReducers({

  chats: chatsReducer,
  messages: messagesReducer

})

const persistedReducer = persistReducer(config, reducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);