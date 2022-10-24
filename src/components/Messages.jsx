import React, {useState} from 'react';
import '../style/Messages.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {messagesSelector} from "../redux/reducers/messagesSelector";

const Messages = () => {

  const messages = useSelector(messagesSelector);
  const dispatch = useDispatch();


  const chatId = useParams().id;
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  const renderMessage = (text, author) => {
    if(text!=='' && author!== '') {
       const mess  = {
            id: giveId(messages),
            text,
            author,
            chatId: chatId
          }
      dispatch({type: 'add', payload: mess})
      setText('');
      setAuthor('');

    }else if(text!=='') {
      const mess = {
        id: giveId(messages),
        text,
        author: 'anonim',
        chatId: chatId
      }
      dispatch({type: 'add', payload: mess})
      setText('');
      setAuthor('');
    }}
      ;



  const giveId = (arr) => {
    return arr.length ? arr[arr.length - 1].id + 1 : 0
  }


  return (
      <div>
        <div className="formInp">
          <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder='text' autoFocus/>
          <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} placeholder='author'/>
          <button onClick={() => renderMessage(text, author)}>Опубликовать</button>
        </div>

        {messages.map((item) => {
          if(chatId == item.chatId) {
            return (
                <div key={item.id}>
                  <h1>{item.text}</h1>
                  <h4>{item.author}</h4>
                  <h5>{item.id}</h5>
                </div>
            )
          }
            }
        )
        }


      </div>

  )
}

export default Messages;
