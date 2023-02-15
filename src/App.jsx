import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Plan from "./component/Plan/Plan";
import Contact from "./component/Contact/Contact";
import flash from "./assets/flash.png";
import top from "./assets/top1.png";

import Muscle from "./assets/muscle.png";
import Gym from "./assets/gym.png";
import Cardio from "./assets/cardio.png";
import fleche from "./assets/rightArrow.png";

import Test from "./component/Header/Header";
import Travail from "./component/Header/Header";
import "/App.css";
import Atouts from "./component/Atouts/Atouts";


const the_best = document.querySelector(".pt");
window.addEventListener("load", () => {
  the_best.classList.toggle("point");
  console.log("changement effectuer ");
});


function App() {

  
useEffect(()=>{
  let numbre1= document.querySelector('.Numbre1');
  window.addEventListener("load", () => {
    numbre1.style.color="red";
    console.log("ca marche");
  });
  

},[])

  return (
    <div className="App" id="App">
      {/* //        <div class="overlay">
        
//         <span class="l
//         ">L</span><span class="l
//         ">o</span><span class="l
//         ">a</span><span class="l
//         ">d</span><span class="l
//         ">i</span><span class="l
//         ">n</span><span class="l
//         ">g</span>
// </div> */}
      <div className="App-gauche">
        <Header />
        <div className="fond-bleu niveau1"></div>
        <div className="The-best">
          <div className="pt"></div>
          <span>Le meilleur club de fitness au cameroun </span>
        </div>

        <div>
          <img src={flash} alt="" className="flash"></img>
        </div>

        <div className="Mot-courage">
          <div>
            <span className="stroke-text">Garde </span> <spann>Ta </spann>
          </div>
          <div>
            <span>Forme</span>
          </div>
          <div className="description">
            <span>
              Ici , nous vous aidons à garder votre corp en forme et surtout
              tout en dessinant votre silouettes
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span className="Number1">+40</span>
            <span>Coach expert</span>
          </div>

          <div>
            <span  className="Number2">+140</span>
            <span>Membres inscrit</span>
          </div>

          <div>
            <span  className="Number3">+100</span>
            <span>Programmes</span>
          </div>
        </div>

        <div className="figure-btn">
          <div className="btn">
            <button>s'enregister</button>
          </div>

          <div className="btn-p">
            <button>En savoir plus</button>
          </div>
        </div>
      </div>

      <div className="App-droite">
        <div className="top-image">
          <img src={top} alt=""></img>
        </div>
      </div>

      <section className="programme" id="programme">
        <h1>
          <span className="stroke-text">EXPLOREZ </span> Nos programes pour
          garder <span className="stroke-text">La forme</span>
        </h1>

        <div class="programme-box">
          <div className="box">
            <img src={Gym}></img>

            <p>Mini-Boost</p>

            <span className="description">
              Faites des exercices de tailles pur garder une bonne forme
              grfyugrufe rfriufe hhhiu ioohjhihoi ohjojij huhihiuhiu joioijoi
              oijoijoi joijoijij
            </span>
            <div className="btn-join">
              <span>Suivre</span>
              <img src={fleche}></img>
            </div>
          </div>

          <div className="box">
            <img src={Cardio}></img>
            <br></br>
            <p>Mini-Boost</p>

            <span className="description">
              Faites des exercices de tailles pur garder une bonne forme
              grfyugrufe rfriufe hhhiu ioohjhihoi ohjojij huhihiuhiu joioijoi
              oijoijoi joijoijij
            </span>
            <div className="btn-join">
              <span>Suivre</span>
              <img src={fleche}></img>
            </div>
          </div>

          <div className="box">
            <img src={Muscle}></img>
            <br></br>
            <p>Mini-Boost</p>
            <span className="description">
              Faites des exercices de tailles pur garder une bonne forme
              grfyugrufe rfriufe hhhiu ioohjhihoi ohjojij huhihiuhiu joioijoi
              oijoijoi joijoijij
            </span>
            <div className="btn-join">
              <span>Suivre</span>
              <img src={fleche}></img>
            </div>
          </div>
        </div>
      </section>

      <section className="Nos-atouts">
        <div>
          <Atouts></Atouts>
        </div>
        <Plan />
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
