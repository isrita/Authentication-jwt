import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  //<a href="./demo.html">
  const { store, actions } = useContext(Context);
  const [fav, setfav] = useState([]);
  useEffect(() => {
    setfav(store.favoritos);
  }, [store.favoritos]);
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
        <div>
          <div className="nav-item dropdown">
            <Link
              to="/"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "white", fontSize: "1.2em" }}
            >
              Favoritos
            </Link>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbar Dropdown"
            >
              {fav && fav.length > 0 ? (
                <>
                  {fav.map((item, index) => {
                    return (
                      <ul key={index}>
                      <Link to={item.link} style={{ color: "black", fontSize: "1.2em" }}>
                        {item.name}
                      </Link>
                      <button onClick={() => actions.eliminarFavorito(index)}>X</button>
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
