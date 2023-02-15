import React from "react";
import './Footer.css';
import Copyright from'../../assets/copy.png'
import Facebook from'../../assets/facebook.png'
import Youtube from'../../assets/youtube.png'
import Instagram from'../../assets/instagram.png'
 


function Footer(){
    return(
        <div className="Footer">
            
            <div className="gauche">
             <h2>Raccourci</h2>
             <ul className="Header-menus">
                    <li> <a href="#App">Acceuil</a></li>
                    <li><a href="#Atouts">Atouts</a></li>
                    <li><a href="#programme">Programme</a></li>
                    <li><a href="#Plans">Plans</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
           
            <div className="centre">
            <h1>Nos reseaux</h1>
               <img src={Facebook} alt="Facebook" className="i1"></img>
               <img src={Youtube} alt="instagram" className="i2"></img>
               <img src={Instagram} alt="youtube" className="i3"></img>
            </div>

            <div className="droite">
                <p className="infos">Inscrivez vos à notre Newsletter  pour recevoir nos informations </p>
                <input type="text" placeholder="Email"></input>
                <div className="btn-i">
                <button type="btn-submit">S'inscrire</button>
                </div>
            </div>
        <div className="cop">
        <img src={Copyright}></img>
         <span> 2023 All right reserved</span>
        </div>
        
        </div>
    )
}

export default Footer;