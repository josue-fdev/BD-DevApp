import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            Aqui va el logo de la pagina
          </span>
        </Link>
        <button className="btn btn-primary">button</button>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              Aqui iria el icono de hamburguesa
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

