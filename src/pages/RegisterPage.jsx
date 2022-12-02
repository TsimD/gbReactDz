import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {registerInitiate} from "../redux/reducers/register/registrReducer";
import {useNavigate} from "react-router-dom";
import LoadingGif from "../components/LoadingGif";
import {db} from "../servise/firebase";

const RegisterPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate('');
  const loader = useSelector(state=>state.register.loading)
  const error = useSelector(state=>state.register.error)

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, nickname));
    db.child('users').push({email, nickname});
    setTimeout(()=>{navigate('/');}, 1000 )
}

  if(loader){
    return (
        <div><LoadingGif/></div>

    )
  }

  if(error){
    return (
        <div>ERROR ERROR ERROR <button onClick={()=>dispatch(registerInitiate(email, password, nickname))}>Обновить</button> </div>
    )
  }

  const goSignIn=()=>{
    navigate('/login');
  }

  return (
      <div>
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <input name={"nickname"} type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder='nickname'/>
          <input name={"email"} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
          <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} placeholder='passwordConfirm'/>
          <button type="submit">Зарегистироваться</button>

          <h4>Уже зарегистрированы? <button onClick={goSignIn}>Войти</button> </h4>
        </form>

      </div>
  );
};

export default RegisterPage;
