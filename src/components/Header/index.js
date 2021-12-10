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
              <a href="/"> <AiOutlineInstagram /> </a>
              <a href="/"> <FiGithub /> </a>
              <a href="/"> <AiOutlineLinkedin /></a>
          </ul>
      </header>
    )
}


export default Header