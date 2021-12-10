import React from "react";  
import "./index.css"
import { BsArrowRight } from "react-icons/bs"

function Card ({title,description,image}) {
 
return(
    <div className="wrapperCard">
 <img src={image} alt="imagem" height="200"/>
 <div className="wrapperTitleCard"><h1>{title}</h1>
 <p> {description}</p>
 <a href="/" > Read Full  <BsArrowRight  className="iconArrow" color="blue" width="27" height="25" /> </a>
 </div>
    </div>
)


}


export default Card