import React from "react";
import { ReactDOM } from "react";
import Logo from '../../assets/logo.png';
import Atouts from '../Atouts/Atouts'
import './Header.css';

function Header(){

    return (
        <div className="App-header">
            <img src={Logo} className="logo"></img>

                <ul className="Header-menus">
                    <li> <a href="#App">Acceuil</a></li>
                    <li><a href="#Atouts">Atouts</a></li>
                    <li><a href="#programme">Programme</a></li>
                    <li><a href="#Plans">Plans</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
    )

}

export default Header