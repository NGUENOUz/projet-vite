import React from "react";

import './Contact.css';

function Contact (){

 
    return (
     
<div  className="Contact" id="Contact">
 

      <h1>Nous Contacter</h1>
        <form >
         
          <div className="Nom">
            <input type="text" placeholder="Nom :"></input>
          </div>
          <div className="Email">
            <input type="text" placeholder="Email :"></input>
          </div>
          <div className="Textarea">
            <textarea placeholder="Message"></textarea>
          </div>
        
        <div className="btn-submit">
          <button type="submit">Envoyer</button>
        </div>
        </form>

    
</div>
    )
}

export default Contact;