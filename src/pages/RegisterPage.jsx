import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {registerInitiate} from "../redux/reducers/register/registrReducer";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate('')

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, nickname))
  }

  const goSignIn=()=>{
    navigate('/login')
  }

  return (
      <div>
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <input value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder='nickname'/>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
          <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} placeholder='passwordConfirm'/>
          <button type="submit">Зарегистироваться</button>

          <h4>Уже зарегистрированы? <button onClick={goSignIn}>Войти</button> </h4>
        </form>

      </div>
  );
};

export default RegisterPage;
