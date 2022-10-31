import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useMatch} from "react-router-dom";
import '../style/Navbar.css'
import CustomLink from "./CustomLink";

const Navbar = () => {
  const tegName = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Blog',
      href: '/blog'
    },
    {
      name: 'Profile',
      href: '/profile'
    },{
      name: 'Chats',
      href: '/chats'
    },
    {
      name: 'Posts',
      href: '/posts'
    }
    ];




  return (
      <div>

        {tegName.map(e => {
          return (
              // <NavLink style={({isActive})=>({backgroundColor: isActive ? 'red': ''})} className="linkName" key={e.name} to={e.href} end>{e.name}</NavLink>
              // Вариант использования инлайн стиля для отображения активной ссылки
              <CustomLink key={e.name} to={e.href} end>{e.name}</CustomLink> //Вариант через переиспользуемый компонет
          )
        })}
      </div>
  );
};

export default Navbar;
