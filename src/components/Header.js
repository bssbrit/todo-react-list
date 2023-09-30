import React from "react";
import { ReactComponent as Logo } from "../icons/icon-moon.svg";

import { useState } from "react";
const Header = ({ funcao }) => {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
    funcao(name);
  };
  return (
    <div>
      <div>
        <h1>TODO</h1>
        <div>
          <Logo />
        </div>
      </div>
      <div>
        <p>{name}</p>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Header;
