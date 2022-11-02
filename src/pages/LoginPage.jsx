import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginInitiate} from "../redux/reducers/register/registrReducer";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
const navigate = useNavigate('')

  const handleSubmit = e => {
    e.preventDefault();
    if(!email || !password){
      return;
    }
    dispatch(loginInitiate(email,password))
    navigate('/')
   }

   const goRegist=()=>{
    navigate('/register')
   }

  return (
      <div>
        <h2>Войти</h2>
        <form onSubmit={handleSubmit}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
          <button type="submit">Войти</button>
          <h4>Не зарегистрированы? <button onClick={goRegist}>Регистрация</button> </h4>
        </form>
      </div>
  );
};

export default LoginPage;
