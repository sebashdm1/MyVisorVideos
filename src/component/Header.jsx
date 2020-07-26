import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/figura1.png';
import userImage from '../assets/static/profile.png';


/* ESTO ES UN COMPONENTE PRESENTACIONAL: No contiene logica, solo lanza contenido html */

const Header =() =>{
  return(
    <header className="header">
    <img className="header__img" src={logo} alt="image_Header"/>
    <div className="header__menu">
        <div className="header__menu--profile">
            <img src={userImage} alt="user_img"/>
            <p>Perfil</p>
        </div>
        <ul>
            <li><a>Cuenta</a></li>
            <li><a>Cerrar Sesion</a></li>
        </ul>
    </div>
    </header>
   );
}
export default Header;