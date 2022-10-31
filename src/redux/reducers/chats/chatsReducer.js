
const initialState = {
  chats: [
    {
      name: 'Dima',
      id: 1
    },
    {
      name: 'Natasha',
      id: 2
    },
    {
      name: 'Miranda',
      id: 3
    },
  ]
}

export const chatsReducer = (state = initialState , action)=>{
 switch (action.type) {
   case 'addChat' :
     return {
       ...state,
       chats: [...state.chats, action.payload]
     }
   case  'deleteChat':
     return {
       ...state,
       chats: state.chats.filter((chats)=> chats.id !== action.payload)
     }


   default:
     return state
 }
}