import React from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginInitiate} from "../redux/reducers/register/logining/loginingReducer";
import {useNavigate} from "react-router-dom";
import LoadingGif from "../components/LoadingGif";


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate('');
  const loader = useSelector(state=>state.logining.loading)
  const error = useSelector(state=>state.logining.error)



  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password))
    setTimeout(()=>{navigate('/');}, 1000 )
  }

  if(loader){
    return (
        <div><LoadingGif/></div>

    )
  }

  if(error){
    return (
        <div>ERROR ERROR ERROR <button onClick={()=>dispatch(loginInitiate(email, password))}>Обновить</button> </div>
    )
  }

  const goRegist = () => {
    navigate('/register')
  }

  return (
      <div>
        <h2>Войти</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
          <button type="submit">Войти</button>
          <h4>Не зарегистрированы? <button onClick={goRegist}>Регистрация</button></h4>
        </form>
      </div>
  );
};

export default LoginPage;
