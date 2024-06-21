import React from "react";

function Navbar() {
  return (
    <nav>
      <ul class="nav nav-pills">
        <li role="presentation" class="active">
          <a href="#">Home</a>
        </li>
        <li role="presentation">
          <a href="#">Profile</a>
        </li>
        <li role="presentation">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
