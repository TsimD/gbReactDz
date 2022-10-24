import React from 'react';
import {NavLink} from "react-router-dom";

const NotFoundPage = () => {
  return (
      <div>
        Извините, такой страницы нет. <NavLink to={'/'}>Home</NavLink>
      </div>
  );
};

export default NotFoundPage;
