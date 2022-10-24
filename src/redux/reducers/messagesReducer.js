

const initialState ={

  messages: [
    {
      id: 1,
      text: 'text id 1 - 1',
      author: '',
      chatId: 1
    },
    {
      id: 2,
      text: 'text id 2 - 1',
      author: '',
      chatId: 2
    },
    {
      id: 3,
      text: 'text id 2 - 2',
      author: '',
      chatId: 2
    }
  ]
}


export const messagesReducer = (state = initialState, action)=>{
  switch (action.type) {

    case 'add':
      return {
        ...state,
        messages:[...state.messages, action.payload]
      }

    case  'delete':
      return {
        ...state,
        messages: state.messages.filter((message)=>message.id !== action.payload)
      }


    default:
      return state
  }
}