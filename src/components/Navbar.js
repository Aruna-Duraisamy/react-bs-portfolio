import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
        <ul class="navbar-nav bd-navbar-nav flex-row">
          <li class="nav-item active">
            <a class="nav-link " href="/">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/">
              Resume
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/">
              Feedback
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
