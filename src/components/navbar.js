import React from "react";
import Logo from "./logo";
import SearchBar from "./search-bar";
import Icon from "./icon";
import Login from "./login";

export function Navbar() {
  return (
    <div className="navbar">
      <Logo logo="https://algoaqui" />
      <SearchBar des="Buscar" />
      <Icon ic="https://algoaqui" />
      <Icon ic="https://algoaqui" />
      <Icon ic="https://algoaqui" />
      <Login text="Iniciar sesión" />
    </div>
  );
}
