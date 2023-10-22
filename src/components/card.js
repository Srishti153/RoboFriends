import React from "react";
import "./card.css";

const  Card = ({name, email, id} ) => {

  return(
   <div className="body">              
     <div className="container">
       <div className="card">
         <div className="imgbox tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
           <img src={`https://robohash.org/${id}?200*200`} alt="robot" /> 
         </div>
         <div className="details">
           <h2 className="name">{name}</h2>
           <h3 className="email">{email}</h3>
         </div>
        </div>
      </div>
   </div>
        );
}

export default Card;