import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav class="nav nav-pills flex-column flex-sm-row">
        <a
          class="flex-sm-fill text-sm-center nav-link active"
          aria-current="page"
          href="./AboutMe"
        >
          About Me
        </a>
        <a class="flex-sm-fill text-sm-center nav-link" href="./Resume">
          Resume
        </a>
        <a class="flex-sm-fill text-sm-center nav-link" href="./Projects">
          Projects
        </a>
        <a
          class="flex-sm-fill text-sm-center nav-link disabled"
          href="./Feedback"
          tabindex="-1"
          aria-disabled="true"
        >
          Feedback
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
