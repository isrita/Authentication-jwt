import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
/* import "./styles/home.css" */ export const Navbar = () => {
  //<a href="./demo.html">
  const { store, actions } = useContext(Context);
  const handleDelete = (item) => {
    const newFavoritos = favoritos.filter((f) => f.name !== item.name);
    setFavoritos(newFavoritos);
  };

  return (
    <nav className="navbar navbar-light black">
      <div className="container">
        <Link to="/">
          <span
            style={{
              fontFamily: "Star Jedi, sans-serif",
              fontSize: "3em",
              color: "#ffd600",
              textDecoration: "none",
              letterSpacing: "0.2em",
              fontWeight: "bold",
              letterSpacing: "-0.1em",
              textTransform: "uppercase",
            }}
          >
            STAR WARS
          </span>
        </Link>
        <div className="ml-auto"></div>
        <div>
          <div className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "white", fontSize: "1.2em" }}
            >
              Favoritos
            </div>
            <ul className=" dropdown-menu ">
              {store.favoritos && store.favoritos.length > 0 ? (
                <>
                  {store.favoritos.map((item, index) => {
                    const handleDelete = () => {
                      const newFavoritos = [...store.favoritos];
                      newFavoritos.splice(index, 1);
                      setStore({ ...store, favoritos: newFavoritos });
                    };
                    return (
						<ul key={index}>
						<Link to={item.link} style={{ color: "black", fontSize: "1.2em", }}>
						  {item.name}
						</Link>
						<button onClick={() => onDelete(item)}>X 
						
						</button>
					  </ul>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

/*

[{},{},{
	label:"",
	done:false
} ] 

[{},{},{
	name:"",
	uid:1,
	categoy:"people"
} ] 

*/
