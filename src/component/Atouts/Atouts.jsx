import React from "react";
import './Atout.css';
import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/image3.jpg';
import Image4 from '../../assets/image4.jpg';
import Tick from '../../assets/tick.png';
import Nb from '../../assets/nb.png';
import Nike from '../../assets/nike.png';
import Adidas from '../../assets/adidas.png';

function Atouts(){
    return(
        <div className="Atouts" id="Atouts">
      <div className='atout-gauche'>
        <div className='block1'><img src={Image1}></img></div>
        <div className='block2'><img src={Image2}></img></div>
        <div className='block3'><img src={Image3}></img></div>
        <div className='block4'><img src={Image4}></img></div>
      </div>

      <div className='atout-droite'>
        <h1>Nos atouts</h1>
                  
        <span className="stroke-text">Pourquoi </span> <span>Nous Choisir ?</span>
         

         <ul>
            <li><img src={Tick}></img> Plus de 40 coachs expert </li>
            <li><img src={Tick}></img> Entrainement en fonction de votre rithme</li>
            <li><img src={Tick}></img> Un programme livre pour les nouveaux menbres</li>
            <li><img src={Tick}></img> Nous avons des partenaires reconnus qui nous font confiances </li>
         </ul>
         <p>Nos partenaires</p>
         <div className="partenaires">
        
                <li><img src={Nb}></img></li>
                <li><img src={Adidas}></img></li>
                <li><img src={Nike}></img></li>
            
         </div>
      </div>
     

        </div>
    )
}
export default Atouts;