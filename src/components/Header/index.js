import React from "react";
import { AiOutlineInstagram } from "react-icons/ai"
import { FiGithub } from "react-icons/fi"
import { AiOutlineLinkedin } from "react-icons/ai"
import "./index.css"


function Header () {
    return (
      <header>
          <div className="logoHeader">ivanBlog</div>
          <ul>
              <a href="https://www.instagram.com/ivanmattcode/"> <AiOutlineInstagram /> </a>
              <a href="https://github.com/IvanMatt8"> <FiGithub /> </a>
              <a href="https://www.linkedin.com/in/ivan-matheus-41a60221b/"> <AiOutlineLinkedin /></a>
          </ul>
      </header>
    )
}


export default Header