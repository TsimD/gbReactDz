import React, {useState} from 'react';
import '../style/Chats.css';
import {NavLink, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chatsSelector} from "../redux/reducers/chatsSelector";




const Chats = () => {
  const chats = useSelector(chatsSelector);
  const dispatch = useDispatch();


  const [name, setName] = useState('');

  const addChat = ()=>{
    const newChat = {
      id: Date.now(),
      name: name
    }
   dispatch({type: 'add', payload:newChat})
    setName('');

  }


  return (
      <div className='chatList'>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="name chat"/>
        <button onClick={()=>{addChat()}}>add chat</button>
        {chats.map((chat) => {

          return (
              <div key={chat.id}>

                <NavLink className='chatName' to={`/chat/${chat.id}`}>{chat.name}</NavLink>
                <button onClick={()=>dispatch({type: 'delete', payload: chat.id})}>x</button>
              </div>

          )
        })}
      </div>
  );
};

export default Chats;
