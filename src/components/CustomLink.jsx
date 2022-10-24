import React from 'react';
import {NavLink, useMatch} from "react-router-dom";
import "../style/CustomLink.css"

const CustomLink = ({to, children}) => {
  const statusLink  = useMatch(to);
  return (
      <NavLink className={statusLink? "activ" : ""} to={to} >{children}</NavLink>
  );
};

export default CustomLink;
