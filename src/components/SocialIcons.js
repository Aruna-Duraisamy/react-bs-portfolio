import React from "react";

const SocialIcons = () => {
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center pb-2">
      <ul className="nav">
        <li className="d-block mx-2 mb-1">
          <a href="https://www.linkedin.com/in/aruna-duraisamy/">
            <i
              className="bi bi-linkedin"
              style={{ fontSize: "2rem", color: "white" }}
            ></i>
          </a>
        </li>
        <li className="d-block mx-2 mb-1">
          <a href="https://github.com/Aruna-Duraisamy">
            <i
              className="bi bi-github"
              style={{ fontSize: "2rem", color: "white" }}
            ></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
