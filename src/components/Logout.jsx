import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutInitiate} from "../redux/reducers/register/logining/loginingReducer";
import {useNavigate} from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.logining.user);
  const navigate = useNavigate('')

  const handleAuth = () => {
      dispatch(logoutInitiate())
    navigate('/login')
  }


  return (
      <div>
        <button onClick={handleAuth}>Выйти</button>
      </div>
  );
};

export default Logout;
