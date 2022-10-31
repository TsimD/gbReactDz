import React from "react";
import {useNavigate} from "react-router-dom";


export default function PrivateRoute({ authenticated, ...rest }) {
  const navigate = useNavigate('')

  return authenticated ? navigate({...rest}) : navigate("/login");
}
