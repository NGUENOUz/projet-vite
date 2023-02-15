import React from "react";
import './Plan.css';
import WhiteTick from '../../assets/WhiteTick.png'
import Basic from '../../assets/basic.png'
import Premieum from '../../assets/trone.png'
import Trone from '../../assets/aster.png'


function Plan(){
    return(
        <div className="Plan" id="Plans">
           <h1><span className="stroke-text">PRÊT </span>A demarer votre journée avec<span className="stroke-text"> nous ?</span></h1>
          <div className="b">
           <div className="box-plan">
            <img src={Basic} ></img>
            <p>Basic plan</p>
            <p className="prix-plan">$ 24</p>
            <ul className="description-plan">
                <li><img src={WhiteTick}></img> 2 heures d'exercices</li>
                <li><img src={WhiteTick}></img> Assistance du coach</li>
                <li><img src={WhiteTick}></img> Acces a la communauter</li>
            </ul>
            <p className="plus">Voir plus </p>

            <div className="btn-subscribe">
              <span>  Souscrire</span>
            </div>
           </div>
          

           <div className="box-plan meilleur">
            <img src={Premieum} ></img>
            <p>Premieum Plan</p>
            <p className="prix-plan">$ 24</p>
            <ul className="description-plan">
                <li><img src={WhiteTick}></img> 2 heures d'exercices</li>
                <li><img src={WhiteTick}></img> Assistance du coach</li>
                <li><img src={WhiteTick}></img> Acces a la communauter</li>
            </ul>
            <p className="plus">Voir plus </p>

            <div className="btn-subscribe">
              <span>  Souscrire</span>
            </div>
           </div>

             <div className="box-plan">
            <img src={Trone} ></img>
            <p>Golden Plan</p>
            <p className="prix-plan">$ 24</p>
            <ul className="description-plan">
                <li><img src={WhiteTick}></img> 2 heures d'exercices</li>
                <li><img src={WhiteTick}></img> Assistance du coach</li>
                <li><img src={WhiteTick}></img> Acces a la communauter</li>
            </ul>
           <p className="plus">Voir plus </p>

            <div className="btn-subscribe">
              <span>  Souscrire</span>
            </div>
           </div>
           </div> 
        </div>
    )
}

export default Plan;