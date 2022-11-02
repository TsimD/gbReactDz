import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutInitiate} from "../redux/reducers/register/registrReducer";
import {useNavigate} from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.register.user);
  const navigate = useNavigate('')

  const handleAuth = () => {
    if (user) {
      dispatch(logoutInitiate())
    }
    navigate('/login')
  }


  return (
      <div>
        <button onClick={handleAuth}>Выйти</button>
      </div>
  );
};

export default Logout;
