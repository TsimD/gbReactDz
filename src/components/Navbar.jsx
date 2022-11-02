import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import '../style/Navbar.css'
import CustomLink from "./CustomLink";
import {useDispatch, useSelector} from "react-redux";
import Logout from "./Logout";
import {useEffect, useState} from "react";
import firebase from "firebase/compat/app";

const Navbar = () => {

  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    })
  }, []);

  const dispatch = useDispatch();
  const user = useSelector(state => state.register.user);
  const navigate = useNavigate('');

  const goSignIn=()=>{
    navigate('/login')
  }

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
    },

    ];




  return (
      <div className="navbar">

        {tegName.map(e => {
          return (
              // <NavLink style={({isActive})=>({backgroundColor: isActive ? 'red': ''})} className="linkName" key={e.name} to={e.href} end>{e.name}</NavLink>
              // Вариант использования инлайн стиля для отображения активной ссылки

                <div className='contLink'>
                  <CustomLink key={e.name} to={e.href} end>{e.name}</CustomLink>
                </div>

          )
        })}
        { authed ? <Logout/> : <button onClick={goSignIn}>Войти</button> }
        {console.log(authed)}
      </div>
  );
};

export default Navbar;
