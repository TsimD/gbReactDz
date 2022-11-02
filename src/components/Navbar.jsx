import React from 'react';
import {useNavigate} from "react-router-dom";
import '../style/Navbar.css'
import Logout from "./Logout";
import {useEffect, useState} from "react";
import firebase from "firebase/compat/app";
import PrivatListNavigate from "./PrivatListNavigate";

const Navbar = () => {

  const tegName = [
    {
      name: 'HOME',
      href: '/',
      privat: false
    },
    {
      name: 'BLOG',
      href: '/blog',
      privat: false
    },
    {
      name: 'PROFILE',
      href: '/profile',
      privat: true
    }, {
      name: 'CHATS',
      href: '/chats',
      privat: true
    },
    {
      name: 'POSTS',
      href: '/posts',
      privat: true
    },

  ];


  const [authed, setAuthed] = useState(false);
  const navigate = useNavigate('');


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    })
  }, []);


  const publicTegName = tegName.filter(e => e.privat === false)


  const goSignIn = () => {
    navigate('/login')
  }


  return (
      <div className="navbar">
        {authed ? <PrivatListNavigate array={tegName}/> : <PrivatListNavigate array={publicTegName}/>}
        {authed ? <Logout/> : <button onClick={goSignIn}>Войти</button>}

      </div>
  );
};

export default Navbar;
