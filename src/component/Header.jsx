import React from 'react';
import '../assets/styles/components/Header.scss';

/* ESTO ES UN COMPONENTE PRESENTACIONAL: No contiene logica, solo lanza contenido html */

const Header =() =>{
  return(
    <header className="header">
    <img className="header__img" src="" alt="image_Header"/>
    <div className="header__menu">
        <div className="header__menu--profile">
            <img src="..assets/" alt="user_img"/>
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