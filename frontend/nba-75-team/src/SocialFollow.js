import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faReact,
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://www.linkedin.com/in/yusong-sh/"
        className="Linked-In">
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
      <a href="https://github.com/yusongsh"
        className="GitHub">
        <FontAwesomeIcon icon={faGithub} size="1x" />
      </a>
      <a href="https://yusong.space"
        className="Porfolio">
        <FontAwesomeIcon icon={faReact} size="1x" />
      </a>
</div>
  );
}


