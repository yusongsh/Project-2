import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faReact,
  } from "@fortawesome/free-brands-svg-icons";
import './App.css'

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://www.linkedin.com/in/yusong-sh/" rel="noreferrer" target="_blank"
        className="Linked-In" >
        <FontAwesomeIcon className="icon" icon={faLinkedin} size="1x" />
      </a>
      <a href="https://github.com/yusongsh" rel="noreferrer" target="_blank"
        className="GitHub" >
        <FontAwesomeIcon className="icon" icon={faGithub} size="1x" />
      </a>
      <a href="https://yusong.space" rel="noreferrer" target="_blank"
        className="Porfolio" >
        <FontAwesomeIcon className="icon" icon={faReact} size="1x" />
      </a>
</div>
  );
}


